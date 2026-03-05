# Como adicionar nova Seção na Homepage

Este guia descreve os passos sistemáticos para criação de blocos construtivos sem causar danos ou refatorações indevidas no projeto.

## Passo a Passo Completo

### 1. Organização do Sub-Diretório
Crie uma nova pasta dentro de `components/sections`. Exemplo para uma seção extra de Custo Benefício ("Pricing"):
```bash
mkdir -p components/sections/pricing
```

### 2. Criação do Componente Visual
Construa o markup do React. Garanta o `use client` no topo da seção (se usar event listeners ou hooks locais).
Crie `components/sections/pricing/pricing-section.tsx`:
```tsx
'use client'

import { PRICING_DATA } from '@/lib/constants/home-data'

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative">
      {/* ... marcação visual estrutural aproveitando os utilitários de Tailwind ... */}
    </section>
  )
}
```

### 3. Registro do Export Individual 
Não queremos imports gigantescos. Construa o barril individual.
Crie `components/sections/pricing/index.ts`:
```ts
export { PricingSection } from './pricing-section'
```

### 4. Exposição ao Index Principal das Sections
Adicione o re-export do pricing à matriz `components/sections/index.ts`:
```ts
export * from './hero'
export * from './manifesto'
// ...
export * from './pricing' // adicione
```

### 5. Configurar Textos / Arrays em Constants Layer
Gere a matriz textual em `lib/constants/home-data.ts`:
```ts
export const PRICING_DATA = [
  { item: "Avaliação Grátis", value: "0" },
  //...
]
```

### 6. Instanciando e acoplando no `page.tsx`
Decida pautado na relevância de leitura. Uma tabela de preços (pricing) geralmente está ao pé do site e abaixo da dobra.
Portanto, devemos importá-la via *Lazy Loading* em `app/page.tsx`:
```tsx
const PricingSection = dynamic(
  () => import('@/components/sections').then((m) => ({ default: m.PricingSection })),
  { ssr: true, loading: () => null }
)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection /> {/* Normal import */}
      {/* ... outras */}
      <PricingSection /> {/* Posicionamento orquestral inferior */}
    </div>
  )
}
```

### 7. Validação e Git Workflow
1. Verifique `npm run build` na linha de comando local. Não deve haver erros Typescript ou travamentos Next Config.
2. Acione os comandos Git diários no branch `develop`:
```bash
git add .
git commit -m "feat: add pricing section architecture"
git push origin develop
```