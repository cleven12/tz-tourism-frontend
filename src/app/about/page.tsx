import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  MapPin,
  Shield,
  CloudSun,
  Code2,
  Users,
  Github,
  Globe,
  Heart,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | TZ Tourism',
  description:
    'Learn about the TZ Tourism open-source platform - our mission, tech stack, and how to contribute.',
}

const techStack = [
  { name: 'Next.js 14', desc: 'App Router, Server Components' },
  { name: 'TypeScript 5', desc: 'Full type safety' },
  { name: 'Tailwind CSS 3', desc: 'Utility-first styling' },
  { name: 'Django 4.2+', desc: 'REST Framework backend' },
  { name: 'PostgreSQL', desc: 'Production database' },
  { name: 'Open-Meteo', desc: 'Weather data API' },
]

const values = [
  {
    icon: Shield,
    title: 'Honest Information',
    description:
      'No exaggeration, no misleading claims. We provide factual, verified data to help travellers make informed decisions.',
  },
  {
    icon: MapPin,
    title: 'GPS Accuracy',
    description:
      'Every attraction is pinpointed with verified coordinates so you can navigate with confidence on the ground.',
  },
  {
    icon: CloudSun,
    title: 'Real-Time Data',
    description:
      'Live weather, seasonal patterns, and up-to-date conditions ensure you always travel prepared.',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'Built by travellers for travellers. Local insights and community moderation keep the platform trustworthy.',
  },
]

const roadmap = [
  { label: 'Next.js boilerplate', done: true },
  { label: 'Tailwind CSS setup', done: true },
  { label: 'Mock data integration', done: true },
  { label: 'Attraction pages', done: true },
  { label: 'Region pages', done: true },
  { label: 'Weather widgets', done: true },
  { label: 'Search & filters', done: true },
  { label: 'Map integration', done: false },
  { label: 'PWA support', done: false },
  { label: 'Live API connection', done: false },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621414050946-1b8b54914a61?w=1920&q=80"
          alt="Mount Kilimanjaro at sunrise"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/50 to-stone-900/30" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif">
            About TZ Tourism
          </h1>
          <p className="mt-2 text-white/70 max-w-xl text-pretty">
            An open-source platform built to provide honest, accurate tourism
            data for Tanzania.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif text-balance">
                Enable safe, informed tourism through accessible data
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed text-pretty">
                Tanzania is home to some of the most spectacular landscapes on
                Earth -- from Africa&apos;s tallest peak to the world-famous
                Serengeti. Yet reliable, free tourism information can be hard to
                find. TZ Tourism bridges that gap with GPS-accurate attraction
                data, real-time weather, and community-moderated content.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed text-pretty">
                This is a fully open-source project, free forever, with no
                paywalls or hidden fees. The frontend is built with Next.js and
                consumes a Django REST API backend. Both repositories are
                publicly available on GitHub.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/cleven12/tz-tourism-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Frontend Repo
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/cleven12/tz-tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-stone-700 text-sm font-semibold ring-1 ring-stone-200 hover:ring-stone-300 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  Backend API
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                alt="Elephant in Serengeti"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif text-balance">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="rounded-2xl bg-white p-7 ring-1 ring-stone-200/60"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-safari-50 text-safari-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed text-pretty">
                    {v.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack & Roadmap */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Tech Stack */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
                Built With
              </p>
              <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6">
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 rounded-xl bg-stone-50 ring-1 ring-stone-200/60 p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-safari-500 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-stone-800">
                        {tech.name}
                      </p>
                      <p className="text-xs text-stone-500">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
                Progress
              </p>
              <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6">
                Development Roadmap
              </h2>
              <div className="space-y-3">
                {roadmap.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        item.done
                          ? 'bg-safari-600 text-white'
                          : 'bg-stone-200 text-stone-400'
                      }`}
                    >
                      {item.done ? (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-stone-300" />
                      )}
                    </div>
                    <span className={item.done ? 'text-stone-700' : 'text-stone-400'}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributing CTA */}
      <section className="py-16 lg:py-24 bg-safari-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif text-balance">
            Contribute to TZ Tourism
          </h2>
          <p className="mt-4 text-safari-100 max-w-2xl mx-auto text-pretty">
            Whether you are a developer, a photographer, a local guide, or a
            traveller who knows a hidden gem -- your contributions make this
            platform better for everyone.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/cleven12/tz-tourism-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-safari-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              <Globe className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-safari-600 text-white font-semibold border border-white/20 hover:bg-safari-500 transition-colors"
            >
              Explore the Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
