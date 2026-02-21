import Image from 'next/image'
import Link from 'next/link'
import type { AttractionListItem } from '@/mockdata'

const difficultyColors: Record<string, string> = {
  easy: 'bg-emerald-100 text-emerald-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  challenging: 'bg-orange-100 text-orange-800',
  difficult: 'bg-red-100 text-red-800',
  extreme: 'bg-purple-100 text-purple-800',
}

const categoryIcons: Record<string, string> = {
  mountain: 'M3 17l6-6 4 4 8-8',
  beach: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
  wildlife: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
  cultural: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  historical: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  national_park: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  island: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  waterfall: 'M12 3v18m-4-8l4 4 4-4',
  lake: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  adventure: 'M13 10V3L4 14h7v7l9-11h-7z',
  other: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253',
}

export default function AttractionCard({ attraction }: { attraction: AttractionListItem }) {
  const diffColor = difficultyColors[attraction.difficulty_level] || difficultyColors.easy
  const iconPath = categoryIcons[attraction.category] || categoryIcons.other

  return (
    <Link
      href={`/attractions/${attraction.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {attraction.featured_image ? (
          <Image
            src={attraction.featured_image}
            alt={attraction.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-stone-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

        {/* Featured badge */}
        {attraction.is_featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-stone-900 text-xs font-bold uppercase tracking-wide">
            Featured
          </div>
        )}

        {/* Difficulty badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${diffColor}`}>
          {attraction.difficulty_display}
        </div>

        {/* Region label overlaying bottom of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs font-medium">{attraction.region_name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-3.5 h-3.5 text-safari-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
          <span className="text-xs font-medium text-safari-700 uppercase tracking-wide">
            {attraction.category_display}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-stone-900 leading-snug group-hover:text-safari-700 transition-colors text-balance">
          {attraction.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-stone-500 leading-relaxed line-clamp-2 text-pretty">
          {attraction.short_description}
        </p>

        {/* Meta */}
        <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-stone-400">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{attraction.best_time_to_visit}</span>
        </div>
      </div>
    </Link>
  )
}
