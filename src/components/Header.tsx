'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  MapPin,
  Phone,
  ChevronRight,
  Compass,
  Mountain,
  Globe,
} from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/attractions', label: 'Attractions' },
  { href: '/regions', label: 'Regions' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Top contact bar - visible on desktop */}
      <div className="hidden lg:block bg-stone-950 text-stone-400 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Arusha, Tanzania
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              +255 123 456 789
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Open-Source Tourism Platform</span>
            <a
              href="https://github.com/cleven12/tz-tourism-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg shadow-stone-900/10'
            : 'bg-stone-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-[4.5rem]" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-safari-600 transition-colors group-hover:bg-safari-500">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight leading-none">
                  TZ Tourism
                </span>
                <span className="text-[10px] text-stone-400 tracking-wider uppercase leading-none mt-0.5">
                  Discover Tanzania
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-safari-600 text-white'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/attractions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-stone-900 text-sm font-semibold transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.98]"
              >
                Plan Your Trip
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-6 pt-2 bg-stone-900/98 backdrop-blur-md border-t border-white/10 space-y-1">
            {navLinks.map((link) => {
              const icons: Record<string, React.ReactNode> = {
                '/': <Globe className="w-4 h-4" />,
                '/attractions': <Mountain className="w-4 h-4" />,
                '/regions': <MapPin className="w-4 h-4" />,
                '/about': <Compass className="w-4 h-4" />,
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-safari-600 text-white'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {icons[link.href]}
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 space-y-2">
              <Link
                href="/attractions"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-amber-500 text-stone-900 text-sm font-semibold hover:bg-amber-400 transition-colors"
              >
                Plan Your Trip
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3 px-4 py-2 text-xs text-stone-500">
                <Phone className="w-3 h-3" />
                <span>+255 123 456 789</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
