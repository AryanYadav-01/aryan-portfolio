"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PROFILE } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power2.out" });

    const onScroll = () => {
      const progress = Math.min(window.scrollY / 300, 1);
      if (navRef.current) navRef.current.style.background = `rgba(6,6,8,${progress * 0.92})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all"
      style={{ padding: "28px 60px", backdropFilter: "blur(10px)" }}
    >
      <a href="#hero" style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "1.6rem", letterSpacing: "4px", color: "var(--white)", textDecoration: "none" }}>
        ARYAN.DEV
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "2px", color: "var(--muted)", textDecoration: "none", textTransform: "uppercase", transition: "color 0.3s", cursor: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--yellow)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${PROFILE.email}`}
        style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", padding: "12px 24px", border: "1px solid rgba(200,241,53,0.4)", color: "var(--yellow)", textDecoration: "none", transition: "all 0.3s", cursor: "none" }}
        onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "var(--yellow)"; el.style.color = "var(--black)"; }}
        onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "var(--yellow)"; }}
      >
        Hire Me
      </a>
    </nav>
  );
}
