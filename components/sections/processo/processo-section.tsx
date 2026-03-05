'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PROCESSO_STEPS } from '@/lib/constants/home-data'

export function ProcessoSection() {
  const steps = PROCESSO_STEPS

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* ── Dark blue radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 90% at 52% 48%, rgba(59,88,138,0.95) 0%, transparent 68%)',
        }}
      />

      {/* ── Fine dot texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Top gradient hairline ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(177,225,88,0.45) 0%, rgba(177,225,88,0.10) 32%, transparent 62%)',
        }}
      />

      <div className="relative py-40 px-8 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* ── Section Header ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] items-end gap-12 mb-20 pb-16 border-b border-primary-foreground/[0.07]">
            <div>
              {/* Micro label */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 h-px bg-secondary" />
                <span className="text-[9px] uppercase tracking-[0.45em] text-primary-foreground/22 font-semibold">
                  Como Funciona
                </span>
              </div>
              {/* Headline */}
              <h2 className="display-2 text-primary-foreground leading-[1.04]">
                Cinco passos.<br />
                <span className="text-secondary">Zero surpresas.</span>
              </h2>
            </div>
            {/* Aside descriptor */}
            <p className="body-lg text-primary-foreground/35 font-light leading-[1.8] lg:pb-1">
              Cada etapa explicada antes de acontecer — para que nunca fique sem saber o que vem a seguir.
            </p>
          </div>

          {/* ── Steps Timeline ───────────────────────────────────── */}
          <div className="relative">
            {/* Vertical thread — connects all step nodes */}
            <div
              className="absolute hidden lg:block w-px"
              style={{
                left: '25px',
                top: '56px',
                bottom: '56px',
                background:
                  'linear-gradient(to bottom, rgba(177,225,88,0.28) 0%, rgba(255,255,255,0.06) 65%, transparent 100%)',
              }}
            />

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative border-t border-primary-foreground/[0.07] py-10 lg:py-12 group"
              >
                {/* Lime accent line — slides from left on hover */}
                <div className="absolute top-[-1px] left-0 h-px w-20 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                <div className="grid grid-cols-[52px_1fr] lg:grid-cols-[52px_256px_1fr] gap-8 lg:gap-14 items-start">
                  {/* ── Node ── */}
                  <div className="relative z-10 flex-shrink-0">
                    {/* Pulse ring */}
                    <div
                      className="absolute rounded-full border border-secondary/0 group-hover:border-secondary/25 transition-all duration-500 ease-out group-hover:scale-[1.25]"
                      style={{ inset: '-8px' }}
                    />
                    {/* Circle */}
                    <div className="w-[52px] h-[52px] rounded-full border border-primary-foreground/10 group-hover:border-secondary/45 flex items-center justify-center bg-primary-foreground/[0.03] group-hover:bg-secondary/[0.07] transition-all duration-300">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-primary-foreground/30 group-hover:text-secondary transition-colors duration-300">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* ── Title (desktop) ── */}
                  <div className="hidden lg:block pt-3">
                    <h3 className="text-[11px] uppercase tracking-[0.22em] font-bold text-primary-foreground/35 group-hover:text-secondary/85 transition-colors duration-300 mb-3">
                      {step.title}
                    </h3>
                    <div className="h-px w-6 bg-secondary/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </div>

                  {/* ── Description ── */}
                  <div className="pt-0 lg:pt-2.5 relative overflow-hidden">
                    {/* Mobile title */}
                    <h3 className="lg:hidden text-[11px] uppercase tracking-[0.2em] font-bold text-primary-foreground/35 mb-3 group-hover:text-secondary/85 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Ghost number — atmospheric backdrop */}
                    <span
                      className="absolute -top-4 right-0 text-[108px] font-black leading-none select-none pointer-events-none text-primary-foreground/[0.04] group-hover:text-secondary/[0.07] transition-colors duration-500"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>

                    <p className="relative body-lg text-primary-foreground/38 font-light leading-[1.82] group-hover:text-primary-foreground/65 transition-colors duration-300 max-w-[52ch]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Closing rule */}
            <div className="border-t border-primary-foreground/[0.07]" />
          </div>

          {/* ── Footer CTA ───────────────────────────────────────── */}
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link href="/processo">
              <Button
                variant="outline"
                className="!bg-primary-foreground/[0.12] border-primary-foreground/60 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/[0.18] hover:border-primary-foreground/80 cursor-pointer transition-all duration-300 px-8"
              >
                Ver processo detalhado →
              </Button>
            </Link>
            <p className="text-[9px] uppercase tracking-[0.38em] text-primary-foreground/20">
              Avaliação gratuita · Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
