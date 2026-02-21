import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { regions, attractions } from '@/mockdata'
import type { Region, AttractionListItem } from '@/mockdata'
import AttractionCard from '@/components/AttractionCard'

const allRegions = regions as Region[]
const allAttractions = attractions as AttractionListItem[]

export default async function RegionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const region = allRegions.find((r) => r.slug === slug)

  if (!region) {
    notFound()
  }

  const regionAttractions = allAttractions.filter(
    (a) => a.region_name === region.name
  )

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-end overflow-hidden">
        {region.image && (
          <Image
            src={region.image}
            alt={region.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/regions" className="hover:text-white transition-colors">Regions</Link>
            <span>/</span>
            <span className="text-white/90">{region.name}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
            {region.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-white/70">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {region.latitude}, {region.longitude}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium text-white">
              {region.attraction_count} attraction{region.attraction_count !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">
              About {region.name}
            </h2>
            <p className="text-stone-600 leading-relaxed text-pretty">
              {region.description}
            </p>
          </div>

          {/* Attractions in this region */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6">
              Attractions in {region.name}
            </h2>

            {regionAttractions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {regionAttractions.map((attraction) => (
                  <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-stone-500">
                  No attractions listed for this region yet.
                </p>
              </div>
            )}
          </div>

          {/* Back link */}
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-safari-700 hover:text-safari-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to all regions
          </Link>
        </div>
      </section>
    </>
  )
}
