# FastResume 🚀

FastResume is a high-performance, AI-enhanced resume builder designed for developers and technical professionals who need speed, precision, and ATS-optimized output.

Built with **Next.js 15**, **Turbopack**, and the **Vercel AI SDK**, it combines a data-driven JSON workflow with powerful Google Gemini-powered tailoring capabilities.

---

## 🌟 Key Features

### 🤖 AI Resume Tailor

Stop manually editing bullet points for every job application. FastResume includes an integrated **AI Tailoring Tool** that:

- Analyzes any Job Description (JD).
- Ruthlessly prunes and rewrites your resume content to fit a strict **one-page constraint**.
- Prioritizes most recent experiences and mirrors ATS keywords effectively.
- Returns a perfectly structured JSON that you can apply instantly.

### 📐 One-Page Precision

The layout is engineered with **aggressive spacing compression** to maximize one-page density. Every millimeter is reclaimed using:

- Micro-margins (`2px` section gaps).
- Automated font-size scaling for headers and names.
- Tightened leading and line heights optimized for PDF export.

### 📝 Temporary Edit Mode

Iterate in real-time without touching your source files.

- The **Temporary Editor** allows you to paste or modify your resume JSON in a session-only environment.
- Perfect for quick "what-if" scenarios or applying AI-tailored content before exporting.

### 📄 Professional PDF Export

Get a clean, ATS-friendly, and minimalist resume every time using the browser's native print-to-PDF functionality, enhanced by specific `@media print` CSS refinements.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Engine**: Turbopack for ultra-fast development
- **AI**: Vercel AI SDK + Google Gemini (`gemini-1.5-flash-preview`)
- **Styling**: Vanilla CSS + Tailwind CSS (for the UI)
- **Language**: TypeScript

---

## 🚀 Getting Started

### 1. Installation

FastResume prefers `pnpm` for package management.

```bash
git clone https://github.com/Thiraput01/FastResume.git
cd FastResume
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

### 3. Configure AI (Optional)

To use the AI Tailor Tool, you satisfy the requirements in the UI:

1. Provide a **Gemini API Key** (stored locally in your browser).
2. Paste the **Job Description**.
3. Click **Tailor Resume**.

---

## 📂 Project Structure

- `app/page.tsx`: The heart of the application rendering the resume and the temporary editor.
- `app/api/ai-tailor/route.ts`: Specialized endpoint for structured AI generation.
- `lib/data.ts`: Your "source of truth" resume data.
- `lib/ai-config.ts`: Centralized configuration for AI model and system prompts.

---

## 🤝 Credits

Inspired by the minimalist standard résumé template by [narze](https://github.com/narze/resume) and refined through the [resumette](https://github.com/Leomotors/resumette) ecosystem.

---

## 📜 License

MIT
