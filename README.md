# 🗺️ TZ Tourism Web

> Next.js web application for Tanzania tourism platform - explore attractions with GPS-accurate data, real-time weather, and interactive maps.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8.svg)](https://tailwindcss.com/)

**Backend API:** [tz-tourism](https://github.com/yourusername/tz-tourism)

---

## 🎯 About

Web frontend for TZ Tourism platform - a modern Next.js application consuming the TZ Tourism REST API.

**Backend repository:** [tz-tourism](https://github.com/yourusername/tz-tourism)

---

## 🏗️ Structure

```
tz-tourism-web/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/              # API client & utilities
│   └── public/           # Static assets
├── package.json
└── tsconfig.json
```

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/yourusername/tz-tourism-web.git
cd tz-tourism-web
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with API URL

# Run development server
npm run dev
```

**Runs at:** `http://localhost:3000`

---

## ⚙️ Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

---

## 📦 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production
npm run lint     # ESLint
```

---

## 🛠️ Tech Stack

- Next.js 14+ (App Router)
- TypeScript 5+
- Tailwind CSS 3+
- React 18+

---

## 📄 Pages (Coming Soon)

- `/` - Home
- `/attractions` - Browse attractions
- `/regions` - Browse regions
- `/about` - About page

---

## 📊 Status

**Current:**
- ✅ Next.js boilerplate
- ✅ Tailwind CSS setup
- ✅ API client utilities
- ✅ Basic components

**Roadmap:**
- ⏳ Attraction pages
- ⏳ Map integration
- ⏳ Weather widgets
- ⏳ Search & filters
- ⏳ PWA support

---

## 🔌 API Integration

```typescript
import { api } from '@/lib/api';

const attractions = await api.getAttractions();
const attraction = await api.getAttraction(1);
const weather = await api.getAttractionWeather(1);
```

---

## 📜 License

MIT License - Free to use, modify, and distribute.

---

**⚡ Built with Next.js + TypeScript | 🇹🇿 Made in Tanzania**
