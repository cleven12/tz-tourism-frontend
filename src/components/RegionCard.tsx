import Image from 'next/image'
import Link from 'next/link'
import type { Region } from '@/mockdata'

export default function RegionCard({ region }: { region: Region }) {
  return (
    <Link
      href={`/regions/${region.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5]"
    >
      {/* Background Image */}
      {region.image ? (
        <Image
          src={region.image}
          alt={region.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-stone-300" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />

      {/* Content at bottom */}
      <div className="relative flex flex-col justify-end flex-1 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium text-white/90">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {region.attraction_count} attraction{region.attraction_count !== 1 ? 's' : ''}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white font-serif tracking-tight">
          {region.name}
        </h3>

        <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2 text-pretty">
          {region.description}
        </p>

        {/* Explore CTA */}
        <div className="mt-4 flex items-center gap-2 text-amber-400 text-sm font-semibold transition-all group-hover:gap-3">
          <span>Explore Region</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
