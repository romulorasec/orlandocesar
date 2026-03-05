# Documentação de Arquitetura

Esta documentação provê as bases para continuidade segura do fluxo de desenvolvimento do projeto Orlando Cesar.

## Arquitetura atual do frontend

A fundação do frontend é feita com Next.js App Router. Recentemente o projeto sofreu uma profunda factorização na homepage (`app/page.tsx`), que costumava ser um monólito extenso, para uma arquitetura baseada em **Composição de Componentes (Section-based)**.

As razões para o `page.tsx` permanecer enxuto são claras:
- **Legibilidade:** Facilita varrer visualmente a macroestrutura de conteúdo de uma página.
- **Isolamento de Erros:** Exceções não vazam facilmente de uma seção para outra.
- **Performance:** Propicia Lazy Loading (através de `next/dynamic`) cirúrgico para seções não críticas.

Cada bloco lógico agora mora no diretório `components/sections/` de forma independente.

## Estrutura de componentes

- **`components/ui/`**: Mantém as primitivas do sistema (shadcn/ui e genéricos). Eles são agnósticos em relação ao contexto da página: não carregam regras de negócios, apenas interface (ex: `Button`, `Badge`).
- **`components/sections/`**: Engloba estruturas de alto nível (ex: cronograma de processo, painel de validação de clientes). Componentes visuais ricos com dependência estrita do contexto ou domínio.
- **Barrel exports (`index.ts`)**: Presentes na pasta `components/sections/`, agem como pontos centrais de exportação, o que encurta e simplifica importações no `page.tsx` (`import { HeroSection } from '@/components/sections'`).

## Papel do `page.tsx`

O arquivo `app/page.tsx` assume papel exclusivo de **orquestrador/compositor**. 
- Apenas importa e sequencia as seções.
- Coordena estratégias de performance (SSR configurados para dynamic imports).
- Absolutamente **não deve** concentrar blocos gigantes de marcação HTML nem lógicas pesadas. Qualquer crescimento acentuado desse arquivo significa que a convenção está sendo quebrada.

## Dados centralizados

Textos longos, listas, FAQs e descritivos em geral foram movidos para `lib/constants` (como o `lib/constants/home-data.ts`).
- **Por que mover?** Limpa as templates React da poluição visual e evita verbosidade desnecessária nos componentes da "section". Facilita a alteração por editores ou clientes.
- **Quando usar?** Use "constants" sempre que você tiver arrays de dados (map/loop lists) para renderizar, como as etapas de um processo ou os cartões de recomendação.
- **Quando não usar?** Micro-cópias muito pontuais (como um label de botão simples em um Hero) podem residir nativamente no JSX se não forem iteradas/repetidas.

## Decisões arquiteturais fundamentais

1. **Homepage dividida em seções independentes**: Refatoração concluída para evitar monólitos de marcação; melhora absurdamente manutenibilidade.
2. **Dados centralizados via dicionários em Constants**: Aumenta manutenibilidade futura do copy.
3. **Pilar de Lazy-loading Next.js**: Uso seletivo de `next/dynamic` onde se retém o LCP (Hero = importação natural) e adia chunks para as partes secundárias (Below-the-fold = Dynamic SSR loading: null).
4. **Arquitetura modular de componentes**: Separação total de responsabilidades em `ui` genérico e `sections` acopladas a negócio.