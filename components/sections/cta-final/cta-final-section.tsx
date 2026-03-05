'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CTA_PROMISES } from '@/lib/constants/home-data'

export function CTAFinalSection() {
  return (
    <section className="relative py-36 px-8 sm:px-12 lg:px-20 bg-[#0A0D0F] overflow-hidden">
      {/* Cinematic gradient layers */}
      {/* 1 — radial blue glow, left anchor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 10% 50%, rgba(59,88,138,0.35) 0%, transparent 65%)',
        }}
      />
      {/* 2 — lime shimmer, top-right corner */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(177,225,88,0.08) 0%, transparent 55%)',
        }}
      />
      {/* 3 — subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_480px] items-center gap-0">
          {/* Left — statement */}
          <div className="lg:pr-24 pb-16 lg:pb-0">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-5 h-px bg-secondary/40" />
              <span className="text-[9px] uppercase tracking-[0.45em] text-white/20 font-semibold">
                Próximo Passo
              </span>
            </div>

            <h2 className="display-2 text-white leading-[1.03] mb-10">
              Pronto para vender<br />
              com<br />
              <span className="text-secondary">tranquilidade?</span>
            </h2>

            <div className="w-10 h-px bg-white/10 mb-10" />

            <p className="body-lg text-white/30 font-light leading-[1.75] max-w-[38ch]">
              Sem pressão. Sem compromisso.<br />
              Apenas uma conversa honesta sobre o seu imóvel.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-white/[0.06] self-stretch" />

          {/* Right — CTA block */}
          <div className="lg:pl-24">
            {/* Micro-label */}
            <p className="text-[9px] uppercase tracking-[0.35em] font-semibold text-white/20 mb-10">
              Avaliação Gratuita · Sem Compromisso
            </p>

            {/* Promises list */}
            <div className="space-y-0 mb-12">
              {CTA_PROMISES.map((line, i) => (
                <div key={i} className="flex items-center gap-5 border-t border-white/[0.06] py-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50 shrink-0" />
                  <span className="body-sm text-white/35 font-light">{line}</span>
                </div>
              ))}
              <div className="border-t border-white/[0.06]" />
            </div>

            {/* Primary CTA */}
            <Link href="/avaliacao-gratuita">
              <Button
                variant="secondary"
                size="lg"
                className="w-full font-bold cursor-pointer shadow-xlarge hover:shadow-xxlarge transition-all duration-200 h-14 text-[13.5px] tracking-wide"
              >
                Começar Avaliação Gratuita
              </Button>
            </Link>

            {/* Secondary link */}
            <p className="mt-5 text-[11px] text-white/20 text-center">
              Prefere{' '}
              <Link href="/contato" className="text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors">
                enviar mensagem directa
              </Link>
              ?
            </p>
          </div>
        </div>

        {/* Bottom anchor — location stamp */}
        <div className="mt-24 pt-10 border-t border-white/[0.05] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/15 font-medium">
              Orlando Cesar · Corretor Imobiliário · Évora & Alentejo
            </p>
          </div>
          <p className="text-[9px] text-white/10 font-mono hidden sm:block">2026</p>
        </div>
      </div>
    </section>
  )
}
