import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = 'https://api.unsplash.com';

export const searchImages = async (query, count = 1) => {
  if (!ACCESS_KEY) {
    return [];
  }

  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        per_page: count,
        orientation: 'landscape'
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Image API error:', error);
    return [];
  }
};

export const getDestinationImage = async (destinationName) => {
  const images = await searchImages(`${destinationName} travel`, 1);
  return images[0]?.urls?.regular || null;
};

export const getAttractionImage = async (attractionName, cityName) => {
  const images = await searchImages(`${attractionName} ${cityName}`, 1);
  return images[0]?.urls?.regular || null;
};
