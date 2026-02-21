import {
  MapPin,
  Shield,
  CloudSun,
  Compass,
  Users,
  Globe,
} from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'GPS-Accurate Data',
    description:
      'Every attraction is mapped with verified GPS coordinates so you always know exactly where you are heading.',
  },
  {
    icon: CloudSun,
    title: 'Real-Time Weather',
    description:
      'Live weather data and seasonal patterns powered by Open-Meteo help you pick the perfect travel window.',
  },
  {
    icon: Shield,
    title: 'Verified Information',
    description:
      'Community-moderated content goes through a review process to ensure accuracy, honesty, and safety.',
  },
  {
    icon: Compass,
    title: 'Expert-Curated',
    description:
      'Difficulty ratings, access info, and traveller tips from locals and seasoned explorers.',
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description:
      'Open-source and free forever. Contributions from travellers and locals keep the platform growing.',
  },
  {
    icon: Globe,
    title: 'Completely Free',
    description:
      'No paywalls, no hidden costs. Built to promote safe, informed tourism in Tanzania for everyone.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Why TZ Tourism
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif text-balance">
            Your Trusted Travel Companion
          </h2>
          <p className="mt-3 text-stone-500 max-w-2xl mx-auto text-pretty">
            We combine technology, community expertise, and a deep love for
            Tanzania to give you the most reliable tourism platform in East
            Africa.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-white p-7 ring-1 ring-stone-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-safari-50 text-safari-700 mb-5 transition-colors group-hover:bg-safari-100">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-stone-500 leading-relaxed text-pretty">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
