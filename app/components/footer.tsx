'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    { icon: Phone, label: 'Telefone', value: '+351 266 XXXXXX', href: 'tel:+351266000000' },
    { icon: Mail, label: 'Email', value: 'orlando@evora.imobiliario', href: 'mailto:orlando@evora.imobiliario' },
    { icon: MapPin, label: 'Localização', value: 'Évora, Alentejo', href: '#' },
  ]

  const footerLinks = [
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contacto', href: '/contato' },
    { label: 'Política de Privacidade', href: '/privacidade' },
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-[#3B588A]' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-[#B1E158]' },
  ]

  return (
    <footer className="relative bg-[#0f1110] text-foreground overflow-hidden">
      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial glow - bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 20% 80%, rgba(59,88,138,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Fine dot texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Top hairline accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(to right, rgba(177,225,88,0.4) 0%, rgba(59,88,138,0.15) 30%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-16 lg:gap-24 mb-20">
            {/* Left column - Brand statement & contact */}
            <div>
              <div className="mb-12">
                <div className="mb-6">
                  <Image
                    src="/orlando-cesar-logo-3-white-converted-from-png.webp"
                    alt="Orlando Cesar"
                    width={208}
                    height={64}
                    className="h-8 w-auto opacity-60"
                  />
                </div>
                <p className="text-lg sm:text-xl text-white/70 font-light leading-[1.8] max-w-[42ch]">
                  Transparência, competência e empatia em cada transação imobiliária.
                </p>
              </div>

              {/* Contact info with elegant reveal animation */}
              <div className="space-y-4">
                {contactInfo.map((item, idx) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      className="group flex items-start gap-4 py-3 px-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-white/[0.04]"
                    >
                      <IconComponent className="w-5 h-5 text-secondary/60 group-hover:text-secondary transition-colors duration-300 shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/30 group-hover:text-white/50 transition-colors duration-300 font-semibold mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Center column - Navigation */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] text-white/20 font-semibold mb-8">
                Navegação
              </p>
              <nav className="space-y-4">
                {footerLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group flex items-center gap-3 text-sm text-white/50 hover:text-white/90 transition-colors duration-300"
                  >
                    <span className="text-white/20 group-hover:text-secondary/50 transition-colors duration-300">→</span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right column - Social & CTA */}
            <div>
              <div className="mb-12">
                <p className="text-[9px] uppercase tracking-[0.45em] text-white/20 font-semibold mb-6">
                  Comunidade
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        className={`group relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] ${social.color}`}
                      >
                        <IconComponent className="w-4 h-4 text-white/40 transition-colors duration-300 group-hover:text-inherit" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* CTA - Free assessment */}
              <div className="relative">
                <Link href="/avaliacao-gratuita" className="group inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-300">
                  <span>Avaliação Gratuita</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="relative h-px my-16 lg:my-20 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(177,225,88,0.2) 20%, rgba(59,88,138,0.1) 50%, transparent 80%)',
              }}
            />
          </div>

          {/* Bottom section - Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Location badge */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary/40" />
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/20 font-medium">
                Évora & Alentejo — Portugal
              </p>
            </div>

            {/* Center - Accreditation (hidden on mobile) */}
            <div className="hidden sm:flex sm:justify-center lg:justify-start">
              <p className="text-[9px] uppercase tracking-[0.20em] text-white/15 font-semibold">
                Membro Acreditado AMI
              </p>
            </div>

            {/* Right - Copyright with micro animation */}
            <div className="sm:text-right lg:text-left">
              <p className="text-[9px] text-white/10 font-mono group inline-block transition-colors duration-300 hover:text-white/20">
                © {currentYear} Orlando Cesar · Corretor Imobiliário
              </p>
            </div>
          </div>
        </div>

        {/* Floating accent line - decorative */}
        <div
          className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle at 100% 100%, rgba(177,225,88,0.08) 0%, transparent 70%)',
          }}
        />
      </div>
    </footer>
  )
}
