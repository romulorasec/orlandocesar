'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const steps = [
    {
      num: '01',
      title: 'Avaliação',
      desc: 'Análise do imóvel, do mercado e definição do valor justo — com dados reais, não intuição.',
    },
    {
      num: '02',
      title: 'Estratégia',
      desc: 'Plano personalizado com cronograma, custos detalhados e metas claras para a venda.',
    },
    {
      num: '03',
      title: 'Marketing',
      desc: 'Fotografias profissionais, anúncios estratégicos e acesso à rede activa de compradores.',
    },
    {
      num: '04',
      title: 'Visitas',
      desc: 'Triagem rigorosa de compradores qualificados. Apenas visitas sérias, sem curiosos.',
    },
    {
      num: '05',
      title: 'Fechamento',
      desc: 'Negociação transparente, documentação tratada. Você recebe o valor justo pelo seu imóvel.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Full-bleed portrait, conteúdo sobreposto à direita
          Gradiente cinemático multicamada + Ken Burns
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[720px] overflow-hidden">

        {/* Full-bleed photo — Ken Burns cinematic zoom */}
        <Image
          src="/orlando-cesar-2560x1440.png"
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

      {/* ═══════════════════════════════════════════════════════════════
          MANIFESTO — Bicolor split: dark conviction + light resolution
      ═══════════════════════════════════════════════════════════════ */}
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
              {[
                {
                  num: '01',
                  title: 'Empatia',
                  desc: 'Incerteza, desconfiança, estresse — entendo exactamente o que está a sentir e como resolver.',
                },
                {
                  num: '02',
                  title: 'Competência',
                  desc: 'Experiência em vendas e mercado financeiro aplicada directamente ao imobiliário.',
                },
                {
                  num: '03',
                  title: 'Transparência',
                  desc: 'Cada etapa explicada. Cada custo detalhado. Sem letras miúdas, sem surpresas.',
                },
              ].map((item, i) => (
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

      {/* ═══════════════════════════════════════════════════════════════
          PROCESSO — Cinematic timeline editorial
      ═══════════════════════════════════════════════════════════════ */}
      <section id="processo" className="relative py-36 px-8 sm:px-12 lg:px-20 bg-primary text-primary-foreground overflow-hidden">

        {/* Fine grid texture — premium editorial depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Lime radial glow — atmospheric top-right */}
        <div
          className="absolute top-0 right-0 w-[900px] h-[700px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 85% 0%, rgba(177,225,88,0.07) 0%, transparent 58%)',
          }}
        />

        {/* Deep vignette — bottom atmosphere */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none bg-gradient-to-t from-black/15 to-transparent" />

        <div className="relative max-w-7xl mx-auto">

          {/* ── Section Header ───────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] items-end gap-12 mb-28">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 h-px bg-secondary" />
                <span className="text-[9px] uppercase tracking-[0.45em] text-primary-foreground/30 font-semibold">
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
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          O QUE ESPERAR — Light editorial: credibilidade + promessas
      ═══════════════════════════════════════════════════════════════ */}
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
              {[
                { val: '100%', label: 'Transparência', sub: 'cada custo por escrito' },
                { val: '48h', label: 'Tempo de resposta', sub: 'análise detalhada' },
                { val: '5', label: 'Passos claros', sub: 'processo documentado' },
                { val: 'AMI', label: 'Licença profissional', sub: 'activa e certificada' },
              ].map((m, i) => (
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
              {[
                {
                  num: '01',
                  title: 'Resposta em 24 horas',
                  pain: 'Nunca fica sem saber o que se passa',
                  desc: 'Após o primeiro contacto, Orlando responde com uma análise detalhada da sua situação — não uma mensagem automática. Cada pergunta recebe uma resposta real, de pessoa para pessoa, no prazo de um dia útil.',
                  tag: 'Análise inicial escrita',
                },
                {
                  num: '02',
                  title: 'Relatório de mercado real',
                  pain: 'Dados concretos, não estimativas vagas',
                  desc: 'Recebe um relatório com comparáveis reais dos últimos 6 meses na sua zona específica — não médias nacionais. Cada número é verificável e explicado linha por linha, para que possa tomar uma decisão informada.',
                  tag: 'Relatório PDF com fontes',
                },
                {
                  num: '03',
                  title: 'Update semanal garantido',
                  pain: 'Sem semanas de silêncio ou incerteza',
                  desc: 'Toda semana: número de visualizações, feedbacks directos das visitas e os ajustes de estratégia previstos. Sempre em dia fixo, sempre por escrito — nunca precisa de perguntar para saber o estado da venda.',
                  tag: 'Resumo semanal em PDF',
                },
                {
                  num: '04',
                  title: 'Transparência total de custos',
                  pain: 'Zero surpresas no momento do fecho',
                  desc: 'Cada comissão, cada custo, cada prazo — detalhados por escrito antes de assinar qualquer documento. Sem cláusulas ambíguas, sem valores que aparecem apenas no final quando já não há margem de manobra.',
                  tag: 'Proposta detalhada escrita',
                },
              ].map((item, i) => (
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
                "
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

      {/* ═══════════════════════════════════════════════════════════════
          HISTÓRIAS REAIS — Social proof editorial · Light warm
      ═══════════════════════════════════════════════════════════════ */}
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
              {[
                {
                  quote: 'Tínhamos a casa parada há 8 meses com outro corretor. O Orlando explicou exactamente o que ia fazer, cumpriu cada prazo e vendeu em 6 semanas. Pela primeira vez, sentimos controlo sobre a venda.',
                  name: 'Ana & Miguel R.',
                  property: 'Moradia T3',
                  location: 'Évora Centro',
                  metric: '42',
                  metricLabel: 'dias até venda',
                },
                {
                  quote: 'O que mais nos impressionou foi a transparência. Sabíamos exactamente onde estava o processo, quanto custava e porquê. Pela primeira vez, sentimos que alguém estava genuinamente do nosso lado.',
                  name: 'Família Esteves',
                  property: 'Apartamento T2',
                  location: 'Montemor-o-Novo',
                  metric: '101%',
                  metricLabel: 'do valor pedido',
                },
                {
                  quote: 'Herdei uma propriedade e não fazia ideia por onde começar. O Orlando tratou de tudo — desde a avaliação até à escritura. Só tive de assinar. Zero stress.',
                  name: 'Dr. Henrique Lopes',
                  property: 'Herdade',
                  location: 'Alentejo',
                  metric: '67',
                  metricLabel: 'dias · processo completo',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group relative border-t border-border/35 ${i > 0 ? 'md:border-l md:border-l-border/35' : ''} py-14 px-10 cursor-default overflow-hidden`}
                >
                  {/* Lime reveal top line */}
                  <div className="absolute top-[-1px] left-0 h-[2px] w-20 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                  <div className="relative">

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
                      <span className="text-[1.1rem] font-bold text-foreground/65 group-hover:text-foreground transition-colors duration-200 leading-none">
                        {item.metric}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-muted-foreground/50 group-hover:text-foreground/55 transition-colors duration-200">
                        {item.metricLabel}
                      </span>
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

      {/* ═══════════════════════════════════════════════════════════════
          CTA FINAL — Cinematic dark, editorial split CTA
      ═══════════════════════════════════════════════════════════════ */}
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
                {[
                  'Análise do imóvel com dados reais',
                  'Relatório escrito em 48 horas',
                  'Sem pressão para avançar',
                ].map((line, i) => (
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
    </div>
  )
}
