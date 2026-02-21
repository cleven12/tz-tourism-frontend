import { weatherMock } from '@/mockdata'

const weatherIcons: Record<number, string> = {
  0: 'Clear',
  1: 'Sunny',
  2: 'Partly Cloudy',
  3: 'Overcast',
  45: 'Foggy',
  51: 'Drizzle',
  53: 'Drizzle',
  61: 'Light Rain',
  63: 'Rain',
  65: 'Heavy Rain',
  80: 'Showers',
  81: 'Showers',
  95: 'Thunderstorm',
}

function getWeatherEmoji(code: number): string {
  if (code <= 1) return '\u2600\uFE0F'
  if (code === 2) return '\u26C5'
  if (code === 3) return '\u2601\uFE0F'
  if (code === 45) return '\uD83C\uDF2B\uFE0F'
  if (code >= 51 && code <= 55) return '\uD83C\uDF26\uFE0F'
  if (code >= 61 && code <= 65) return '\uD83C\uDF27\uFE0F'
  if (code >= 80 && code <= 82) return '\uD83C\uDF26\uFE0F'
  if (code >= 95) return '\u26C8\uFE0F'
  return '\u2600\uFE0F'
}

export default function WeatherWidget() {
  const current = weatherMock.current_weather
  const forecast = weatherMock.forecast
  const codes = weatherMock.weather_codes_reference as Record<string, string>

  return (
    <div className="rounded-2xl bg-white ring-1 ring-stone-200/60 overflow-hidden">
      {/* Current Weather */}
      <div className="p-6 bg-gradient-to-br from-safari-700 to-safari-800 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-safari-200">Serengeti, Tanzania</p>
            <p className="text-4xl font-bold mt-1">{current.temperature}&deg;C</p>
            <p className="text-sm text-safari-200 mt-1">{current.weather_description}</p>
          </div>
          <div className="text-5xl" aria-hidden="true">
            {getWeatherEmoji(current.weather_code)}
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-5 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-safari-300">Humidity</p>
            <p className="text-sm font-semibold">{current.humidity}%</p>
          </div>
          <div>
            <p className="text-xs text-safari-300">Wind</p>
            <p className="text-sm font-semibold">{current.wind_speed} km/h</p>
          </div>
          <div>
            <p className="text-xs text-safari-300">Feels Like</p>
            <p className="text-sm font-semibold">{current.apparent_temperature}&deg;C</p>
          </div>
        </div>
      </div>

      {/* 7-day Forecast */}
      <div className="p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
          7-Day Forecast
        </h4>
        <div className="space-y-2">
          {forecast.dates.map((date, i) => {
            const d = new Date(date)
            const day = d.toLocaleDateString('en-US', { weekday: 'short' })
            const code = forecast.weather_codes[i]
            const desc = codes[String(code)] || weatherIcons[code] || 'Clear'
            return (
              <div key={date} className="flex items-center justify-between py-1.5">
                <span className="text-sm text-stone-600 w-10">{day}</span>
                <span className="text-sm" aria-label={desc}>
                  {getWeatherEmoji(code)}
                </span>
                <span className="text-xs text-stone-400 flex-1 ml-3">{desc}</span>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-stone-800">
                    {forecast.temperature_max[i]}&deg;
                  </span>
                  <span className="text-stone-400">
                    {forecast.temperature_min[i]}&deg;
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
