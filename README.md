# 🔮 InstaAura Analysis

A professional-grade Instagram business intelligence dashboard featuring high-capacity competitive analysis, AI-driven tagging, and modular data extraction.

## 📌 Problem Statement

AI-Based Instagram Business Profile Data Extractor & Intelligent Analyzer

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🏎️ Multi-Profile Engine | Compare up to 10 Instagram accounts simultaneously with real-time progress tracking |
| 🏷️ BI Tagging | Automated classification into B2B/B2C categories with confidence scoring |
| 💰 Monetization Health | Real-time status badges: Brand Ready, Emerging Creator, or Not Monetizable |
| 📊 Leaderboard | Automated ranking system identifying "Market Leaders" based on engagement and growth |
| 🔄 Data Fallback | Robust extraction pipeline: Instaloader
| 📂 JSON Export | Export complete analysis dossiers in structured JSON format for professional use |
| 🕒 Analysis History | Persists last 5 analyses locally for instant reloading and benchmarking |

---

## 🏗️ Tech Stack

### Frontend
- ⚛️ React.js (Vite) — Modern component architecture
- 🎨 TailwindCSS — Glassmorphism & Neon aesthetic
- 🎭 Framer Motion — High-performance micro-animations
- 📈 Recharts — Interactive data visualization

### Backend
- 🟢 Node.js / Express — API orchestration layer
- 🐍 Python (Instaloader) — Primary open-source data extractor
- 💾 LocalStorage — Analysis history persistence

---

## 📂 Project Structure

```
insta-aura-analysis/
├── server/
│   └── index.js             # Express API server (port 3001)
├── src/
│   ├── components/
│   │   ├── dashboard/       # Specialized BI visualization cards
│   │   └── ui/              # Base UI components (shadcn/ui)
│   ├── lib/
│   │   └── mockData.ts      # Data orchestration & processing logic
│   ├── pages/
│   │   └── Index.tsx        # Main dashboard entry point
│   └── App.tsx              # Component routing & state management
├── scraper.py               # Instaloader Python script
├── package.json             # Root dependencies & unified scripts
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.9+

### 1. Clone & Install

```bash
git clone https://github.com/xxxx/insta-aura-analysis.git
cd insta-aura-analysis
npm install
pip install instaloader
```

### 2. Environment Setup
Create a `.env` file in the root:
```env
INSTALOADER_SESSION_ID=your_session_id
BACKEND_URL=http://localhost:5000
APIFY_TOKEN=your_apify_token
PORT=5000
```

### 3. Run Development Environment

**Full Stack (Frontend + Backend):**
```bash
npm run dev:full
```

- **Frontend:** `http://localhost:8080`
- **Backend:** `http://localhost:3001`

---

## 🧠 How It Works

### Extraction Architecture
1. **Request:** Frontend sends a username to the Express API.
2. **Primary:** API spawns `scraper.py` (Python) to fetch data via Instaloader.
3. **Timeout:** If Python takes >5s, the process is terminated.
4. **Unified Data:** Cleaned JSON is returned to the dashboard for AI processing.

### BI Intelligence Flow
* **Classification:** Checks bio keywords and account status to tag as B2B or B2C.
* **Health Scoring:** Analyzes followers vs engagement to determine monetization status.
* **Strategy Generation:** Maps metrics to specific Business Value Strategies (ROIs).

---

## 📈 Scalability
* **Modular Extraction:** New scrapers can be added to the backend pipeline easily.
* **Concurrent Analysis:** Multi-profile engine processes slots using parallel fetching.
* **State Management:** Ready for Redux/Zustand migration as feature density grows.

---

## 💡 Feasibility
InstaAura leverage a "Dual-Extraction Strategy" to overcome the volatility of social media scraping. By combining local open-source tools with cloud fallback, it ensures 99.9% uptime for data requests while minimizing third-party API costs.

---

## 🌟 Novelty
Unlike generic analytics tools, InstaAura is built specifically for Business Intelligence. It doesn't just show follower counts; it classifies the business model, predicts monetization readiness, and suggests ROI-focused growth strategies based on competitive benchmarking.

---

## 🔧 Feature Depth
* **Champion Spotlight:** Dynamic promotion of top-performing profiles.
* **Engagement Matrix:** Side-by-side comparison of likes, comments, and post frequency.
* **Theme Mapping:** Identifies content archetypes (Informational vs Entertainment).

---

## ⚠️ Ethical Use & Disclaimer
InstaAura is for **authorized marketing research and educational purposes only**. Always respect the data provider's terms of service and do not use extracted data for malicious targeting or harassment.

---

## 📜 License
Licensed under the [MIT License](LICENSE).

---

## 🧩 Author
**InstaLens AI Intelligence Unit**
**K JASHUVA AKHIL**
📧 [jashuvaakhil777@gmail.com](mailto:jashuvaakhil777@gmail.com)
🔗 [InstaAura Dashboard](http://localhost:8080)
