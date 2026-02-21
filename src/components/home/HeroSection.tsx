import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=85"
        alt="Serengeti National Park landscape"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-stone-900/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-7">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Trusted Open-Source Tourism Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] font-serif text-balance">
            Discover the Soul of{' '}
            <span className="text-amber-400">Tanzania</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg text-pretty">
            From Kilimanjaro&apos;s summit to Zanzibar&apos;s shores, explore
            Tanzania&apos;s most breathtaking destinations with GPS-accurate
            guides and real-time weather.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 text-stone-900 font-semibold transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.98] text-sm sm:text-base"
            >
              Explore Attractions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/regions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 transition-all hover:bg-white/20 active:scale-[0.98] text-sm sm:text-base"
            >
              <MapPin className="w-4 h-4" />
              Browse Regions
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-14 flex items-center gap-8 sm:gap-12">
            {[
              { value: '12+', label: 'Destinations' },
              { value: '3', label: 'Regions' },
              { value: '24/7', label: 'Weather Data' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="w-px h-10 bg-white/20 -ml-8 sm:-ml-12" />}
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-white/60 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
