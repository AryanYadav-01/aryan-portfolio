export const PROFILE = {
  name: "Aryan Yadav",
  role: "Full Stack & GenAI Engineer",
  location: "Lucknow, Uttar Pradesh",
  university: "BBD University",
  degree: "B.Tech CSE '26",
  cgpa: "7.1 / 10",
  email: "ay630147@gmail.com",
  phone: "+91 88535 30329",
  github: "https://github.com/AryanYadav-01",
  linkedin: "https://linkedin.com/in/aryan-yadav-bb5808325",
  githubUsername: "AryanYadav-01",
};

export const SKILLS = [
  {
    num: "01", icon: "⚡", name: "Frontend",
    tags: ["React.js","JavaScript","HTML5 / CSS3","Tailwind","Bootstrap","Context API","Axios"],
  },
  {
    num: "02", icon: "🔧", name: "Backend",
    tags: ["Node.js","Express.js","REST APIs","JWT Auth","Multer","Zod","Puppeteer"],
  },
  {
    num: "03", icon: "🤖", name: "AI & Cloud",
    tags: ["Gemini API","GenAI Pipelines","EDA","Firebase","MongoDB Atlas"],
  },
  {
    num: "04", icon: "🗄️", name: "Databases",
    tags: ["MongoDB","MySQL","Firebase"],
  },
  {
    num: "05", icon: "💻", name: "Languages",
    tags: ["JavaScript","Java","C","SQL","OOPs"],
  },
  {
    num: "06", icon: "🛠️", name: "Dev Tools",
    tags: ["Git / GitHub","Vercel","VS Code","Postman"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    tag: "Featured · SaaS · GenAI",
    title: "INTERVIEW\nAI PLATFORM",
    desc: "A production-ready GenAI SaaS for end-to-end job interview preparation — AI resume parsing, skill gap analysis, dynamic question generation.",
    features: [
      "Google Gemini AI for resume parsing & skill gap detection",
      "ATS-optimized PDF generation via Puppeteer pipeline",
      "JWT Token Blacklisting for robust session security",
      "4-layer React frontend with Context API global state",
    ],
    tech: ["React.js","Node.js","MongoDB","Gemini API","JWT","Puppeteer"],
    link: "https://interview-ai-nine-mu.vercel.app",
    linkLabel: "View Live",
    bg: "bg-1",
  },
  {
    num: "02",
    tag: "Full Stack · Cloud · Storage",
    title: "CLOUD\nDRIVE CLONE",
    desc: "A production-grade Google Drive replica — file upload, cloud storage, folder management, real-time sync, and role-based file sharing.",
    features: [
      "Firebase Authentication + role-based cloud storage",
      "MongoDB for metadata management & retrieval",
      "Mobile-first responsive UI with Tailwind CSS",
      "Optimized real-time sync across all devices",
    ],
    tech: ["React.js","Node.js","Firebase","MongoDB","Tailwind"],
    link: "https://github.com/AryanYadav-01",
    linkLabel: "View GitHub",
    bg: "bg-2",
  },
];

export const EXPERIENCE = [
  {
    year: "APR 2025",
    role: "MERN Stack Training Intern",
    company: "LEARNOVATE TRAINING AGENCY · LUCKNOW",
    body: "Intensive hands-on MERN training building scalable REST APIs and dynamic frontend interfaces. Designed and deployed full-stack apps with real-time data flow and structured team-based development sessions.",
    type: "Internship",
  },
  {
    year: "2022 – 2026",
    role: "B.Tech — Computer Science",
    company: "BBD UNIVERSITY · LUCKNOW",
    body: "4-year CSE program. CGPA 7.1/10. Built 2+ production projects independently alongside academics. Deep focus on full-stack engineering and Generative AI integrations.",
    type: "Education",
  },
  {
    year: "2019 – 2022",
    role: "High School — Science (PCM)",
    company: "CITY CONVENT SCHOOL · ICSE BOARD",
    body: "Completed Intermediate and High School with Physics, Chemistry, and Mathematics. Built strong analytical thinking and problem-solving foundations.",
    type: "Education",
  },
];

export const CERTIFICATIONS = [
  {
    icon: "🏆",
    name: "Tata Group Data Analytics Simulation",
    issuer: "Forage · August 2025",
    desc: "AI-powered data analytics & business strategy simulation for Tata iQ Financial Services. Performed EDA with GenAI tools, validated no-code predictive modeling frameworks, and designed AI-driven collections strategies.",
  },
  {
    icon: "🧠",
    name: "MERN Stack Development",
    issuer: "Learnovate Training Agency · 2025",
    desc: "Intensive practical certification covering MongoDB, Express.js, React.js, and Node.js. Built and deployed production-grade applications with REST API integration and real-time database management.",
  },
];

export const BLOGS = [
  {
    num: "01",
    tag: "GenAI · Tutorial",
    title: "Building an AI Resume Parser with Google Gemini",
    excerpt: "How I integrated Gemini API to parse resumes, detect skill gaps, and generate personalized interview questions — lessons from building my SaaS platform.",
    date: "May 2025",
    read: "8 min read",
    body: `
<h2>The Problem I Was Solving</h2>
<p>When I started building my <strong>Interview AI SaaS platform</strong>, I needed a way to automatically extract skills, experience, and gaps from any uploaded resume — without manually writing hundreds of regex patterns. That's where <strong>Google Gemini API</strong> changed everything.</p>
<h2>Setting Up Gemini in Node.js</h2>
<p>First, install the SDK and configure your API key:</p>
<pre><code>npm install @google/generative-ai

const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });</code></pre>
<h2>The Prompt Engineering</h2>
<p>The key is writing a precise prompt that forces structured JSON output. Vague prompts = garbage output.</p>
<pre><code>const prompt = \`Analyze this resume and return ONLY JSON:
{
  "skills": [],
  "experience_years": 0,
  "missing_skills": [],
  "interview_questions": []
}
Resume: \${resumeText}\`;</code></pre>
<h2>Key Lessons Learned</h2>
<ul>
<li>Always validate JSON output — Gemini occasionally adds markdown fences</li>
<li>Strip backtick wrappers before parsing</li>
<li>Set temperature: 0.2 for deterministic outputs</li>
<li>Cache results in MongoDB to avoid redundant API calls</li>
</ul>
<p>With this pipeline, my platform analyzes any resume in under 3 seconds. The <strong>real magic</strong> is in the prompt design, not the code.</p>`,
  },
  {
    num: "02",
    tag: "Backend · Security",
    title: "JWT Token Blacklisting: The Right Way to Handle Logout",
    excerpt: "Most tutorials skip this. Here's how to implement secure logout with JWT blacklisting using Node.js + MongoDB, and why it matters for production apps.",
    date: "Apr 2025",
    read: "6 min read",
    body: `
<h2>Why Standard JWT Logout is Broken</h2>
<p>Most MERN tutorials just delete the cookie on logout. But <strong>JWTs are stateless</strong> — if a token is stolen, deleting it client-side does nothing. It remains valid on the server. This is a real production security hole.</p>
<h2>The Solution: Token Blacklisting</h2>
<p>Maintain a server-side blacklist of invalidated tokens in MongoDB, checked on every protected request.</p>
<h2>Setting Up the Blacklist Model</h2>
<pre><code>const blacklistSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: '7d' }
});
module.exports = mongoose.model('BlacklistedToken', blacklistSchema);</code></pre>
<h2>Updated Auth Middleware</h2>
<pre><code>const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const isBlacklisted = await BlacklistedToken.findOne({ token });
  if (isBlacklisted) return res.status(401).json({ error: 'Token revoked' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};</code></pre>
<h2>Performance Tips</h2>
<ul>
<li>Add MongoDB index on token field for fast lookups</li>
<li>TTL index auto-purges expired tokens — keeps collection lean</li>
<li>Use Redis for high-traffic apps — sub-millisecond checks</li>
</ul>
<p>This pattern eliminates an entire class of security vulnerabilities. 20 extra lines — always worth it.</p>`,
  },
  {
    num: "03",
    tag: "Full Stack · Architecture",
    title: "Architecting a 4-Layer React Frontend That Actually Scales",
    excerpt: "A practical guide to structuring React apps with a service layer, custom hooks, and Context API — the architecture I use in every project I build.",
    date: "Mar 2025",
    read: "10 min read",
    body: `
<h2>The 4 Layers</h2>
<ul>
<li><strong>Layer 1 — API Service Layer:</strong> All Axios calls live here. Components never call fetch/axios directly.</li>
<li><strong>Layer 2 — Custom Hooks:</strong> Business logic, loading states, error handling.</li>
<li><strong>Layer 3 — Context API:</strong> Global state multiple components need.</li>
<li><strong>Layer 4 — UI Components:</strong> Pure presentational — only receive props, no API logic.</li>
</ul>
<h2>Layer 1: Service Layer</h2>
<pre><code>const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});
export const analyzeResume = (fd) => API.post('/resume/analyze', fd);</code></pre>
<h2>Layer 2: Custom Hook</h2>
<pre><code>export const useResume = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const analyze = async (file) => {
    setLoading(true);
    const fd = new FormData(); fd.append('resume', file);
    const { data } = await analyzeResume(fd);
    setResult(data); setLoading(false);
  };
  return { analyze, loading, result };
};</code></pre>
<h2>Why This Works</h2>
<ul>
<li>Swap API URL? Change one file in services/</li>
<li>Add caching? Update the hook, not 10 components</li>
<li>New dev joins? They know exactly where each type of code lives</li>
<li>Feature #5 took half the time of feature #1</li>
</ul>`,
  },
];

export const SYSTEM_PROMPT = `You are Aryan's friendly, sharp AI assistant embedded in his portfolio website.
Your job: answer questions about Aryan Yadav concisely and with personality.

ARYAN'S PROFILE:
- Full Name: Aryan Yadav
- Location: Lucknow, Uttar Pradesh, India
- Education: B.Tech CSE, BBD University (2022-2026), CGPA 7.1/10
- Contact: ay630147@gmail.com | +91 8853530329
- GitHub: github.com/AryanYadav-01
- LinkedIn: linkedin.com/in/aryan-yadav-bb5808325
- Status: Actively looking for Full Stack / GenAI engineering roles

SKILLS: React.js, Node.js, Express.js, MongoDB, Google Gemini API, JWT, Puppeteer, Firebase, Tailwind CSS, JavaScript, Java, C, SQL

PROJECTS:
1. GenAI Interview Preparation SaaS (interview-ai-nine-mu.vercel.app) - Gemini AI, resume parsing, ATS PDF generation, JWT blacklisting, 4-layer React frontend
2. Cloud Drive Clone - Firebase auth, role-based storage, MongoDB, Tailwind CSS

EXPERIENCE: MERN Stack Training Intern at Learnovate Training Agency (April 2025)

CERTIFICATIONS: Tata Group Data Analytics Job Simulation (Forage, Aug 2025), MERN Stack (Learnovate 2025)

Be direct, a little witty, keep responses concise (2-4 short paragraphs max). Use bullet points for lists. Speak as Aryan's knowledgeable colleague. If asked something unknown, suggest emailing ay630147@gmail.com.`;
