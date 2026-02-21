import Link from 'next/link'
import {
  Compass,
  MapPin,
  Mail,
  Phone,
  Github,
  ExternalLink,
  Heart,
} from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/attractions', label: 'Attractions' },
  { href: '/regions', label: 'Regions' },
  { href: '/about', label: 'About' },
]

const regionLinks = [
  { href: '/regions/kilimanjaro', label: 'Kilimanjaro' },
  { href: '/regions/arusha', label: 'Arusha' },
  { href: '/regions/zanzibar', label: 'Zanzibar' },
]

const projectLinks = [
  {
    href: 'https://github.com/cleven12/tz-tourism-frontend',
    label: 'Frontend (Next.js)',
    external: true,
  },
  {
    href: 'https://github.com/cleven12/tz-tourism',
    label: 'Backend API (Django)',
    external: true,
  },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Newsletter / CTA strip */}
      <div className="border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Ready to explore Tanzania?
            </h3>
            <p className="text-sm text-stone-400 mt-0.5">
              Start planning your adventure with GPS-accurate guides.
            </p>
          </div>
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 text-sm font-semibold hover:bg-amber-400 transition-colors shrink-0"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column - wider */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-safari-600">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight leading-none">
                  TZ Tourism
                </span>
                <span className="text-[10px] text-stone-500 tracking-wider uppercase leading-none mt-0.5">
                  Discover Tanzania
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs text-pretty">
              Your GPS-accurate guide to Tanzania&apos;s most breathtaking
              destinations. Open-source, free, and community-driven.
            </p>
            {/* GitHub links */}
            <div className="mt-5 flex flex-col gap-2">
              {projectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-stone-500 hover:text-amber-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  {link.label}
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Explore Regions
            </h3>
            <ul className="space-y-3">
              {regionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-safari-500" />
                <span>Arusha, Tanzania</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-safari-500" />
                <span>info@tztourism.co.tz</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-safari-500" />
                <span>+255 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} TZ Tourism. MIT License &mdash;
            Free to use, modify, and distribute.
          </p>
          <p className="text-xs text-stone-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> in Tanzania
          </p>
        </div>
      </div>
    </footer>
  )
}
