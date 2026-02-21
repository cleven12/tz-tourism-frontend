import Image from 'next/image'

const stats = [
  { value: '12+', label: 'Curated Destinations' },
  { value: '3', label: 'Unique Regions' },
  { value: '24/7', label: 'Weather Data' },
  { value: '100%', label: 'Free & Open Source' },
]

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1920&q=75"
        alt="African savannah sunset"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-stone-900/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Platform at a Glance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif text-balance">
            Trusted by Travellers Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 font-serif">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
