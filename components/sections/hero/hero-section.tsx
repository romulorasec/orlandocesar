'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      {/* Full-bleed photo — Ken Burns cinematic zoom */}
      <Image
        src="/orlando-cesar-2560x1440-converted-from-png.webp"
        alt="Orlando Cesar — Corretor Imobiliário Évora"
        fill
        priority
        className="object-cover object-[center_20%] animate-ken-burns"
        sizes="100vw"
      />

      {/* === Gradient layers — multi-pass cinemático === */}
      {/* 1. Vignette superior: garante contraste do header */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent" />
      {/* 2. Painel direito escuro: suporte para o texto */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/50 to-transparent" style={{ backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.10) 65%, transparent 100%)' }} />
      {/* 3. Vignette inferior: profundidade atmosférica */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {/* 4. Viñeta suave nas bordas laterais */}
      <div className="absolute inset-0" style={{ boxShadow: 'inset 120px 0 80px -40px rgba(0,0,0,0.35)' }} />

      {/* === Conteúdo principal — ancorado à direita === */}
      <div className="absolute inset-0 flex items-end lg:items-center">
        <div className="w-full px-8 sm:px-12 lg:px-20 pb-20 lg:pb-0">
          <div className="ml-auto max-w-[520px] lg:max-w-[480px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-secondary" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium">
                Évora & Alentejo
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-2 text-white leading-[1.03] mb-8" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
              O imóvel certo,<br />
              vendido pelo<br />
              <span className="text-secondary">valor justo.</span>
            </h1>

            {/* Divisor */}
            <div className="w-12 h-px bg-white/20 mb-8" />

            {/* Subtext */}
            <p className="body-lg text-white/55 font-light leading-relaxed mb-12">
              Processo claro. Cada etapa explicada.<br />
              Sem surpresas, sem complicações.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/avaliacao-gratuita">
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-semibold cursor-pointer shadow-xlarge hover:shadow-xxlarge px-8 transition-shadow duration-300"
                >
                  Avaliação Gratuita
                </Button>
              </Link>
              <a href="#processo">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/60 hover:text-white hover:bg-white/10 border border-white/15 hover:border-white/30 cursor-pointer px-8 transition-all duration-300"
                >
                  Como funciona →
                </Button>
              </a>
            </div>

            {/* Micro-copy */}
            <p className="mt-8 text-[10px] text-white/25 uppercase tracking-[0.3em]">
              Sem pressão · Sem compromisso
            </p>
          </div>
        </div>
      </div>

      {/* === Caption inferior esquerdo — identidade === */}
      <div className="absolute bottom-8 left-10 hidden lg:flex items-center gap-4">
        <div className="w-px h-10 bg-white/20" />
        <div>
          <p className="text-white text-[11px] font-medium tracking-[0.2em] uppercase">Orlando Cesar</p>
          <p className="text-white/35 text-[9px] tracking-[0.25em] uppercase mt-1">Corretor Imobiliário · Évora</p>
        </div>
      </div>

      {/* === Scroll indicator === */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-10 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-white/50 animate-[slideDown_1.8s_ease-in-out_infinite]" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/25">scroll</span>
      </div>
    </section>
  )
}
