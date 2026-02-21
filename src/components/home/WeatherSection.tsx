import WeatherWidget from '@/components/WeatherWidget'
import { weatherMock } from '@/mockdata'

export default function WeatherSection() {
  const seasons = weatherMock.seasonal_patterns

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Plan Smart
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif text-balance">
            Weather & Seasons
          </h2>
          <p className="mt-3 text-stone-500 max-w-2xl mx-auto text-pretty">
            Real-time conditions and seasonal patterns to help you pick
            the perfect time for your Tanzanian adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Weather Widget */}
          <WeatherWidget />

          {/* Seasonal Patterns */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 mb-4">
              Seasonal Guide
            </h3>
            {seasons.map((season) => {
              const seasonColors: Record<string, string> = {
                dry: 'border-l-amber-500 bg-amber-50',
                short_rain: 'border-l-blue-400 bg-blue-50',
                long_rain: 'border-l-indigo-500 bg-indigo-50',
              }
              const color = seasonColors[season.season_type] || seasonColors.dry
              const months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
              ]

              return (
                <div
                  key={season.id}
                  className={`rounded-xl border-l-4 p-5 ${color}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-900">
                        {season.season_display}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {months[season.start_month - 1]} &mdash; {months[season.end_month - 1]}
                      </p>
                      <p className="text-sm text-stone-600 mt-2 leading-relaxed text-pretty">
                        {season.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xl font-bold text-stone-800">
                        {Number(season.avg_temperature)}&deg;C
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {Number(season.avg_rainfall)}mm rain
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
