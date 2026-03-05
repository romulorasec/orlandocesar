import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections'

// Lazy load below-the-fold sections with SSR enabled for SEO
const ManifestoSection = dynamic(
  () => import('@/components/sections').then((m) => ({ default: m.ManifestoSection })),
  { ssr: true, loading: () => null }
)

const ProcessoSection = dynamic(
  () => import('@/components/sections').then((m) => ({ default: m.ProcessoSection })),
  { ssr: true, loading: () => null }
)

const PromiseCardsSection = dynamic(
  () => import('@/components/sections').then((m) => ({ default: m.PromiseCardsSection })),
  { ssr: true, loading: () => null }
)

const TestimonialsSection = dynamic(
  () => import('@/components/sections').then((m) => ({ default: m.TestimonialsSection })),
  { ssr: true, loading: () => null }
)

const CTAFinalSection = dynamic(
  () => import('@/components/sections').then((m) => ({ default: m.CTAFinalSection })),
  { ssr: true, loading: () => null }
)

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
