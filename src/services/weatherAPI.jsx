const BACKEND_URL = 'http://localhost:5000/api';

export const getWeather = async (district) => {
  try {
    const response = await fetch(`${BACKEND_URL}/weather/${district}`);
    
    if (!response.ok) {
      throw new Error('Weather fetch failed');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
};