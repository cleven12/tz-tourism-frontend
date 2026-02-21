import Image from 'next/image'
import Link from 'next/link'
import { regions } from '@/mockdata'
import type { Region } from '@/mockdata'

const allRegions = regions as Region[]

export default function RegionsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80"
          alt="Tanzania regions overview"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/30" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1">
            Three Extraordinary Worlds
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif">
            Explore Regions
          </h1>
          <p className="mt-2 text-white/70 max-w-xl text-pretty">
            Each region of Tanzania tells a different story &mdash; from
            snow-capped peaks to spice-scented islands.
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {allRegions.map((region, i) => (
              <Link
                key={region.id}
                href={`/regions/${region.slug}`}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center rounded-3xl overflow-hidden bg-white ring-1 ring-stone-200/60 transition-all hover:shadow-xl hover:shadow-stone-900/5 ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {region.image && (
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className={`p-6 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-safari-50 text-safari-700 text-xs font-semibold">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {region.attraction_count} Attractions
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 font-serif">
                    {region.name}
                  </h2>

                  <p className="mt-3 text-stone-500 leading-relaxed text-pretty">
                    {region.description}
                  </p>

                  <div className="mt-4 text-xs text-stone-400 font-mono">
                    {region.latitude}, {region.longitude}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 group-hover:gap-3 transition-all">
                    Explore {region.name}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
