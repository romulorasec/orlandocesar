'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PROMISE_CARDS, CREDIBILITY_METRICS } from '@/lib/constants/home-data'

export function PromiseCardsSection() {
  return (
    <section className="relative bg-[#FAFAF8] overflow-hidden">
      {/* Warm tint — very subtle lime↗ blue↙ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(150deg, rgba(177,225,88,0.035) 0%, transparent 38%), linear-gradient(330deg, rgba(59,88,138,0.035) 0%, transparent 42%)',
        }}
      />

      {/* Top hairline — lime entering from left */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(177,225,88,0.65) 0%, rgba(59,88,138,0.20) 32%, transparent 62%)',
        }}
      />

      {/* Fine dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.016]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Top padded content ── */}
      <div className="relative py-40 px-8 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* ── Section Header ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] items-end gap-12 mb-20 pb-16 border-b border-border/40">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 h-px bg-secondary" />
                <span className="text-[9px] uppercase tracking-[0.45em] text-muted-foreground/40 font-semibold">
                  O Que Esperar
                </span>
              </div>
              <h2 className="display-1 text-foreground leading-[1.03]">
                Compromissos claros.<br />
                Cada entregável<br />
                <span className="text-primary">por escrito.</span>
              </h2>
            </div>
            <p className="body-lg text-muted-foreground font-light leading-[1.82] max-w-[38ch] lg:pb-1">
              Não precisa confiar na nossa palavra — cada etapa gera um documento real que pode guardar, verificar e comparar com qualquer outro profissional.
            </p>
          </div>

          {/* ── Credibility strip ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-24 pb-16 border-b border-border/30">
            {CREDIBILITY_METRICS.map((m, i) => (
              <div
                key={i}
                className={`relative group py-8 ${i > 0 ? 'pl-8 lg:pl-12' : ''} ${i < 3 ? 'pr-8 lg:pr-12 border-r border-border/30' : ''}`}
              >
                {/* Lime top reveal */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                <div className="flex items-baseline gap-1.5 mb-2.5">
                  <span
                    className="font-bold text-foreground/75 leading-none group-hover:text-foreground transition-colors duration-200"
                    style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)' }}
                  >
                    {m.val}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/40 mb-1">{m.label}</p>
                <p className="text-[11.5px] text-muted-foreground/50 font-light">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* ── Promise cards 2×2 ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {PROMISE_CARDS.map((item, i) => (
              <div
                key={i}
                className={`group relative border-t border-border/35 ${i % 2 === 1 ? 'md:border-l md:border-l-border/35' : ''} py-14 px-10 cursor-default overflow-hidden`}
              >
                {/* Lime reveal top line */}
                <div className="absolute top-[-1px] left-0 h-[2px] w-24 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                {/* Ghost number — atmospheric */}
                <span
                  className="absolute -top-2 right-6 font-black leading-none select-none pointer-events-none text-foreground/[0.03] group-hover:text-secondary/[0.09] transition-colors duration-500"
                  style={{ fontSize: 'clamp(5rem, 8vw, 7.5rem)' }}
                  aria-hidden="true"
                >
                  {item.num}
                </span>

                <div className="relative">
                  {/* Step number */}
                  <span className="block text-[9px] font-bold tracking-[0.22em] text-foreground/18 group-hover:text-secondary transition-colors duration-300 font-mono mb-6">
                    {item.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-[1.15rem] font-bold text-foreground/80 mb-2.5 leading-tight group-hover:text-foreground transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Pain point label */}
                  <p className="text-[9.5px] uppercase tracking-[0.20em] font-semibold text-primary/45 mb-6 group-hover:text-primary/75 transition-colors duration-200">
                    {item.pain}
                  </p>

                  {/* Micro rule */}
                  <div className="h-px w-6 bg-border/50 mb-6 group-hover:bg-secondary/50 group-hover:w-10 transition-all duration-400" />

                  {/* Description */}
                  <p className="body-base text-muted-foreground font-light leading-[1.85] max-w-[44ch] mb-9">
                    {item.desc}
                  </p>

                  {/* Entregável pill */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/50 bg-muted/30 group-hover:border-secondary/45 group-hover:bg-secondary/[0.07] transition-all duration-300">
                    <div className="w-1 h-1 rounded-full bg-secondary/60 group-hover:bg-secondary transition-colors duration-200 shrink-0" />
                    <span className="text-[9px] uppercase tracking-[0.20em] font-semibold text-muted-foreground/55 group-hover:text-foreground/65 transition-colors duration-200">
                      Entregável · {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing border */}
          <div className="border-t border-border/35" />
        </div>
      </div>

      {/* ── Personal commitment block — full-width dark band ── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_400px]">
        {/* ══ Left: Orlando's personal guarantee ══ */}
        <div className="relative bg-[#192940] px-10 sm:px-14 lg:px-16 py-16 lg:py-20 overflow-hidden">
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 65% at 5% 80%, rgba(59,88,138,0.55) 0%, transparent 62%)' }}
          />
          {/* Lime top shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(177,225,88,0.30) 0%, rgba(177,225,88,0.08) 38%, transparent 65%)' }}
          />

          <div className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Large decorative quote mark */}
            <div
              className="shrink-0 font-black text-white/[0.07] select-none leading-none -mt-2"
              style={{ fontSize: '6rem' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div>
              <p className="text-[1.05rem] text-white/65 font-light leading-[1.88] max-w-[54ch] mb-10">
                Se em algum momento sentir que não está a receber a clareza prometida,
                diga-me directamente. Devolvo o controlo imediatamente — porque a minha
                reputação em Évora vale mais do que qualquer comissão.
              </p>

              <div className="flex items-center gap-5">
                <div className="w-px h-10 bg-white/12" />
                <div>
                  <p className="text-white/65 text-[11px] font-semibold tracking-[0.20em] uppercase">Orlando Cesar</p>
                  <p className="text-white/22 text-[9px] tracking-[0.25em] uppercase mt-0.5">Corretor Imobiliário · Évora & Alentejo · AMI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ Right: CTA block ══ */}
        <div className="relative bg-secondary px-10 sm:px-12 lg:px-14 py-16 lg:py-20 flex flex-col justify-between overflow-hidden">
          {/* Subtle dot texture on lime */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative">
            <p className="text-[9px] uppercase tracking-[0.42em] font-bold text-secondary-foreground/45 mb-4">
              Próximo Passo
            </p>
            <h3 className="text-[1.5rem] font-bold text-secondary-foreground leading-[1.2] mb-5">
              Avaliação gratuita.<br />
              Sem compromisso.
            </h3>
            <p className="body-sm text-secondary-foreground/65 font-light leading-relaxed mb-10 max-w-[28ch]">
              Recebe o relatório de mercado completo mesmo que decida não avançar com a venda.
            </p>
          </div>

          <div className="relative flex flex-col gap-3">
            <Link href="/avaliacao-gratuita">
              <Button
                className="w-full bg-secondary-foreground text-secondary font-bold cursor-pointer h-12 text-[13px] tracking-wide hover:bg-secondary-foreground/90 transition-all duration-200 shadow-medium"
              >
                Solicitar Avaliação Gratuita
              </Button>
            </Link>
            <p className="text-[9.5px] text-secondary-foreground/38 text-center font-light">
              Sem dados pessoais · Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
