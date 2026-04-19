export const AI_MODEL = process.env.AI_MODEL || "gemini-3-flash-preview";
export function getTailorPrompt(
  resumeDraft: any,
  jobDescription: string,
): string {
  return `
Act as a senior technical recruiter and ATS expert who writes highly tailored, ONE-PAGE resumes.

TASK: Tailor the RESUME JSON to the JOB DESCRIPTION. You must ruthlessly prune and rewrite to fit a strict one-page constraint while maintaining a natural, compelling narrative.

CURATION STRATEGY (CHRONOLOGICAL ORDER):
- Strict Reverse-Chronological Priority: Always process and include content starting from the most recent experience, project, or role first. 
- Strict Word Budget: Keep the total content across all 'details' fields between 400 and 550 words. 
- Dynamic Allocation: Once you have prioritized the most recent items, allocate your remaining word budget to the next most relevant items. Use dense, detailed bullets for roles/projects that directly align with the Job Description. 
- Aggressive Pruning: Condense older, less relevant roles into a single summary line, or delete them entirely to save space for high-impact achievements.

REWRITING & RELEVANCE RULES:
1. Information Density: Every remaining bullet must pack a punch. Combine related achievements and remove filler words, generic responsibilities, and obvious soft skills.
2. ATS Alignment: Mirror the exact keywords, technologies, and phrasing from the Job Description in your rewritten bullets.
3. Prioritize Metrics: When deciding what to keep, prioritize bullets that contain quantifiable metrics, hard skills, and direct outcomes.
4. Preserve Facts: Do not invent companies, dates, degrees, or metrics. Do not inflate seniority.
5. Title Alignment: Update introData.jobTitle to closely match the target role using the candidate's actual experience level.

OUTPUT FORMAT:
- Maintain the JSON structure exactly. Use empty arrays [] for deleted sections. Never omit keys.

RESUME DATA:
${JSON.stringify(resumeDraft, null, 2)}

JOB DESCRIPTION:
${jobDescription}

Return ONLY the tailored JSON object.
  `.trim();
}
