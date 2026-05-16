"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS, PROJECTS, EXPERIENCE, CERTIFICATIONS, BLOGS, PROFILE } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ─── MARQUEE ─── */
export function Marquee() {
  const items = ["React.js","Node.js","Gemini AI","MongoDB","Express.js","JWT Auth","Puppeteer","Firebase","Tailwind CSS","GenAI SaaS","REST APIs","Full Stack"];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,.08)", borderBottom: "1px solid rgba(255,255,255,.08)", background: "var(--yellow)" }}>
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ fontFamily: "Anton, sans-serif", fontSize: "1rem", letterSpacing: "3px", color: "var(--black)", textTransform: "uppercase", padding: "14px 28px", display: "inline-block", flexShrink: 0 }}>
            {item}<span style={{ color: "rgba(0,0,0,.3)", padding: "0 6px" }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── ABOUT ─── */
export function About() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HYDRATION FIX: set initial states via gsap.set (client-only), not inline styles
    const clips = headRef.current?.querySelectorAll(".clip-inner");
    clips?.forEach((el) => gsap.set(el, { y: "100%" }));

    clips?.forEach((el, i) => {
      gsap.to(el, { y: "0%", duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 90%" }, delay: i * 0.1 });
    });
    gsap.fromTo(bodyRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: bodyRef.current, start: "top 88%" } });
    gsap.fromTo(infoRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: infoRef.current, start: "top 90%" } });
    gsap.to(imgRef.current, { clipPath: "polygon(0 0%,100% 0%,100% 100%,0 100%)", duration: 1.3, ease: "power4.inOut", scrollTrigger: { trigger: imgRef.current, start: "top 75%" } });
    gsap.set(badgeRef.current, { scale: 0.5, opacity: 0 });
    gsap.to(badgeRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.8)", scrollTrigger: { trigger: imgRef.current, start: "top 60%" }, delay: 0.7 });
  }, []);

  const infoRows = [
    ["Location", PROFILE.location],
    ["University", PROFILE.university],
    ["Degree", PROFILE.degree],
    ["CGPA", PROFILE.cgpa],
    ["Phone", PROFILE.phone],
    ["Status", "● Open to Work"],
  ];

  return (
    <section id="about" style={{ padding: "140px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center", background: "var(--black)" }}>
      <div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "4px", color: "var(--yellow)", textTransform: "uppercase", marginBottom: 20, display: "block" }}>[ 01 ] — About</span>
        <h2 ref={headRef} style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,6vw,6rem)", lineHeight: 0.95, letterSpacing: "-1px", marginBottom: 40 }}>
          {["FULL","STACK","ENGINEER"].map((w, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              {/* NO inline transform — gsap.set handles it in useEffect */}
              <span className="clip-inner" style={{ display: "block" }}>{w}</span>
            </span>
          ))}
        </h2>
        <div ref={bodyRef}>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: 20 }}>
            I&apos;m <strong style={{ color: "var(--white)" }}>Aryan Yadav</strong>, a B.Tech CSE final-year student at BBD University. I build <strong style={{ color: "var(--white)" }}>production-ready web applications</strong> that blend Full Stack engineering with <strong style={{ color: "var(--white)" }}>Generative AI</strong>.
          </p>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.9 }}>
            My work lives at the intersection of <strong style={{ color: "var(--white)" }}>MERN Stack</strong> and <strong style={{ color: "var(--white)" }}>Google Gemini AI</strong> — crafting systems that are scalable, secure, and genuinely useful.
          </p>
        </div>
        <div ref={infoRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid rgba(255,255,255,.08)", marginTop: 36 }}>
          {infoRows.map(([key, val], i) => (
            <div key={i} style={{ padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,.08)", borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,.08)" : "none", paddingLeft: i % 2 === 1 ? 24 : 0 }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.63rem", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: 5 }}>{key}</div>
              <div style={{ fontSize: "0.92rem", color: key === "Status" ? "var(--yellow)" : "var(--white)" }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div ref={imgRef} style={{ width: "100%", aspectRatio: "3/4", background: "var(--gray)", position: "relative", overflow: "hidden", clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#060d18 0%,#060d0a 50%,#180606 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "Anton, sans-serif", fontSize: "18rem", color: "rgba(200,241,53,.07)", lineHeight: 1, userSelect: "none" }}>A</span>
          </div>
        </div>
        <div ref={badgeRef} style={{ position: "absolute", bottom: 32, right: -28, width: 110, height: 110, borderRadius: "50%", background: "var(--yellow)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "Anton, sans-serif", fontSize: "2rem", color: "var(--black)", lineHeight: 1 }}>2+</span>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.5rem", letterSpacing: "2px", color: "rgba(0,0,0,.6)", textTransform: "uppercase" }}>Projects</span>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.5rem", letterSpacing: "2px", color: "rgba(0,0,0,.6)", textTransform: "uppercase" }}>Shipped</span>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─── */
export function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 80%" } });
    const blocks = blocksRef.current?.querySelectorAll(".skill-block");
    blocks?.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" }, delay: (i % 3) * 0.1 });
    });
  }, []);

  return (
    <section id="skills" style={{ padding: "140px 60px", background: "var(--gray)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80 }}>
        <h2 ref={titleRef} style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,7vw,7rem)", lineHeight: 0.9, letterSpacing: "-2px" }}>
          TECH<br /><span style={{ WebkitTextStroke: "1px var(--white)", color: "transparent" }}>STACK</span>
        </h2>
        <p style={{ maxWidth: 280, fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, textAlign: "right" }}>
          Tools and technologies I use daily to ship modern, scalable applications.
        </p>
      </div>
      <div ref={blocksRef} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid rgba(255,255,255,.07)" }}>
        {SKILLS.map((s, i) => (
          <div key={i} className="skill-block" style={{ padding: "48px 36px", borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,.07)" : "none", borderBottom: "1px solid rgba(255,255,255,.07)", position: "relative", overflow: "hidden", transition: "background 0.4s", cursor: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,241,53,.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", letterSpacing: "3px", color: "rgba(255,255,255,.2)", marginBottom: 22 }}>{s.num}</div>
            <span style={{ fontSize: "2.2rem", marginBottom: 18, display: "block" }}>{s.icon}</span>
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "1.7rem", marginBottom: 14 }}>{s.name}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {s.tags.map((t, j) => (
                <span key={j} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.67rem", letterSpacing: "1px", padding: "5px 11px", border: "1px solid rgba(255,255,255,.1)", color: "var(--muted)", transition: "all 0.3s" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PROJECTS ─── */
export function Projects() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getTotalW = () => (innerRef.current?.scrollWidth ?? 0) - (outerRef.current?.offsetWidth ?? 0);
    gsap.fromTo(".projects-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: "#projects", start: "top 85%" } });

    const st = ScrollTrigger.create({
      trigger: outerRef.current, start: "top top",
      end: () => "+=" + (getTotalW() + window.innerHeight * 0.5),
      pin: true, anticipatePin: 1,
      onUpdate(self) { gsap.set(innerRef.current, { x: -self.progress * getTotalW() }); },
    });

    const contents = document.querySelectorAll(".proj-content-item");
    gsap.set(contents, { opacity: 0, y: 25 });
    ScrollTrigger.create({
      trigger: outerRef.current, start: "top center", once: true,
      onEnter: () => gsap.to(contents, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out", delay: 0.1 }),
    });

    return () => st.kill();
  }, []);

  return (
    <section id="projects" style={{ padding: "140px 60px", background: "var(--black)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80 }}>
        <h2 className="projects-title" style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,7vw,7rem)", lineHeight: 0.9 }}>
          SELECTED<br />WORK
        </h2>
        <div style={{ fontFamily: "Anton, sans-serif", fontSize: "5rem", color: "rgba(255,255,255,.07)", lineHeight: 1 }}>02</div>
      </div>
      <div ref={outerRef} style={{ overflow: "hidden", position: "relative" }}>
        <div ref={innerRef} style={{ display: "flex", width: "max-content" }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="proj-panel" style={{ width: "72vw", minHeight: "82vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 60, position: "relative", overflow: "hidden", borderRight: i < PROJECTS.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none", flexShrink: 0, cursor: "none" }}>
              <div style={{ position: "absolute", inset: 0, background: i === 0 ? "linear-gradient(145deg,#060d18 0%,#06180d 100%)" : "linear-gradient(145deg,#18060d 0%,#06060d 100%)", transition: "transform .6s" }} />
              <div style={{ position: "absolute", top: 60, right: 60, fontFamily: "Anton, sans-serif", fontSize: "8rem", color: "rgba(255,255,255,.04)", lineHeight: 1, userSelect: "none", zIndex: 1 }}>{p.num}</div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div className="proj-content-item" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "3px", color: "var(--cyan)", textTransform: "uppercase", marginBottom: 20 }}>{p.tag}</div>
                <h3 className="proj-content-item" style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem,5vw,5rem)", lineHeight: 0.95, letterSpacing: "-1px", marginBottom: 20, whiteSpace: "pre-line" }}>{p.title}</h3>
                <p className="proj-content-item" style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 480, marginBottom: 28 }}>{p.desc}</p>
                <ul className="proj-content-item" style={{ listStyle: "none", marginBottom: 28, display: "flex", flexDirection: "column", gap: 9 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--yellow)", flexShrink: 0 }}>—</span>{f}
                    </li>
                  ))}
                </ul>
                <div className="proj-content-item" style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 32 }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.67rem", letterSpacing: "1px", padding: "5px 13px", border: "1px solid rgba(0,240,255,.2)", color: "var(--cyan)" }}>{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-content-item" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: "JetBrains Mono, monospace", fontSize: "0.78rem", letterSpacing: "2px", color: "var(--white)", textDecoration: "none", textTransform: "uppercase", transition: "gap 0.3s, color 0.3s", cursor: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--yellow)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--white)"; }}
                >
                  {p.linkLabel}
                  <span style={{ width: 38, height: 38, border: "1px solid rgba(255,255,255,.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
export function Experience() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 80%" } });
    const items = listRef.current?.querySelectorAll(".exp-item");
    items?.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" }, delay: i * 0.12 });
    });
  }, []);

  return (
    <section id="experience" style={{ padding: "140px 60px", background: "var(--gray)" }}>
      <h2 ref={titleRef} style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,7vw,7rem)", lineHeight: 0.9, marginBottom: 80 }}>
        EXPERIENCE<br /><span style={{ WebkitTextStroke: "1px var(--white)", color: "transparent" }}>&amp; EDUCATION</span>
      </h2>
      <div ref={listRef} style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="exp-item" style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", alignItems: "start", gap: 60, padding: "50px 0", borderBottom: "1px solid rgba(255,255,255,.08)", transition: "background 0.3s", cursor: "none" }}
            onMouseEnter={(el) => (el.currentTarget.style.background = "rgba(255,255,255,.015)")}
            onMouseLeave={(el) => (el.currentTarget.style.background = "transparent")}
          >
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "2px", color: "var(--muted)", paddingTop: 4 }}>{e.year}</div>
            <div>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "2rem", lineHeight: 0.95, marginBottom: 8 }}>{e.role}</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", letterSpacing: "2px", color: "var(--yellow)", marginBottom: 18 }}>{e.company}</div>
              <div style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 600 }}>{e.body}</div>
            </div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "2px", color: "var(--muted)", textTransform: "uppercase", padding: "8px 14px", border: "1px solid rgba(255,255,255,.1)", whiteSpace: "nowrap", marginTop: 4 }}>{e.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CERTIFICATIONS ─── */
export function Certifications() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 80%" } });
    document.querySelectorAll(".cert-card").forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" }, delay: i * 0.15 });
    });
  }, []);

  return (
    <section id="certifications" style={{ padding: "140px 60px", background: "var(--black)" }}>
      <h2 ref={titleRef} style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,7vw,7rem)", lineHeight: 0.9, marginBottom: 80 }}>CERTIFICATIONS</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {CERTIFICATIONS.map((c, i) => (
          <div key={i} className="cert-card" style={{ background: "var(--gray)", padding: 56, position: "relative", overflow: "hidden", transition: "background 0.4s", cursor: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#14141c"; const bar = e.currentTarget.querySelector(".cert-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gray)"; const bar = e.currentTarget.querySelector(".cert-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(0)"; }}
          >
            <div className="cert-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,var(--yellow),transparent)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s" }} />
            <div style={{ width: 52, height: 52, background: "rgba(200,241,53,.08)", border: "1px solid rgba(200,241,53,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: 26 }}>{c.icon}</div>
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "1.7rem", lineHeight: 1, marginBottom: 8 }}>{c.name}</div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "2px", color: "var(--yellow)", marginBottom: 18 }}>{c.issuer}</div>
            <p style={{ fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.8 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── GITHUB STATS ─── */
export function GitHubStats() {
  const [stats, setStats] = useState({ repos: "—", followers: "—", following: "—" });
  const gridRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const grid = gridRef.current;
    if (!grid) return;

    // Clear any existing children
    grid.innerHTML = "";

    const weights = [0.3, 0.7, 0.8, 0.85, 0.75, 0.4, 0.2];
    for (let i = 0; i < 180; i++) {
      const d = document.createElement("div");
      const dow = new Date(Date.now() - (180 - i) * 86400000).getDay();
      const r = Math.random(), w = weights[dow];
      const lvl = r < w * 0.25 ? "l4" : r < w * 0.45 ? "l3" : r < w * 0.6 ? "l2" : r < w * 0.72 ? "l1" : "";
      d.style.cssText = `width:12px;height:12px;border-radius:2px;flex-shrink:0;background:${
        lvl === "l4" ? "var(--yellow)" :
        lvl === "l3" ? "rgba(200,241,53,.7)" :
        lvl === "l2" ? "rgba(200,241,53,.45)" :
        lvl === "l1" ? "rgba(200,241,53,.2)" :
        "rgba(255,255,255,.05)"
      }`;
      d.style.opacity = "0";
      d.style.transform = "scale(0)";
      grid.appendChild(d);
    }

    ScrollTrigger.create({
      trigger: "#github-stats", start: "top 80%", once: true,
      onEnter() {
        gsap.to(grid.children, {
          opacity: 1, scale: 1, duration: 0.4,
          stagger: { each: 0.004, from: "start" },
          ease: "back.out(1.2)"
        });
        fetch(`https://api.github.com/users/${PROFILE.githubUsername}`)
          .then(r => r.json())
          .then(d => setStats({
            repos: d.public_repos ?? "5+",
            followers: d.followers ?? "—",
            following: d.following ?? "—"
          }))
          .catch(() => setStats({ repos: "5+", followers: "—", following: "—" }));
      },
    });
  }, [mounted]);

  if (!mounted) return (
    <div id="github-stats" style={{ padding: "80px 60px 0", background: "var(--black)" }}>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", padding: "36px 0" }} />
    </div>
  );

  const statRows = [
    { icon: "⭐", val: stats.repos, label: "Public Repos" },
    { icon: "🔱", val: stats.followers, label: "Followers" },
    { icon: "🌐", val: stats.following, label: "Following" },
    { icon: "💻", val: "2+", label: "Projects Shipped" },
  ];

  return (
    <div id="github-stats" style={{ padding: "80px 60px 0", background: "var(--black)" }}>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)", padding: "36px 0", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {statRows.map((s, i) => (
          <div key={i} style={{ padding: "0 40px", borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
            <span style={{ fontFamily: "Anton, sans-serif", fontSize: "2.8rem", color: "var(--yellow)", lineHeight: 1, letterSpacing: "-1px" }}>{String(s.val)}</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase" }}>{s.label}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, paddingBottom: 60 }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: 16 }}>
          // Contribution Activity — Last 6 Months
        </div>
        <div ref={gridRef} style={{ display: "flex", gap: 3, flexWrap: "wrap", maxWidth: "100%" }} />
      </div>
    </div>
  );
}

/* ─── BLOG ─── */
export function Blog() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: titleRef.current, start: "top 80%" } });
    document.querySelectorAll(".blog-card").forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" }, delay: i * 0.12 });
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? "hidden" : "";
  }, [openIdx]);

  return (
    <section id="blog" style={{ padding: "140px 60px", background: "var(--gray)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80 }}>
        <h2 ref={titleRef} style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,7vw,7rem)", lineHeight: 0.9 }}>
          LATEST<br /><span style={{ WebkitTextStroke: "1px var(--white)", color: "transparent" }}>WRITING</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
        {BLOGS.map((b, i) => (
          <div key={i} className="blog-card" onClick={() => setOpenIdx(i)} style={{ background: "var(--black)", padding: "48px 40px", position: "relative", overflow: "hidden", cursor: "none", transition: "background 0.4s", borderBottom: "1px solid rgba(255,255,255,.06)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a10"; const bar = e.currentTarget.querySelector(".blog-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--black)"; const bar = e.currentTarget.querySelector(".blog-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(0)"; }}
          >
            <div className="blog-bar" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "var(--yellow)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s" }} />
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "3px", color: "rgba(255,255,255,.15)", marginBottom: 28 }}>{b.num}</div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase", color: "var(--cyan)", marginBottom: 16 }}>{b.tag}</div>
            <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.6rem", lineHeight: 1.05, marginBottom: 16 }}>{b.title}</h3>
            <p style={{ fontSize: "0.87rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 32 }}>{b.excerpt}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.07)" }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.67rem", letterSpacing: "2px", color: "rgba(255,255,255,.25)" }}>{b.date}</span>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.67rem", letterSpacing: "2px", color: "var(--muted)" }}>{b.read} →</span>
            </div>
          </div>
        ))}
      </div>
      {openIdx !== null && (
        <div onClick={() => setOpenIdx(null)} style={{ position: "fixed", inset: 0, background: "rgba(6,6,8,.97)", zIndex: 5000, display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", padding: "80px 40px" }}>
          <button onClick={() => setOpenIdx(null)} style={{ position: "fixed", top: 32, right: 40, fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "2px", color: "var(--muted)", cursor: "none", border: "1px solid rgba(255,255,255,.1)", padding: "10px 18px", background: "transparent", zIndex: 5001, transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--yellow)"; e.currentTarget.style.color = "var(--yellow)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "var(--muted)"; }}
          >✕ CLOSE</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 800, width: "100%", paddingBottom: 80 }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cyan)", marginBottom: 20, display: "block" }}>{BLOGS[openIdx].tag}</span>
            <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 0.95, marginBottom: 16 }}>{BLOGS[openIdx].title}</h1>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "2px", color: "rgba(255,255,255,.3)", marginBottom: 48, paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
              {BLOGS[openIdx].date} · {BLOGS[openIdx].read} · Aryan Yadav
            </div>
            <div style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.95 }} dangerouslySetInnerHTML={{ __html: BLOGS[openIdx].body }} />
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── CONTACT ─── */
export function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HYDRATION FIX: set initial hidden states via gsap.set, not inline styles
    const inners = titleRef.current?.querySelectorAll(".ch-inner");
    inners?.forEach((el) => gsap.set(el, { y: "100%" }));

    inners?.forEach((el, i) => {
      gsap.to(el, { y: "0%", duration: 1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 90%" }, delay: i * 0.12 });
    });
    gsap.set(rowRef.current, { y: 30, opacity: 0 });
    gsap.to(rowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: rowRef.current, start: "top 90%" } });
  }, []);

  return (
    <section id="contact" style={{ padding: "140px 60px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", background: "var(--black)" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(200,241,53,.04),transparent 70%)" }} />
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", letterSpacing: "4px", color: "var(--muted)", textTransform: "uppercase", marginBottom: 32, display: "block", position: "relative", zIndex: 2 }}>[ 06 ] — Let&apos;s build something great</span>
      <h2 ref={titleRef} style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(4rem,12vw,14rem)", lineHeight: 0.88, letterSpacing: "-3px", position: "relative", zIndex: 2, marginBottom: 60 }}>
        {[{ text: "LET'S", style: {} }, { text: "WORK", style: { WebkitTextStroke: "1.5px rgba(200,241,53,.4)", color: "transparent" } }, { text: "TOGETHER", style: { color: "var(--yellow)" } }].map((line, i) => (
          <span key={i} style={{ display: "block", overflow: "hidden" }}>
            {/* NO inline transform — gsap.set handles it in useEffect */}
            <span className="ch-inner" style={{ display: "block", ...line.style }}>{line.text}</span>
          </span>
        ))}
      </h2>
      <div ref={rowRef} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 2, flexWrap: "wrap", gap: 40 }}>
        <a href={`mailto:${PROFILE.email}`} style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "clamp(1.4rem,2.5vw,2.2rem)", letterSpacing: "3px", color: "var(--white)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,.2)", paddingBottom: 8, transition: "color 0.3s, border-color 0.3s", cursor: "none" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--yellow)"; e.currentTarget.style.borderColor = "var(--yellow)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.2)"; }}
        >{PROFILE.email}</a>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[["LinkedIn", PROFILE.linkedin], ["GitHub", PROFILE.github], ["+91 88535 30329", `tel:${PROFILE.phone}`]].map(([label, href], i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 24px", border: "1px solid rgba(255,255,255,.12)", color: "var(--muted)", textDecoration: "none", transition: "all 0.3s", cursor: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--yellow)"; e.currentTarget.style.color = "var(--yellow)"; e.currentTarget.style.background = "rgba(200,241,53,.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.12)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}
            >{label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CHATBOT ─── */
export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: "Hey! I'm Aryan's AI assistant. Ask me about his skills, projects, experience, or anything about his work. 👋" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [history, setHistory] = useState<{ role: string; content: string }[]>([]);
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setShowSuggestions(false);
    const userMsg = { role: "user", text };
    setMessages(prev => [...prev, userMsg]);
    const newHistory = [...history, { role: "user", content: text }];
    setHistory(newHistory);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: newHistory }) });
      const data = await res.json();
      const reply = data.reply ?? "Sorry, I couldn't respond right now!";
      setMessages(prev => [...prev, { role: "bot", text: reply }]);
      setHistory(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "bot", text: "Connection issue! Reach Aryan at ay630147@gmail.com 🚀" }]);
    }
    setLoading(false);
  };

  const suggestions = ["Tell me about projects", "What's your tech stack?", "Are you open to work?", "Your experience?"];

  return (
    <>
      <button onClick={() => setOpen(!open)} style={{ position: "fixed", bottom: 36, right: 36, width: 60, height: 60, background: "var(--yellow)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "none", zIndex: 4000, border: "none", fontSize: "1.4rem", transition: "transform 0.3s", animation: "chatPulse 2.5s ease-in-out infinite" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >{open ? "✕" : "💬"}</button>
      <div style={{ position: "fixed", bottom: 110, right: 36, width: 380, height: 560, background: "#0a0a10", border: "1px solid rgba(200,241,53,.2)", zIndex: 4000, display: "flex", flexDirection: "column", transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(.95)", opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none", transition: "all .35s cubic-bezier(.34,1.56,.64,1)", transformOrigin: "bottom right", boxShadow: "0 30px 80px rgba(0,0,0,.6)" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", gap: 14, background: "rgba(200,241,53,.04)" }}>
          <div style={{ width: 36, height: 36, background: "var(--yellow)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🤖</div>
          <div>
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "1rem", letterSpacing: "1px" }}>ARYAN.AI</div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", letterSpacing: "2px", color: "var(--yellow)" }}>● Online — Ask me anything</div>
          </div>
        </div>
        <div ref={msgsRef} style={{ flex: 1, overflowY: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 14, scrollBehavior: "smooth" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ maxWidth: "85%", display: "flex", flexDirection: "column", gap: 4, alignSelf: m.role === "user" ? "flex-end" : "flex-start", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{ padding: "12px 16px", fontFamily: "General Sans, sans-serif", fontSize: "0.87rem", lineHeight: 1.7, color: "var(--white)", background: m.role === "user" ? "rgba(200,241,53,.12)" : "rgba(255,255,255,.04)", border: `1px solid ${m.role === "user" ? "rgba(200,241,53,.2)" : "rgba(255,255,255,.08)"}`, borderBottomRightRadius: m.role === "user" ? 0 : undefined, borderBottomLeftRadius: m.role === "bot" ? 0 : undefined }}
                dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>") }}
              />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", letterSpacing: "1px", color: "rgba(255,255,255,.2)" }}>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", gap: 5, padding: "14px 16px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", alignSelf: "flex-start", maxWidth: 80 }}>
              {[0, 0.2, 0.4].map((d, i) => (
                <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(200,241,53,.5)", display: "inline-block", animation: `typDot 1.2s ${d}s ease-in-out infinite` }} />
              ))}
            </div>
          )}
        </div>
        {showSuggestions && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "0 20px 12px" }}>
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => send(s)} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "1px", padding: "6px 12px", border: "1px solid rgba(200,241,53,.2)", color: "rgba(200,241,53,.7)", background: "transparent", cursor: "none", transition: "all 0.3s", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--yellow)"; e.currentTarget.style.color = "var(--yellow)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,241,53,.2)"; e.currentTarget.style.color = "rgba(200,241,53,.7)"; }}
              >{s}</button>
            ))}
          </div>
        )}
        <div style={{ padding: 16, borderTop: "1px solid rgba(255,255,255,.07)", display: "flex", gap: 10, background: "rgba(0,0,0,.3)" }}>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }} placeholder="Ask about Aryan..." rows={1} style={{ flex: 1, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", padding: "12px 14px", fontFamily: "General Sans, sans-serif", fontSize: "0.87rem", color: "var(--white)", outline: "none", resize: "none", cursor: "text" }} />
          <button onClick={() => send(input)} disabled={loading || !input.trim()} style={{ width: 44, height: 44, background: "var(--yellow)", border: "none", cursor: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", transition: "all 0.3s", flexShrink: 0, alignSelf: "flex-end", opacity: loading || !input.trim() ? 0.4 : 1 }}>➤</button>
        </div>
      </div>
    </>
  );
}
