import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());

app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  const API_KEY = process.env.WEATHER_API_KEY;
  
  // Get current weather
  const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  // Get forecast (3 days)
  const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;
  
  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl)
    ]);
    
    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();
    
    // Extract forecast for next 7 days
    const forecast = forecastData.forecast.forecastday.map(day => ({
      date: day.date,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      condition: day.day.condition.text,
      icon: day.day.condition.icon
    }));
    
    res.json({
      temperature: currentData.current.temp_c,
      feelsLike: currentData.current.feelslike_c,
      condition: currentData.current.condition.text,
      icon: currentData.current.condition.icon,
      humidity: currentData.current.humidity,
      windSpeed: currentData.current.wind_kph,
      precipitation: currentData.current.precip_mm,
      uvIndex: currentData.current.uv,
      pressure: currentData.current.pressure_mb,
      visibility: currentData.current.vis_km,
      city: currentData.location.name,
      lastUpdated: currentData.current.last_updated,
      forecast: forecast
    });
    
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Weather fetch failed' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});