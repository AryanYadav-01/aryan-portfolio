"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    gsap.to(logoRef.current, { y: "0%", duration: 0.8, ease: "power4.out", delay: 0.1 });

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 18;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: onDone,
          });
          gsap.set(loaderRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          });
        }, 350);
      }
      setPct(Math.floor(progress));
      if (barRef.current) barRef.current.style.width = progress + "%";
    }, 110);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-8"
      style={{ background: "var(--black)" }}
    >
      <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-2px", overflow: "hidden" }}>
        <span ref={logoRef} style={{ display: "block", transform: "translateY(110%)" }}>
          ARYAN
          <span style={{ WebkitTextStroke: "1.5px rgba(200,241,53,0.5)", color: "transparent" }}>.DEV</span>
        </span>
      </div>
      <div style={{ width: 200, height: 1, background: "rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
        <div ref={barRef} style={{ height: "100%", width: 0, background: "var(--yellow)", boxShadow: "0 0 12px var(--yellow)", transition: "width 0.05s linear" }} />
      </div>
      <span ref={pctRef} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", letterSpacing: "4px", color: "rgba(255,255,255,0.3)" }}>
        {pct}%
      </span>
    </div>
  );
}
