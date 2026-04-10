// Vercel Serverless Function — replaces server/index.js
// Deployed at: /api/profile?username=<handle>

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const username = ((req.query.username ?? "")).trim().replace(/^@/, "");
    if (!username) {
        return res.status(400).json({ error: "Username is required." });
    }

    const token = process.env.APIFY_TOKEN ?? process.env.VITE_APIFY_TOKEN;
    if (!token || token === "your_apify_token_here") {
        return res.status(503).json({ error: "No Apify token configured on server." });
    }

    try {
        // Start Apify run and wait up to 90s
        const runRes = await fetch(
            `https://api.apify.com/v2/acts/apify~instagram-profile-scraper/runs?token=${token}&waitForFinish=90`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usernames: [username] }),
                signal: AbortSignal.timeout(100_000),
            }
        );

        if (!runRes.ok) {
            const errBody = await runRes.text();
            return res.status(502).json({ error: `Apify HTTP ${runRes.status}: ${errBody}` });
        }

        const runInfo = await runRes.json();
        const datasetId = runInfo?.data?.defaultDatasetId;
        if (!datasetId) {
            return res.status(502).json({ error: "Apify returned no dataset." });
        }

        const itemsRes = await fetch(
            `https://api.apify.com/v2/datasets/${datasetId}/items?token=${token}`
        );
        if (!itemsRes.ok) {
            return res.status(502).json({ error: "Failed to fetch Apify dataset." });
        }

        const items = await itemsRes.json();
        if (!items?.length) {
            return res.status(404).json({ error: "No data found for this username." });
        }

        const u = items[0];
        const rawPic = u.profilePicUrlHD ?? u.profilePicUrl ?? "";

        return res.json({
            username: u.username ?? username,
            fullName: u.fullName ?? "",
            followers: u.followersCount ?? 0,
            following: u.followsCount ?? 0,
            posts: u.postsCount ?? 0,
            bio: u.biography ?? "",
            profilePic: rawPic ? `https://wsrv.nl/?url=${encodeURIComponent(rawPic)}` : "",
            isBusinessAccount: u.isBusinessAccount ?? false,
            businessCategoryName: u.businessCategoryName ?? "Digital Creator",
            dataSource: "apify",
        });
    } catch (err) {
        return res.status(502).json({ error: `Apify error: ${err.message}` });
    }
}
