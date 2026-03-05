# Performance e Estratégia de Lazy Loading

A estratégia de carregamento do projeto busca o balanço entre Score LCP, Interatividade e SEO Indexing rigoroso.

## Estratégia adotada

O modelo estabelecido na homepage separa os componentes em blocos Críticos vs Adiáveis. 

**Lazy Loading (`next/dynamic`) implementado em:**
- `ManifestoSection`
- `ProcessoSection`
- `PromiseCardsSection`
- `TestimonialsSection`
- `CTAFinalSection`

**Carregamento normal preservado em:**
- `Header`
- `HeroSection`
- `Footer` (quando anexado centralmente em Layout.tsx base LCP superior ou ancorado globalmente)

## Critérios de decisão

A quebra supracitada seguiu parâmetros técnicos diretos:
1. **Acima da Dobra (Above The Fold)**: A `HeroSection` consome 100% da Viewport Inicial do usuário (`h-screen`). Por ser crítica para LCP (Largest Contentful Paint), se postergada, geraria flutuações, carregamento invisível longo e penalidades pesadas de Vitals do Lighthouse. Por isso ela manteve import estático `import { HeroSection } from ...`.
2. **SEO (SSR Mandatório)**: A aplicação precisa dos conteúdos na renderização do servidor para indexação pelo Google Bot. O Lazy-load usou `{ ssr: true }` nos imports dinâmicos do Next.js sem um `<Suspense fallback/>` forçado com visuais desvinculados que gerassem CLS (Cumulative Layout Shift). O `loading: () => null` manteve a fluidez da árvore até a chegada da hidratação contínua e discreta das partes que estão muito abaixo da visão do usuário no segundo #1.
3. **JS Bundle Load Drop**: Seções densas compostas de gráficos flex, SVGs, ou listas massivas atrasam o TTI (Time to Interactive). Particionando-as em chunks menores, aliviou a carga do browser a parsear o index bruto primário.

## Padrão futuro

A decisão subjacente para criar novas seções com ou sem Code Splitting dinâmico é binária a partir das seguintes questões:
- **A Seção ficará em primeira visão ao carregar a página nos primeiros monitores (Laptop / Mobiles)?**
  - **Sim:** Use `import { NewSection } from '@/components/sections'`. Sem Lazy load.
  - **Não:** Use `import dynamic from 'next/dynamic'`. Importe usando o encapsulamento que propicia Chunks fragmentados para JS, de modo idêntico as seções Below-the-fold atuais.

## Regras Fixas
1. Priorize carregamento imediato sempre que hesitar se algo afeta negativamente Layout Shift.
2. Todo o Lazy Loading no projeto **deverá ser suportado pelo SSR do App Router** por padrão, usando estratégias que não aniquilem a descoberta das markups da Search Console (isto é: SSR ligado no Next Dynamic).