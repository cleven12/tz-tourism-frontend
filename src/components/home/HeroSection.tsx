import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
              Tanzania&apos;s Premier Tourism Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] font-serif text-balance">
            Discover the Soul of{' '}
            <span className="text-amber-400">Africa</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg text-pretty">
            From the snow-capped summit of Kilimanjaro to the turquoise shores
            of Zanzibar, explore Tanzania&apos;s most breathtaking destinations
            with GPS-accurate guides and real-time weather insights.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 text-stone-900 font-semibold transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 text-sm sm:text-base"
            >
              Explore Attractions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/regions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 transition-all hover:bg-white/20 text-sm sm:text-base"
            >
              Browse Regions
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex items-center gap-8 sm:gap-12">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">12+</p>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">Destinations</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">3</p>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">Regions</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">Weather Data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
