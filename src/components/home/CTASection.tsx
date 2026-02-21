import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1621414050946-1b8b54914a61?w=1920&q=80"
        alt="Mount Kilimanjaro at sunrise"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-safari-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif text-balance">
          Ready for the Adventure of a Lifetime?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto text-pretty">
          Whether you seek the thrill of a Kilimanjaro summit, the wonder of
          the Great Migration, or the serenity of Zanzibar&apos;s beaches
          &mdash; Tanzania awaits you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-stone-900 font-bold transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Start Exploring
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold border border-white/20 hover:bg-white/20 transition-all"
          >
            Browse Regions
          </Link>
        </div>
      </div>
    </section>
  )
}
