'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TESTIMONIALS } from '@/lib/constants/home-data'

export function TestimonialsSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* === Atmospheric layers === */}

      {/* 1. Subtle lime glow — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(177,225,88,0.10) 0%, transparent 60%)' }}
      />

      {/* 2. Blue tint — top-left subtle */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 10% 10%, rgba(59,88,138,0.04) 0%, transparent 55%)' }}
      />

      {/* 3. Fine dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 4. Top hairline — lime→blue gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(177,225,88,0.55) 0%, rgba(59,88,138,0.20) 32%, transparent 62%)' }}
      />

      <div className="relative py-40 px-8 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* ── Section Header ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] items-end gap-12 mb-20 pb-16 border-b border-border/40">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 h-px bg-secondary" />
                <span className="text-[9px] uppercase tracking-[0.45em] text-muted-foreground/40 font-semibold">
                  Histórias Reais
                </span>
              </div>
              <h2 className="display-1 text-foreground leading-[1.03]">
                Quem vendeu,<br />
                <span className="text-primary">recomenda.</span>
              </h2>
            </div>
            <p className="body-lg text-muted-foreground font-light leading-[1.82] max-w-[38ch] lg:pb-1">
              Proprietários reais que passaram pelo processo e hoje
              recomendam a experiência — nas suas próprias palavras.
            </p>
          </div>

          {/* ── Testimonial Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className={`group relative border-t border-border/35 ${i > 0 ? 'md:border-l md:border-l-border/35' : ''} py-14 px-10 cursor-default overflow-hidden h-full`}
              >
                {/* Lime reveal top line */}
                <div className="absolute top-[-1px] left-0 h-[2px] w-20 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                <div className="relative h-full flex flex-col">
                  {/* Large decorative quote mark */}
                  <div
                    className="font-black text-foreground/[0.05] select-none leading-none mb-6 group-hover:text-secondary/[0.12] transition-colors duration-500"
                    style={{ fontSize: '4.5rem' }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* Quote */}
                  <p className="body-base text-muted-foreground font-light leading-[1.85] mb-10 max-w-[40ch]">
                    {item.quote}
                  </p>

                  <div className="mt-auto">
                    {/* Micro rule */}
                    <div className="h-px w-6 bg-border/50 mb-8 group-hover:bg-secondary/50 group-hover:w-10 transition-all duration-400" />

                    {/* Author info */}
                    <div className="mb-8">
                      <p className="text-[11px] font-semibold text-foreground/70 mb-1">{item.name}</p>
                      <p className="text-[9.5px] text-muted-foreground/50 font-light">
                        {item.property} · {item.location}
                      </p>
                    </div>

                    {/* Result metric */}
                    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-border/50 bg-muted/30 group-hover:border-secondary/45 group-hover:bg-secondary/[0.07] transition-all duration-300">
                      <span className="text-[1.05rem] font-semibold text-foreground/60 group-hover:text-foreground/80 transition-colors duration-200 leading-none">
                        {item.metric}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-muted-foreground/50 group-hover:text-foreground/55 transition-colors duration-200">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing border */}
          <div className="border-t border-border/35" />

          {/* ── Bottom statement ── */}
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[9.5px] uppercase tracking-[0.30em] text-muted-foreground/35 font-medium max-w-[50ch]">
              Cada história é de um proprietário real em Évora e Alentejo. Nomes utilizados com autorização.
            </p>
            <Link href="/avaliacao-gratuita">
              <Button
                variant="outline"
                className="border-border/50 text-foreground/50 hover:text-foreground hover:bg-muted/50 hover:border-border cursor-pointer transition-all duration-300 px-7"
              >
                Começar a minha história →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
