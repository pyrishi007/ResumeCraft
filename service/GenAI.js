import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_AI_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });
  return response.text;
}
