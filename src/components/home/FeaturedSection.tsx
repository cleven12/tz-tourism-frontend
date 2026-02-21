import { featuredAttractions } from '@/mockdata'
import type { AttractionListItem } from '@/mockdata'
import AttractionCard from '@/components/AttractionCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FeaturedSection() {
  const items = featuredAttractions as AttractionListItem[]

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
              Handpicked for You
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif text-balance">
              Featured Destinations
            </h2>
            <p className="mt-3 text-stone-500 max-w-xl text-pretty">
              Tanzania&apos;s most iconic attractions, curated from
              Kilimanjaro&apos;s peak to Zanzibar&apos;s pristine coastline.
            </p>
          </div>
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-safari-700 hover:text-safari-600 transition-colors shrink-0"
          >
            View all attractions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.slice(0, 3).map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-4xl mx-auto">
          {items.slice(3, 5).map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  )
}
