"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dotRef.current) { dotRef.current.style.left = mx + "px"; dotRef.current.style.top = my + "px"; }
      if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("a, button, .skill-block, .proj-panel, .cert-card, .exp-item, .blog-card");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(dotRef.current, { width: 18, height: 18, background: "transparent", border: "2px solid #c8f135", borderRadius: "50%", duration: 0.25 });
        gsap.to(ringRef.current, { width: 56, height: 56, borderColor: "rgba(200,241,53,0.7)", duration: 0.25 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(dotRef.current, { width: 8, height: 8, background: "#c8f135", border: "none", duration: 0.25 });
        gsap.to(ringRef.current, { width: 32, height: 32, borderColor: "rgba(200,241,53,0.4)", duration: 0.25 });
      });
    });

    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
