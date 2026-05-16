"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const w1 = useRef<HTMLSpanElement>(null);
  const w2 = useRef<HTMLSpanElement>(null);
  const w3 = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to([w1.current, w2.current, w3.current], { y: "0%", duration: 1.1, ease: "power4.out", stagger: 0.12 })
      .to(eyebrowRef.current, { opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.5")
      .to(descRef.current, { opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.3")
      .to(scrollRef.current, { opacity: 1, duration: 0.6 }, "-=0.2");

    // Parallax on mouse
    const hero = sectionRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const xP = e.clientX / window.innerWidth - 0.5;
      const yP = e.clientY / window.innerHeight - 0.5;
      gsap.to(".hero-grid-el", { x: xP * 18, y: yP * 12, duration: 1.2, ease: "power1.out" });
      gsap.to(".hero-bg-el", { x: xP * 30, y: yP * 20, duration: 1.4, ease: "power1.out" });
      gsap.to(".hero-title-el", { x: xP * -10, y: yP * -6, duration: 1.6, ease: "power1.out" });
      gsap.to(".hero-eyebrow-el", { x: xP * 14, y: yP * 8, duration: 1.0, ease: "power1.out" });
    };
    const onLeave = () => {
      gsap.to([".hero-grid-el", ".hero-bg-el", ".hero-title-el", ".hero-eyebrow-el"], { x: 0, y: 0, duration: 1.5, ease: "power2.out" });
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => { hero.removeEventListener("mousemove", onMove); hero.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden flex flex-col justify-end"
      style={{ height: "100vh", padding: "0 60px 60px" }}
    >
      {/* BG layers */}
      <div className="hero-bg-el absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 70% 35%,rgba(0,240,255,.06),transparent 70%),radial-gradient(ellipse 50% 70% at 15% 85%,rgba(200,241,53,.05),transparent 60%)" }} />
      <div className="hero-grid-el absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Eyebrow */}
      <div ref={eyebrowRef} className="hero-eyebrow-el relative z-10 flex items-center gap-4 mb-6" style={{ opacity: 0, fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", letterSpacing: "4px", color: "var(--cyan)", textTransform: "uppercase" }}>
        <span style={{ width: 36, height: 1, background: "var(--cyan)", display: "inline-block" }} />
        Full Stack · Generative AI Engineer · BBD University &apos;26
        <span style={{ width: 36, height: 1, background: "var(--cyan)", display: "inline-block" }} />
      </div>

      {/* Title */}
      <h1 className="hero-title-el relative z-10" style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(5rem,14vw,16rem)", lineHeight: 0.88, letterSpacing: "-2px" }}>
        <span style={{ display: "block", overflow: "hidden" }}>
          <span ref={w1} style={{ display: "inline-block", transform: "translateY(110%)" }}>ARYAN</span>
        </span>
        <span style={{ display: "block", overflow: "hidden" }}>
          <span ref={w2} style={{ display: "inline-block", transform: "translateY(110%)", WebkitTextStroke: "1.5px var(--white)", color: "transparent" }}>YADAV</span>
        </span>
        <span style={{ display: "block", overflow: "hidden" }}>
          <span ref={w3} style={{ display: "inline-block", transform: "translateY(110%)", color: "var(--yellow)" }}>—&nbsp;DEV</span>
        </span>
      </h1>

      {/* Bottom row */}
      <div className="relative z-10 flex justify-between items-end mt-10 flex-wrap gap-6">
        <div>
          <p ref={descRef} style={{ maxWidth: 400, fontSize: "1rem", color: "var(--muted)", lineHeight: 1.8, opacity: 0, marginBottom: 20 }}>
            Building production-ready, AI-integrated web applications. MERN Stack + Gemini AI. Secure auth pipelines to real-time GenAI SaaS products.
          </p>
          <a
            href="/Aryan_Yadav_Resume_ATS.pdf"
            download
            className="resume-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", padding: "16px 32px", background: "transparent", border: "1px solid rgba(200,241,53,0.4)", color: "var(--yellow)", textDecoration: "none", cursor: "none", transition: "all 0.4s", position: "relative", overflow: "hidden" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "var(--yellow)"; el.style.color = "var(--black)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "var(--yellow)"; }}
          >
            ↓ Download Resume
          </a>
        </div>
        <div ref={scrollRef} className="flex items-center gap-3" style={{ opacity: 0, fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase" }}>
          <div className="scroll-line" style={{ width: 1, height: 60, background: "var(--muted)" }} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
