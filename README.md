# Orlando Cesar — Design System & Website

Design system e website profissional para Orlando Cesar, corretor imobiliário em Évora e Alentejo, Portugal.

## Stack

- **Next.js 16** · React 19 · TypeScript
- **Tailwind CSS 4** · CSS Variables · Design Tokens
- **shadcn/ui** · Radix UI · CVA (class-variance-authority)
- **DM Sans** — tipografia humanista optimizada para ecrãs

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de produção
```

## Estrutura

```
app/
├── page.tsx                    Homepage
├── globals.css                 Design tokens (cores, tipografia, sombras)
├── layout.tsx                  Root layout (DM Sans, Header, Footer)
├── components/                 Header, Footer
└── styleguide/                 Documentação visual interactiva
    ├── page.tsx                Tokens overview
    └── components/             Showcase de cada componente

components/ui/                  Componentes reutilizáveis do design system
```

## Style Guide

Acesse `/styleguide` para visualizar todos os tokens e componentes:

- **Foundation** — Cores, tipografia, sombras, spacing, border radius
- **Forms** — Input, Checkbox, Radio, Toggle
- **Data Display** — Button, Card, Badge
- **Feedback** — Alert, Tooltip

## Design Tokens

Todos definidos como CSS variables em `globals.css`:

| Token | Light | Dark |
|-------|-------|------|
| Primary | `#3B588A` | `#537BA1` |
| Secondary | `#B1E158` | `#D4E886` |
| Accent | `#537BA1` | `#6B8DB8` |

7 níveis de sombra · 15 tons de cinza · Suporte completo a dark mode
