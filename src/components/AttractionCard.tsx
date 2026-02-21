import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Calendar,
  Star,
  Mountain,
  Waves,
  TreePine,
  Landmark,
  Tent,
  Palmtree,
  Droplets,
  Bird,
  Zap,
  Compass,
} from 'lucide-react'
import type { AttractionListItem } from '@/mockdata'

const difficultyColors: Record<string, string> = {
  easy: 'bg-emerald-100 text-emerald-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  challenging: 'bg-orange-100 text-orange-800',
  difficult: 'bg-red-100 text-red-800',
  extreme: 'bg-red-200 text-red-900',
}

const categoryIcons: Record<string, React.ElementType> = {
  mountain: Mountain,
  beach: Waves,
  wildlife: Bird,
  cultural: Landmark,
  historical: Landmark,
  national_park: TreePine,
  island: Palmtree,
  waterfall: Droplets,
  lake: Waves,
  adventure: Zap,
  other: Compass,
}

export default function AttractionCard({ attraction }: { attraction: AttractionListItem }) {
  const diffColor = difficultyColors[attraction.difficulty_level] || difficultyColors.easy
  const CategoryIcon = categoryIcons[attraction.category] || categoryIcons.other

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
            <Mountain className="w-12 h-12 text-stone-400" />
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

        {/* Featured badge */}
        {attraction.is_featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-stone-900 text-xs font-bold uppercase tracking-wide">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Difficulty badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${diffColor}`}>
          {attraction.difficulty_display}
        </div>

        {/* Region label at bottom of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">{attraction.region_name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <div className="flex items-center gap-1.5 mb-2">
          <CategoryIcon className="w-3.5 h-3.5 text-safari-600" />
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
          <Calendar className="w-3.5 h-3.5" />
          <span>{attraction.best_time_to_visit}</span>
        </div>
      </div>
    </Link>
  )
}
