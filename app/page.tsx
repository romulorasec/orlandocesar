import {
  HeroSection,
  ManifestoSection,
  ProcessoSection,
  PromiseCardsSection,
  TestimonialsSection,
  CTAFinalSection,
} from '@/components/sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ManifestoSection />
      <ProcessoSection />
      <PromiseCardsSection />
      <TestimonialsSection />
      <CTAFinalSection />
    </div>
  )
}
