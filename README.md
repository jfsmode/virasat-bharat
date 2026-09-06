# 🏛️ Virasat Bharat (विरासत भारत)
### *The Living Cultural Heritage, Craftsmanship & Oral Traditions of India*

[![React](https://img.shields.io/badge/React-19.0.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-Enabled-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

---

## 📖 Overview

**Virasat Bharat** is an interactive, full-stack cultural-tech platform celebrating the intangible oral heritage, ancient architecture, GI-tagged indigenous crafts, festivals, folk music, and linguistic diversity across **all 28 States and 8 Union Territories of India**.

Combining rich curated archival research with **Google Gemini**, Virasat Bharat brings ancient knowledge to life through conversational AI grandmothers (*Dadi, Ammachi, Aaji, Thamma, Paati*), authentic dialect transliterators, an interactive geographic atlas, lost colloquialism engines, and procedural folk synthesizers.

---

## ✨ Key Features

### 🗺️ 1. Interactive Geographic Atlas & State Explorer
- **Interactive Vector Map**: Built with SVG mapping and D3 projection geometry for seamless navigation across all 28 states and union territories.
- **Regional Zone Filtering**: Quick-filter by *North, South, East, West, Central, North-East, and Union Territories*.
- **Comprehensive State Dossiers**: Detailed breakdown of regional capitals, languages, dialects, signature festivals, heritage monuments, heirloom recipes, and indigenous games.

### 👵 2. Grandma’s Living Memory Archive (*Dadi's Chest*)
- **Folk Songs & Oral Melodies**: Cultural significance, seasonal performance context, and regional instruments.
- **Heirloom Recipes**: Traditional culinary heritage with regional dietary categorization, ingredients, and ancestral cooking methods.
- **Childhood Folk Games**: Rules, history, and life skills developed in games like *Gilli Danda, Pallanguzhi, Lagori, and Pachisi*.
- **Local Traditions & Proverbs**: Deep explanations of everyday rituals and seasonal folk wisdom.

### 🏛️ 3. Monuments & Architectural Engineering
- Explore rock-cut temples, stepwells (*baolis*), Dravidian *gopurams*, acoustic whispering galleries, and solar-aligned sanctuaries.
- Detailed modal views featuring dynastic origins (Chola, Vijayanagara, Maurya, Mughal, etc.), engineering secrets, and cultural significance.

### 🎨 4. GI-Tagged Crafts & Master Artisans
- Profiles of GI-tagged crafts such as *Kanchipuram Silk, Dhokra Metallurgy, Blue Pottery, Madhubani Painting, Pashmina, and Channapatna Toys*.
- Step-by-step artisanal processes, material sourcing, and master artisan profiles (*Meet the Makers*).

### 🤖 5. AI Cultural Agents & Translators (Powered by Google Gemini)
- **Grandma Language Chatbot**: Converse with regional grandmothers in their native script (Devanagari, Tamil, Telugu, Bengali, Kannada, Malayalam, Odia, Gurmukhi, Gujarati) with Romanized phonetic transliteration and English translations.
- **Grandma's Knowledge AI**: Discover ancient architectural secrets (e.g., herbal lime mortars, earthquake resistance) and craft metallurgy.
- **Lost Everyday Words Engine**: Discover rare, nostalgic colloquialisms, slang, and village idioms that textbooks omit, complete with humor punchlines.
- **Folklore Storyteller**: Authentic 3-paragraph bedtime oral folk tales illustrating timeless Indian morals.
- **Floating Heritage Assistant**: Persistent, non-intrusive AI companion accessible throughout the platform.

### 🎵 6. Ambient Heritage Audio & Folk Synthesizer
- Interactive procedural Web Audio synthesizer playing authentic traditional scales (Ragas, pentatonic folk scales).
- Ambient soundscapes including temple bells, village morning birds, monsoon rain, and earthen flutes.

### 🔍 7. Global Search & Heritage Themes
- Instant modal search (`Cmd + K` / `Ctrl + K`) spanning all states, monuments, crafts, festivals, dishes, and words.
- Warm terracotta light and obsidian heritage dark themes with persistent preference storage.

---

## 🛠️ Architecture & Tech Stack

```
┌────────────────────────────────────────────────────────┐
│                   Virasat Bharat UI                    │
│      React 19 • Tailwind CSS v4 • Motion • Lucide     │
└───────────────────────────┬────────────────────────────┘
                            │ (Client API Fetch)
┌───────────────────────────▼────────────────────────────┐
│                  Express Node Server                   │
│             TypeScript • tsx • esbuild (dist)          │
└──────────────┬───────────────────────────┬─────────────┘
               │                           │
┌──────────────▼──────────────┐ ┌──────────▼─────────────┐
│    Static Assets & SPA      │ │   Google Gemini API    │
│   Vite Middleware / Dist    │ │   @google/genai SDK    │
└─────────────────────────────┘ └────────────────────────┘
```

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript (~5.8.2), Vite 6 |
| **Styling & Animation** | Tailwind CSS v4, Motion (`motion/react`), Canvas Confetti |
| **Mapping & Visuals** | `@svg-maps/india`, `d3-geo`, Lucide React |
| **Backend & Routing** | Express 4, Node.js, `tsx`, `esbuild` |
| **AI & LLM Services** | Google Gen AI SDK (`@google/genai` v2.4.0), Google Gemini |
| **Audio Synthesis** | HTML5 Web Audio API (Sine/Triangle oscillators & custom scales) |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** (v9+) or **yarn** / **pnpm** / **bun**
- A **Google Gemini API Key** (Get one at [Google AI Studio](https://aistudio.google.com/))

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/virasat-bharat.git
   cd virasat-bharat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

   Add your Google Gemini API key to `.env`:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=3000
   ```

---

## 💻 Usage & Scripts

### Development Mode
Runs the Express backend and Vite development server with hot-reload:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Type Checking & Linting
Run static TypeScript analysis across the entire project:
```bash
npm run lint
```

### Production Build
Builds the client bundle into `dist/` and bundles the server into a standalone CommonJS bundle `dist/server.cjs` via `esbuild`:
```bash
npm run build
```

### Production Start
Starts the production server:
```bash
npm start
```

### Clean Artifacts
Remove build outputs and generated files:
```bash
npm run clean
```

---

## 📡 API Reference

The backend Express server exposes dedicated endpoints for Gemini AI interactions with fallback responses when no API key is provided:

### 1. AI Regional Language & Grandma Chat
- **Endpoint**: `POST /api/gemini/translate`
- **Payload**:
  ```json
  {
    "text": "How are you doing today?",
    "targetState": "Tamil Nadu",
    "targetLanguage": "Tamil",
    "grandmaTitle": "Paati",
    "replyMode": "bilingual",
    "persona": "loving",
    "chatHistory": []
  }
  ```
- **Response**: Returns native script, English meaning, phonetic pronunciation, dialect name, cultural context, and an endearing grandma note.

---

### 2. Grandma's Ancient Knowledge AI
- **Endpoint**: `POST /api/gemini/grandma-knowledge`
- **Payload**:
  ```json
  {
    "question": "How did ancient builders make earthquake-resistant temples?",
    "domain": "monuments",
    "selectedState": "Odisha",
    "targetLanguage": "Odia",
    "grandmaTitle": "Aai"
  }
  ```
- **Response**: Returns native script excerpt, English breakdown, ancestral secrets (e.g., mortar recipes, acoustics), and historical facts.

---

### 3. Lost Everyday Words Engine
- **Endpoint**: `POST /api/gemini/lost-words`
- **Payload**:
  ```json
  {
    "word": "afternoon nap",
    "stateName": "Maharashtra",
    "language": "Marathi"
  }
  ```
- **Response**: Returns regional colloquialism (e.g., *Vamkuki*), native script, cultural context, example sentences, and humor punchlines.

---

### 4. Bedtime Folklore Storyteller
- **Endpoint**: `POST /api/gemini/folklore-story`
- **Payload**:
  ```json
  {
    "stateName": "Rajasthan",
    "theme": "Courage and Desert Legends"
  }
  ```
- **Response**: Returns title, 3-paragraph authentic folk tale, origin community, and moral lesson.

---

### 5. Health Check
- **Endpoint**: `GET /api/health`
- **Response**: `{"status": "ok", "timestamp": "..."}`

---

## 📁 Project Directory Structure

```
├── .env.example               # Environment variables template
├── metadata.json              # AI Studio application metadata
├── package.json               # Dependencies and build scripts
├── server.ts                  # Express server & Gemini AI API routes
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration with Tailwind CSS plugin
├── src/
│   ├── App.tsx                # Main React entry & view coordinator
│   ├── main.tsx               # DOM mount point
│   ├── index.css              # Global styles & Tailwind v4 configuration
│   ├── types.ts               # Shared TypeScript models and interfaces
│   ├── data/                  # Curated archival records
│   │   ├── allStatesRegistry.ts  # Master registry of 36 States & UTs
│   │   ├── statesData.ts         # Deep cultural datasets (songs, recipes, crafts)
│   │   ├── grandmaLanguages.ts   # Linguistic configurations & titles
│   │   ├── lostWordsPreset.ts    # Curated lost regional expressions
│   │   ├── didYouKnowData.ts     # Heritage trivia and cultural facts
│   │   └── indiaPath.ts          # SVG map geometric path definitions
│   └── components/            # Modular React components
│       ├── Navbar.tsx             # Navigation header & quick-links
│       ├── Hero.tsx               # Immersive hero section
│       ├── InteractiveMap.tsx     # Vector SVG map & state explorer
│       ├── GrandmaArchive.tsx     # Living oral traditions & recipes
│       ├── HeritageCulture.tsx    # Monuments & living festivals
│       ├── Craftsmanship.tsx      # GI crafts & master artisan profiles
│       ├── LostWordsChatbot.tsx   # Interactive regional word explorer
│       ├── LanguageGrandmaAI.tsx  # Multi-dialect conversational AI
│       ├── GrandmasKnowledgeAI.tsx# Ancient architecture & craft AI
│       ├── FloatingGrandmaAI.tsx  # Omnipresent AI assistant
│       ├── FolkMusicPlayer.tsx    # Traditional scale sound synthesizer
│       ├── AmbientSoundPlayer.tsx # Ambient soundscapes player
│       ├── GlobalSearchModal.tsx  # Cmd+K universal search modal
│       ├── MonumentModal.tsx      # Heritage monument modal
│       ├── FestivalModal.tsx      # Festival lore & customs modal
│       ├── ArtisanModal.tsx       # Master artisan story modal
│       ├── DidYouKnowSection.tsx  # Cultural trivia cards
│       └── Footer.tsx             # Footer & attribution
```

---

## 🤝 Contributing

Contributions celebrating Indian heritage, regional languages, folk arts, and crafts are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AddStateFolkArt`)
3. Commit your Changes (`git commit -m 'Add folk traditions for Himachal Pradesh'`)
4. Push to the Branch (`git push origin feature/AddStateFolkArt`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **GNU General Public License v3.0 (GPLv3)**. See [`LICENSE`](LICENSE) for the complete license terms and conditions.

---

<div align="center">
  <p>Made with devotion to preserving the timeless wisdom and diverse heritage of <b>Bharat 🇮🇳</b></p>
</div>

