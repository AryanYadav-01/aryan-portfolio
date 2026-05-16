# Aryan Yadav — Portfolio (Next.js App Router)

Built with Next.js 15, GSAP, TypeScript, Tailwind CSS + server-side Claude AI chatbot.

## Quick Start

### 1. Install
```bash
npm install
```

### 2. Set your API key in .env.local
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```
Get it at: https://console.anthropic.com

### 3. Add your resume PDF
Place it at: `public/Aryan_Yadav_Resume_ATS.pdf`

### 4. Run
```bash
npm run dev   # localhost:3000
npm run build # production build
```

## Deploy to Vercel (Free)
1. Push to GitHub
2. Import at vercel.com
3. Add ANTHROPIC_API_KEY in Vercel environment variables
4. Deploy — done!

## Customize Content
Everything lives in `lib/data.ts` — edit PROFILE, SKILLS, PROJECTS, EXPERIENCE, BLOGS, SYSTEM_PROMPT.

## Project Structure
```
app/
  api/chat/route.ts   ← Server-side chatbot (key stays secret)
  layout.tsx          ← SEO metadata
  page.tsx            ← Main page
components/
  Cursor.tsx          ← Custom magnetic cursor
  Hero.tsx            ← Hero + parallax
  Navbar.tsx          ← Fixed nav
  Preloader.tsx       ← Loading screen
  Sections.tsx        ← All other sections
lib/
  data.ts             ← All content in one place
```
