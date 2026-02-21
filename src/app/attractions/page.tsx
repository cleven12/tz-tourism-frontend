'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Search, SlidersHorizontal } from 'lucide-react'
import { attractions } from '@/mockdata'
import type { AttractionListItem } from '@/mockdata'
import AttractionCard from '@/components/AttractionCard'

const allAttractions = attractions as AttractionListItem[]

const categories = [
  { value: 'all', label: 'All' },
  { value: 'mountain', label: 'Mountain' },
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'beach', label: 'Beach' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'historical', label: 'Historical' },
  { value: 'national_park', label: 'National Park' },
  { value: 'island', label: 'Island' },
  { value: 'lake', label: 'Lake' },
]

const regionOptions = [
  { value: 'all', label: 'All Regions' },
  { value: 'Kilimanjaro', label: 'Kilimanjaro' },
  { value: 'Arusha', label: 'Arusha' },
  { value: 'Zanzibar', label: 'Zanzibar' },
]

export default function AttractionsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegion, setActiveRegion] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    return allAttractions.filter((a) => {
      const matchCategory = activeCategory === 'all' || a.category === activeCategory
      const matchRegion = activeRegion === 'all' || a.region_name === activeRegion
      const matchSearch =
        !searchQuery ||
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.short_description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchRegion && matchSearch
    })
  }, [activeCategory, activeRegion, searchQuery])

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
          alt="Tanzania landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/30" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1">
            Browse & Discover
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif">
            Explore Attractions
          </h1>
          <p className="mt-2 text-white/70 max-w-xl text-pretty">
            {allAttractions.length} carefully curated destinations across
            Tanzania&apos;s most remarkable regions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 lg:top-[4.5rem] z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            {/* Search + region */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search attractions..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-sm text-stone-700 ring-1 ring-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-safari-500 transition-shadow"
                  aria-label="Search attractions"
                />
              </div>

              {/* Region dropdown */}
              <div className="relative flex items-center">
                <SlidersHorizontal className="absolute left-3 w-4 h-4 text-stone-400 pointer-events-none" />
                <select
                  value={activeRegion}
                  onChange={(e) => setActiveRegion(e.target.value)}
                  className="pl-10 pr-8 py-2.5 rounded-lg bg-white text-sm font-medium text-stone-700 ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-safari-500 transition-shadow appearance-none cursor-pointer"
                  aria-label="Filter by region"
                >
                  {regionOptions.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category pills */}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.value
                        ? 'bg-safari-700 text-white shadow-sm'
                        : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-safari-300 hover:text-safari-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Result count */}
          <p className="text-sm text-stone-500 mb-6">
            Showing{' '}
            <span className="font-semibold text-stone-800">{filtered.length}</span>{' '}
            attraction{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'all' && (
              <span>
                {' '}
                in{' '}
                <span className="font-medium text-safari-700">
                  {categories.find((c) => c.value === activeCategory)?.label}
                </span>
              </span>
            )}
            {activeRegion !== 'all' && (
              <span>
                {' '}
                &middot;{' '}
                <span className="font-medium text-safari-700">{activeRegion}</span>
              </span>
            )}
            {searchQuery && (
              <span>
                {' '}
                &middot; &quot;{searchQuery}&quot;
              </span>
            )}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 mx-auto text-stone-300 mb-4" />
              <h3 className="text-lg font-semibold text-stone-700">
                No attractions found
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Try adjusting your filters to discover more destinations.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all')
                  setActiveRegion('all')
                  setSearchQuery('')
                }}
                className="mt-4 px-5 py-2 rounded-lg bg-safari-700 text-white text-sm font-medium hover:bg-safari-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
