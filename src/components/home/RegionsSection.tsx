import { regions } from '@/mockdata'
import type { Region } from '@/mockdata'
import RegionCard from '@/components/RegionCard'

export default function RegionsSection() {
  const items = regions as Region[]

  return (
    <section className="py-20 lg:py-28 bg-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Where to Go
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif text-balance">
            Explore by Region
          </h2>
          <p className="mt-3 text-stone-500 max-w-2xl mx-auto text-pretty">
            Three extraordinary regions, each offering a completely different
            side of Tanzania&apos;s natural beauty and cultural heritage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </div>
    </section>
  )
}
