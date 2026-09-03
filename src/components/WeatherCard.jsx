import { Cloud, CloudRain, CloudSnow, Sun, Wind, Droplets } from 'lucide-react';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return (
      <div className="bg-[var(--surface-3)] rounded-2xl p-6 border border-[var(--surface-4)]">
        <p className="text-gray-400 text-sm">Weather data unavailable</p>
      </div>
    );
  }

  const getWeatherIcon = (condition) => {
    const lower = condition.toLowerCase();
    if (lower.includes('rain')) return <CloudRain className="w-12 h-12 text-[var(--accent)]" />;
    if (lower.includes('snow')) return <CloudSnow className="w-12 h-12 text-[var(--accent)]" />;
    if (lower.includes('cloud')) return <Cloud className="w-12 h-12 text-[var(--accent)]" />;
    return <Sun className="w-12 h-12 text-[var(--accent)]" />;
  };

  return (
    <div className="bg-[var(--surface-3)] rounded-2xl p-6 border border-[var(--surface-4)]">
      <h3 className="text-lg font-semibold text-white mb-4">Current Weather</h3>

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-4xl font-bold text-white">{Math.round(weather.main.temp)}°C</div>
          <div className="text-gray-400 capitalize mt-1">{weather.weather[0].description}</div>
        </div>
        {getWeatherIcon(weather.weather[0].main)}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Droplets className="w-4 h-4 text-[var(--accent)]" />
          <div>
            <div className="text-xs text-gray-400">Humidity</div>
            <div className="text-sm text-white">{weather.main.humidity}%</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="w-4 h-4 text-[var(--accent)]" />
          <div>
            <div className="text-xs text-gray-400">Wind Speed</div>
            <div className="text-sm text-white">{weather.wind.speed} m/s</div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-xs text-gray-400">Feels Like</div>
          <div className="text-sm text-white">{Math.round(weather.main.feels_like)}°C</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
