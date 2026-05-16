import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/data";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 600,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    const data = await response.json();
    const text = data.content?.[0]?.text ?? "Sorry, I couldn't get a response right now. Email Aryan at ay630147@gmail.com!";
    return NextResponse.json({ reply: text });
  } catch {
    return NextResponse.json(
      { reply: "I'm having trouble connecting right now. Reach Aryan directly at ay630147@gmail.com 🚀" },
      { status: 500 }
    );
  }
}
