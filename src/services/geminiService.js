import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Current Gemini model
const MODEL = "gemini-3.5-flash";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const generateContent = async (prompt) => {
  if (!API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        params: {
          key: API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 60000,
      },
    );

    const text = response.data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim();

    if (!text) {
      throw new Error("No response received from Gemini");
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);

    throw new Error(
      error.response?.data?.error?.message ||
        "Failed to get response from Gemini",
    );
  }
};

// ================================
// CHATBOT
// ================================

export const sendMessage = async (message, context = "") => {
  const prompt = `
You are TravelAI, a helpful AI travel assistant.

Your job is to help users with:
- Travel destinations
- Travel planning
- Hotels
- Tourist attractions
- Food recommendations
- Travel tips
- Budget planning
- Itineraries

${context ? `Additional Context: ${context}` : ""}

User Question:
${message}

Give a helpful, clear, and concise answer.
`;

  return await generateContent(prompt);
};

// ================================
// AI ITINERARY GENERATOR
// ================================

export const generateItinerary = async (
  destination,
  days,
  budget,
  interests,
  travelStyle,
) => {
  const prompt = `
You are an expert travel planner.

Create a detailed ${days}-day travel itinerary.

Destination: ${destination}
Budget Level: ${budget}
Travel Interests: ${interests.join(", ")}
Travel Style: ${travelStyle}

For every day, provide:

DAY 1
Morning:
Afternoon:
Evening:

DAY 2
Morning:
Afternoon:
Evening:

Continue for all ${days} days.

Also include:
- Important places to visit
- Food recommendations
- Practical travel tips
- Budget suggestions

Make the itinerary realistic and useful.
`;

  return await generateContent(prompt);
};
