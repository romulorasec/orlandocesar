'use client'

import { MANIFESTO_DIFFERENTIATORS } from '@/lib/constants/home-data'

export function ManifestoSection() {
  return (
    <section className="relative bg-[#192940] text-white overflow-hidden">
      {/* Atmospheric layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 10% 80%, rgba(59,88,138,0.55) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(177,225,88,0.35) 0%, rgba(177,225,88,0.08) 40%, transparent 70%)',
        }}
      />

      <div className="relative py-40 px-8 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Headline + Body */}
          <div className="mb-20 max-w-[65ch]">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-14">
              <div className="w-6 h-px bg-secondary/50" />
              <span className="text-[9px] uppercase tracking-[0.45em] text-white/25 font-semibold">
                Por Que Orlando
              </span>
            </div>

            {/* Large editorial quote */}
            <h2 className="display-2 text-white leading-[1.04] mb-10">
              Proprietários frustrados<br />
              merecem mais do que<br />
              <span className="text-secondary">promessas.</span>
            </h2>

            {/* Rule */}
            <div className="w-8 h-px bg-white/15 mb-10" />

            {/* Conviction text */}
            <p className="body-lg text-white/40 font-light leading-[1.8] max-w-[50ch]">
              Há meses o seu imóvel está parado. Passou por corretores que prometeram muito e entregaram pouco.
            </p>
          </div>

          {/* Differentiators Grid — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {MANIFESTO_DIFFERENTIATORS.map((item, i) => (
              <div key={i} className="group relative border-t border-white/[0.15] py-8 flex flex-col gap-4">
                {/* Lime reveal line */}
                <div className="absolute top-[-1px] left-0 h-px w-10 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                {/* Number */}
                <span className="text-[10px] font-bold tracking-[0.15em] text-white/40 group-hover:text-secondary transition-colors duration-300">
                  {item.num}
                </span>

                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/70 mb-2.5 group-hover:text-secondary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="body-sm text-white/40 font-light leading-[1.75]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Signature */}
          <div className="flex items-center gap-5 pt-12 border-t border-white/[0.1]">
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-white/60 text-[11px] font-medium tracking-[0.18em] uppercase">Orlando Cesar</p>
              <p className="text-white/20 text-[9px] tracking-[0.22em] uppercase mt-0.5">Corretor · Évora & Alentejo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
