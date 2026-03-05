# Convenções de Frontend

Este guia consolida as diretrizes sintáticas, organizacionais e lógicas para manter o código saudável, independentemente se operado por Devs ou Agentes IA.

## Convenções de componentização

- **Seções Genéricas (UI)**: Componentes atômicos e abstraídos de negócios residem em `components/ui/` (botões, modais genéricos, cartões estruturais simples).
- **Seções Acopladas (Sections)**: Componentes ricos, complexos, longos, dotados de textos e lógica de negócio de página vão em `components/sections/<nome-da-secao>`.
- **Extração / Divisão**: Caso uma Section apresente mais de 250~300 linhas localizadas de pura marcação HTML intrincada e isolável, quebre as mini-estruturas nos arquivos na sua mesma pasta (p. ex: `processo-timeline-item.tsx`).
- Evite criar propriedades (`props`) dinâmicas em `ui` sem necessidades de reuso mapeado.

## Convenções de organização

- **Novas Sections**: Cada seção deve ter seu sub-diretório. Ex: se criar a seção "Sobre Nós", inicie `components/sections/about/about-section.tsx`.
- **Exportação (Barrel files)**: Para exportar a section `about`, adicione no `components/sections/about/index.ts`: `export { AboutSection } from './about-section'`. E, por conseguinte, exponha ela para a raiz do centralizador em `components/sections/index.ts`.
- **Dados Estáticos ("Copy")**: Concentrem-se em `lib/constants/`. Não hardcode blocos descritivos pesados de lista diretamente no JSX do componente Section.

## Convenções para `page.tsx`

Reforço imperativo:
- O arquivo `page.tsx` não é o lugar de inserir marcação DOM (`<div className="flex..."><h1>Título...`).
- Ele só compõe o arranjo lógico das Sections em uso estrito da tag React `<SuaSection />`.
- Mantém o arquivo como um índice imutável das responsabilidades contidas na visualização perante o usuário.

## Convenções de manutenção

- Conserve responsabilidades: UI é estético; Layouts são de enquadramento; Constants é de estocagem de array textual.
- Permaneça fiel a estrutura de `Tailwind CSS` que a paleta/design system implementou (por exemplo: usar `--primary` text classes no lugar de cores cruas `#fff`).
- Evite refatorações holísticas para além da resolução de pequenos bug-fixes quando o projeto está em maturação final.

## Convenções para colaboração com Agentes de IA

Agentes de Codificação Autônoma (como Github Copilot, Claude Code, etc) devem observar:
- Siga sempre a árvore do repositório já traçada nas instruções supra.
- Não remova diretórios ou instale dependências sem analisar e justificar explicitamente para os humanos.
- Não troque um padrão Next.js (App Router e `next/dynamic`) por implementações arcaicas que fujam de SSR (React.Lazy básico/CSR fallback sujos).
- Crie logs detalhados quando agir para um checklist de saída ser compatível. 
- Pequenos passos seguros, respeitando o tráfego regular na branch `develop`. Ao realizar as edições, sempre passe as varreduras de oitivas de teste e um `build` de integridade silencioso local.