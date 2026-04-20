export const promptTemplate = `
Based on the job title "{jobTitle}", generate professional resume summaries.

Return ONLY valid JSON.
Do not include markdown formatting.
Do not include backticks.

[
  {
    "experience_level": "Fresher",
    "summary": ""
  },
  {
    "experience_level": "Mid Level",
    "summary": ""
  }
  {
    "experience_level": "High Level",
    "summary": ""
  }
]

Each summary must be 3–4 lines.
`;
