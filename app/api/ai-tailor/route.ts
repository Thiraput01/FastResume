import { NextResponse } from "next/server";
import { generateText, Output } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";
import { AI_MODEL, getTailorPrompt } from "@/lib/ai-config";

// Define the ResumeDraft schema
const ResumeDraftSchema = z.object({
  introData: z.object({
    name: z.string(),
    jobTitle: z.string(),
    phone: z.string(),
    email: z.string(),
    github: z.string(),
    linkedin: z.string(),
    location: z.string(),
    website: z.string(),
  }),
  technologies: z.array(
    z.object({
      section: z.string(),
      details: z.array(z.string()),
    }),
  ),
  educations: z.array(
    z.object({
      head: z.string(),
      details: z.string(),
    }),
  ),
  experiences: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      date: z.string(),
      details: z.array(z.string()),
      url: z.string(),
    }),
  ),
  projects: z.array(
    z.object({
      name: z.string(),
      date: z.string(),
      details: z.array(z.string()),
      url: z.string(),
    }),
  ),
  activities: z.array(
    z.object({
      name: z.string(),
      date: z.string(),
      details: z.array(z.string()),
    }),
  ),
});

export async function POST(req: Request) {
  try {
    const { apiKey, resumeDraft, jobDescription } = await req.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API Key is required" },
        { status: 400 },
      );
    }

    if (!resumeDraft || !jobDescription) {
      return NextResponse.json(
        { error: "Resume data and Job Description are required" },
        { status: 400 },
      );
    }

    const google = createGoogleGenerativeAI({ apiKey });

    const { output: tailoredResume } = await generateText({
      model: google(AI_MODEL),
      output: Output.object({ schema: ResumeDraftSchema }),
      prompt: getTailorPrompt(resumeDraft, jobDescription),
    });

    return NextResponse.json(tailoredResume);
  } catch (error: any) {
    console.error("AI Tailor Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to tailor resume with AI" },
      { status: 500 },
    );
  }
}
