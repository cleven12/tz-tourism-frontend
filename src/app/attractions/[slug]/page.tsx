import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { attractionDetail, attractions } from '@/mockdata'
import type { AttractionDetail, AttractionListItem } from '@/mockdata'

const detail = attractionDetail as AttractionDetail
const allAttractions = attractions as AttractionListItem[]

const difficultyColors: Record<string, string> = {
  easy: 'bg-emerald-100 text-emerald-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  challenging: 'bg-orange-100 text-orange-800',
  difficult: 'bg-red-100 text-red-800',
  extreme: 'bg-purple-100 text-purple-800',
}

export default async function AttractionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Try to match the full detail data, or fall back to list data
  const isDetailSlug = slug === detail.slug
  const listItem = allAttractions.find((a) => a.slug === slug)

  if (!isDetailSlug && !listItem) {
    notFound()
  }

  // Use full detail for Serengeti, fallback for others
  if (isDetailSlug) {
    return <FullDetailView data={detail} />
  }

  // Render a simplified detail view for other attractions
  return <SimpleDetailView item={listItem!} />
}

/* ── Full Detail View (for Serengeti) ── */
function FullDetailView({ data }: { data: AttractionDetail }) {
  const diffColor = difficultyColors[data.difficulty_level] || difficultyColors.easy

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-end overflow-hidden">
        {data.featured_image && (
          <Image
            src={data.featured_image}
            alt={data.name}
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
            <Link href="/attractions" className="hover:text-white transition-colors">Attractions</Link>
            <span>/</span>
            <span className="text-white/90">{data.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${diffColor}`}>
              {data.difficulty_display}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium text-white">
              {data.category_display}
            </span>
            {data.is_featured && (
              <span className="px-3 py-1 rounded-full bg-amber-500 text-stone-900 text-xs font-bold">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif text-balance">
            {data.name}
          </h1>
          <p className="mt-2 text-lg text-white/80 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {data.region.name} Region
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">About</h2>
              <p className="text-stone-600 leading-relaxed text-pretty whitespace-pre-line">
                {data.description}
              </p>
            </div>

            {/* Quick Facts */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">Quick Facts</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <FactCard label="Duration" value={data.estimated_duration} icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                <FactCard label="Entrance Fee" value={data.entrance_fee ? `$${data.entrance_fee}` : 'Free'} icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <FactCard label="Best Time" value={data.best_time_to_visit.split(';')[0]} icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                {data.altitude && (
                  <FactCard label="Altitude" value={`${data.altitude.toLocaleString()}m`} icon="M3 17l6-6 4 4 8-8" />
                )}
                <FactCard label="Nearest Airport" value={data.nearest_airport} icon="M5 3l14 9-14 9V3z" />
                <FactCard label="Guide Required" value={data.requires_guide ? 'Yes' : 'No'} icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </div>
            </div>

            {/* Gallery */}
            {data.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.images.map((img) => (
                    <div key={img.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                      <Image
                        src={img.image}
                        alt={img.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="absolute bottom-3 left-3 right-3 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            {data.tips.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">Traveller Tips</h2>
                <div className="space-y-4">
                  {data.tips.map((tip) => (
                    <div key={tip.id} className="rounded-xl bg-amber-50 border border-amber-100 p-5">
                      <h4 className="font-bold text-stone-900">{tip.title}</h4>
                      <p className="mt-2 text-sm text-stone-600 leading-relaxed text-pretty">
                        {tip.description}
                      </p>
                      {tip.created_by_username && (
                        <p className="mt-2 text-xs text-stone-400">
                          Shared by {tip.created_by_username}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Access Info */}
            <div className="rounded-2xl bg-white ring-1 ring-stone-200/60 p-6">
              <h3 className="text-lg font-bold text-stone-900 mb-3">Access Information</h3>
              <p className="text-sm text-stone-600 leading-relaxed text-pretty">
                {data.access_info}
              </p>
              {data.distance_from_airport && (
                <p className="mt-3 text-sm text-stone-500">
                  Distance from airport: <span className="font-semibold text-stone-700">{data.distance_from_airport} km</span>
                </p>
              )}
            </div>

            {/* Seasonal Availability */}
            <div className="rounded-2xl bg-white ring-1 ring-stone-200/60 p-6">
              <h3 className="text-lg font-bold text-stone-900 mb-3">Seasonal Availability</h3>
              <p className="text-sm text-stone-600 leading-relaxed text-pretty">
                {data.seasonal_availability}
              </p>
            </div>

            {/* Region Card */}
            <Link
              href={`/regions/${data.region.slug}`}
              className="block rounded-2xl overflow-hidden ring-1 ring-stone-200/60 group"
            >
              <div className="relative aspect-video">
                {data.region.image && (
                  <Image
                    src={data.region.image}
                    alt={data.region.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="400px"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs text-white/60 uppercase tracking-wider">Region</p>
                  <p className="text-lg font-bold text-white">{data.region.name}</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-stone-500 line-clamp-2 text-pretty">
                  {data.region.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-safari-700 group-hover:gap-2 transition-all">
                  Explore region
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Coordinates */}
            <div className="rounded-2xl bg-stone-100 p-6">
              <h3 className="text-sm font-bold text-stone-700 mb-2">GPS Coordinates</h3>
              <p className="text-sm font-mono text-stone-600">
                {data.latitude}, {data.longitude}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

/* ── Simple Detail View (fallback for other slugs) ── */
function SimpleDetailView({ item }: { item: AttractionListItem }) {
  const diffColor = difficultyColors[item.difficulty_level] || difficultyColors.easy

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-end overflow-hidden">
        {item.featured_image && (
          <Image
            src={item.featured_image}
            alt={item.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/attractions" className="hover:text-white transition-colors">Attractions</Link>
            <span>/</span>
            <span className="text-white/90">{item.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${diffColor}`}>
              {item.difficulty_display}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium text-white">
              {item.category_display}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif text-balance">
            {item.name}
          </h1>
          <p className="mt-2 text-lg text-white/80 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.region_name} Region
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-stone-900 font-serif mb-4">About</h2>
          <p className="text-stone-600 leading-relaxed text-pretty">
            {item.short_description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <FactCard label="Best Time" value={item.best_time_to_visit} icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            <FactCard label="Difficulty" value={item.difficulty_display} icon="M13 10V3L4 14h7v7l9-11h-7z" />
          </div>

          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-safari-700 hover:text-safari-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to all attractions
          </Link>
        </div>
      </div>
    </>
  )
}

/* ── Quick Fact Card ── */
function FactCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="rounded-xl bg-stone-50 ring-1 ring-stone-200/60 p-4 flex items-start gap-3">
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-safari-100 shrink-0">
        <svg className="w-4.5 h-4.5 text-safari-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-xs text-stone-500">{label}</p>
        <p className="text-sm font-semibold text-stone-800 mt-0.5">{value}</p>
      </div>
    </div>
  )
}
