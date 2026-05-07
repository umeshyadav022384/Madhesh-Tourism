import { useState, useEffect } from 'react';
import { getWeather } from './weatherAPI';

const WeatherWidget = ({ district }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('today'); // today, hourly, weekly

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getWeather(district);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [district]);

  if (loading) {
    return (
      <div className="bg-black rounded-2xl animate-pulse">
        <div className="h-8 bg-white/20 rounded w-32 mb-4"></div>
        <div className="h-16 bg-white/20 rounded w-24 mb-4"></div>
        <div className="h-4 bg-white/20 rounded w-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-6 text-white">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  if (!weather) return null;

  // Get next 6 hours forecast
  const hourlyForecast = [
    { time: "13:00", temp: 28, condition: "Sunny" },
    { time: "16:00", temp: 28, condition: "Sunny" },
    { time: "19:00", temp: 27, condition: "Clear" },
    { time: "22:00", temp: 26, condition: "Clear" },
    { time: "01:00", temp: 24, condition: "Clear" },
    { time: "04:00", temp: 23, condition: "Clear" },
    { time: "07:00", temp: 21, condition: "Sunny" },
    { time: "10:00", temp: 18, condition: "Sunny" },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 mt-4 text-white shadow-xl">
      
      {/* Current Weather - Large Display */}
      <div className="text-center ">
        <div className="text-5xl font-bold mb-2">{Math.round(weather.temperature)}°C</div>
        <div className="flex justify-center gap-4 text-sm opacity-80">
          <span>🌡️ Feels like {Math.round(weather.feelsLike)}°</span>
          <span>💧 Humidity: {weather.humidity}%</span>
          <span>🌬️ Wind: {weather.windSpeed} km/h</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl mb-1">💧</div>
          <div className="text-lg font-semibold">{weather.humidity}%</div>
          <div className="text-xs opacity-70">Humidity</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl mb-1">🌬️</div>
          <div className="text-lg font-semibold">{weather.windSpeed} km/h</div>
          <div className="text-xs opacity-70">Wind</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl mb-1">☀️</div>
          <div className="text-lg font-semibold">{weather.uvIndex}</div>
          <div className="text-xs opacity-70">UV Index</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-4 border-b border-white/20">
        <button 
          onClick={() => setActiveTab('today')}
          className={`px-4 py-2 rounded-t-lg transition ${activeTab === 'today' ? 'bg-white/20' : 'opacity-60'}`}
        >
          Today
        </button>
        <button 
          onClick={() => setActiveTab('hourly')}
          className={`px-4 py-2 rounded-t-lg transition ${activeTab === 'hourly' ? 'bg-white/20' : 'opacity-60'}`}
        >
          Hourly
        </button>
        <button 
          onClick={() => setActiveTab('weekly')}
          className={`px-4 py-2 rounded-t-lg transition ${activeTab === 'weekly' ? 'bg-white/20' : 'opacity-60'}`}
        >
          7 Days
        </button>
      </div>

      {/* Today Tab */}
      {activeTab === 'today' && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>🌡️ Temperature</span>
            <span className="font-semibold">{Math.round(weather.temperature)}°C</span>
          </div>
          <div className="flex justify-between items-center">
            <span>💧 Precipitation</span>
            <span className="font-semibold">{weather.precipitation || 0} mm</span>
          </div>
          <div className="flex justify-between items-center">
            <span>🌬️ Wind</span>
            <span className="font-semibold">{weather.windSpeed} km/h</span>
          </div>
          <div className="flex justify-between items-center">
            <span>☁️ Condition</span>
            <span className="font-semibold">{weather.condition}</span>
          </div>
        </div>
      )}

      {/* Hourly Tab */}
      {activeTab === 'hourly' && (
        <div className="grid grid-cols-4 gap-3">
          {hourlyForecast.map((hour, idx) => (
            <div key={idx} className="text-center bg-white/5 rounded-lg p-2">
              <div className="text-xs opacity-70">{hour.time}</div>
              <div className="text-lg font-bold">{hour.temp}°</div>
              <div className="text-xs">{hour.condition === 'Sunny' ? '☀️' : '🌙'}</div>
            </div>
          ))}
        </div>
      )}

      {/* Weekly Tab */}
      {activeTab === 'weekly' && weather.forecast && (
        <div className="space-y-2">
          {weather.forecast.map((day, idx) => (
            <div key={idx} className="flex justify-between items-center bg-white/5 rounded-lg p-2">
              <div className="w-20 text-sm">
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm">{day.condition}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-orange-300">{Math.round(day.maxTemp)}°</span>
                <span className="text-blue-300">{Math.round(day.minTemp)}°</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Last Updated */}
      <div className="text-center text-xs opacity-50 mt-4">
        Updated: {new Date(weather.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
};

export default WeatherWidget;