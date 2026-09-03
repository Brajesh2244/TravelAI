import axios from 'axios';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export const sendMessage = async (message, context = '') => {
  if (!API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  try {
    const prompt = context
      ? `Context: ${context}\n\nUser question: ${message}\n\nProvide a helpful and concise travel-related response.`
      : message;

    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to get response from AI');
  }
};

export const generateItinerary = async (destination, days, budget, interests, travelStyle) => {
  if (!API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  const prompt = `Create a detailed ${days}-day travel itinerary for ${destination}.

Budget Level: ${budget}
Travel Interests: ${interests.join(', ')}
Travel Style: ${travelStyle}

Please provide a structured day-by-day itinerary with:
- Morning, Afternoon, and Evening activities for each day
- Specific places to visit
- Brief descriptions
- Practical tips

Format each day clearly with DAY 1, DAY 2, etc., and organize activities by time of day.`;

  try {
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to generate itinerary');
  }
};
