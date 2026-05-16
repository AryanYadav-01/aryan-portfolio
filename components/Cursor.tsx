"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Start both off screen
    let mx = -200, my = -200;
    let rx = -200, ry = -200;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot snaps instantly
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    // Ring follows with lerp
    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    // Hover effects on interactive elements
    const addHover = () => {
      document.querySelectorAll("a, button, .skill-block, .proj-panel, .cert-card, .exp-item, .blog-card").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(dot, { width: 16, height: 16, background: "transparent", border: "2px solid #c8f135", duration: 0.2, ease: "power2.out" });
          gsap.to(ring, { width: 52, height: 52, borderColor: "rgba(200,241,53,0.8)", duration: 0.2, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(dot, { width: 8, height: 8, background: "#c8f135", border: "none", duration: 0.2, ease: "power2.out" });
          gsap.to(ring, { width: 32, height: 32, borderColor: "rgba(200,241,53,0.4)", duration: 0.2, ease: "power2.out" });
        });
      });
    };

    // Run after a tick so DOM is ready
    setTimeout(addHover, 500);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps to cursor */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: "-4px",       // offset so center aligns with cursor tip
          left: "-4px",
          width: 8,
          height: 8,
          background: "#c8f135",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          transform: "translate(-200px, -200px)",
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: "-16px",      // offset so center aligns
          left: "-16px",
          width: 32,
          height: 32,
          border: "1px solid rgba(200,241,53,0.4)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          transform: "translate(-200px, -200px)",
        }}
      />
    </>
  );
}
