'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Processo', href: '/processo' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-background/97 backdrop-blur-md border-b border-border/40 shadow-xsmall'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 sm:px-12 flex items-center justify-between h-[76px]">

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <Image
            src={scrolled ? '/orlando-cesar-logo-3-ocean-converted-from-png.webp' : '/orlando-cesar-logo-3-white-converted-from-png.webp'}
            alt="Orlando Cesar"
            width={208}
            height={64}
            className={`w-auto transition-all duration-500 ${scrolled ? 'h-6 opacity-100' : 'h-6 opacity-35'}`}
            priority
          />
        </Link>

        {/* ── Desktop Nav ──────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] tracking-[0.06em] font-medium uppercase transition-all duration-500 ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── CTA + Hamburger ──────────────────────────────────────── */}
        <div className="flex items-center gap-5">
          <Link href="/avaliacao-gratuita" className="hidden sm:block">
            <Button
              variant={scrolled ? "secondary" : "ghost"}
              size="sm"
              className={`text-[11px] tracking-[0.08em] font-semibold uppercase cursor-pointer rounded-full transition-all duration-500 ${
                scrolled
                  ? 'shadow-xsmall hover:shadow-small'
                  : 'text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Avaliação Gratuita
            </Button>
          </Link>

          {/* 1px hairline hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-[6px] cursor-pointer p-1"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px transition-all duration-300 origin-center ${
                  scrolled ? 'bg-foreground' : 'bg-white'
                } ${
                  i === 0 ? `w-6 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}` :
                  i === 1 ? `w-4 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}` :
                  `w-6 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-background/98 backdrop-blur-xl border-t border-border/30`}
      >
        <div className="px-8 pt-4 pb-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-4 text-[12px] font-medium tracking-[0.05em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border/25 last:border-0"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {link.name}
              <span className="text-border text-xs">→</span>
            </Link>
          ))}
          <div className="pt-6">
            <Link href="/avaliacao-gratuita" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" className="w-full cursor-pointer font-semibold tracking-wide">
                Avaliação Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
