import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Yadav — Full Stack & GenAI Engineer | Lucknow",
  description:
    "Aryan Yadav is a Full Stack + Generative AI Engineer. Expert in React.js, Node.js, MongoDB, and Google Gemini AI. Open to work.",
  keywords: [
    "Aryan Yadav",
    "Full Stack Developer",
    "GenAI Engineer",
    "MERN Stack",
    "Lucknow",
    "BBD University",
    "Gemini AI",
  ],
  authors: [{ name: "Aryan Yadav" }],
  openGraph: {
    type: "website",
    title: "Aryan Yadav — Full Stack & GenAI Engineer",
    description:
      "Building production-ready, AI-integrated web applications. MERN Stack + Google Gemini AI.",
    url: "https://aryanyadav.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Yadav — Full Stack & GenAI Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning on <html> and <body> stops React error #418.
    // This is safe and standard for Next.js apps with client-side animations,
    // custom cursors, or browser-extension injected attributes.
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
