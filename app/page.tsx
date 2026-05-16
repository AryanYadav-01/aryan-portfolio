"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  Marquee, About, Skills, Projects,
  Experience, Certifications, GitHubStats,
  Blog, Contact, Chatbot
} from "@/components/Sections";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}
      <div className="noise" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GitHubStats />
        <Blog />
        <Contact />
      </main>
      <footer style={{
        padding: "36px 60px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,.05)",
        background: "var(--black)"
      }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", letterSpacing: "2px", color: "rgba(255,255,255,.2)" }}>
          © 2025 ARYAN YADAV
        </span>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", letterSpacing: "2px", color: "rgba(200,241,53,.3)" }}>
          FULL STACK · GENAI · LUCKNOW, IN
        </span>
      </footer>
      <Chatbot />
    </>
  );
}
