import Groq from "groq-sdk";
const GROQ_API_KEY = import.meta.env.VITE_GROQ_AI_KEY;

// Create Groq client
const groq = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // only for testing (remove in production)
});

// Main function you call from React
export async function main(prompt) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.1-8b-instant",
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq API error:", error);
    return "";
  }
}
