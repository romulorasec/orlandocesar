# Agent Handoff / Transferência Técnica para IA ou Novos Desenvolvedores

Este documento é a "Fonte da Verdade de Operação" que todo LLM Agent (Claude Code, GitHub Copilot Workspace, Gemini, Grok, CLI) e Dev humano deve ler para interagir e operar no repositório da Orlando Cesar Application de forma segura e pragmática.

## Estado atual do projeto
- **Framework:** Next.js moderno (App Router). `app/page.tsx` é limpo e construído como um maestro orquestrador.
- **Componentes Globais:** Encontram-se em subpastas (`components/ui` genéricos e `components/sections` acopladas a lógicas e contextos complexos).
- **Conteúdo de Texto (Copy):** Descentralizado para manipulação facilitada na raiz do constants `lib/constants/home-data.ts`.
- **Estratégia de Performance (DOM):** Lazy loading modular aplicado via `next/dynamic` (SSR enabled) a seções abaixo da dobra de tela na landing page.
- **Ambientes / Deploy:** Roteado via push commit `develop` -> Preview Vercel, merge para `main` -> Produção Vercel.

## Como um agente ou desenvolvedor deve agir neste projeto
1. **Analise Antes de Codar**: Sempre cheque se a alteração requer um novo componente primitivo (`ui`), componente rico (`sections`), ou só uma nova estocagem constante num dicionário (`lib`).
2. **Preservação Arquitetural**: A inserção de conteúdo não deve sob hipótese alguma regredir injetando HTML extenso no `page.tsx` puro.
3. **Prevenção de Mudanças Amplas Injustificadas**: Não mude de UI Providers estruturais (como cor base ou Shadcn) ou adicione bibliotecas grandes sem ordens cruciais explícitas perante ineficiência do cenário atual.
4. **Respeite o Fluxo Git**: Opere estritamente via features na base temporal isolada `develop`. 

## Regras para correções estruturais e refatorações
- O que é refatorável de forma autônoma e segura? Componentes cujos corpos React ultrapassem as razoáveis ~350+ linhas. Extraia micro-lógicas em subarquivos na própria diretoria (ex: `hero-badge.tsx`).
- Nunca reverta imports dinâmicos (`lazy load`) vitais por capricho, salvo sob a diretiva de que LCP acima da linha dobrou ou falhou.

## Checklist obrigatório de saída (Outbound)
*Para garantir a rastreabilidade da comunicação, sempre que uma CLI, LLM Agent ou colega encerrar o escopo de implementações pontuadas em uma conversa/ticket, deve prover como devolução log impressa da seguinte matriz final:*

- **O que mudou**: (Pequeno resumo contextual do acréscimo / arranjo)
- **Modificações (Files)**: (Listar os endpoints e caminhos exatos dos arquivos alterados ou criados)
- **Impacto / Resultado**: (Ex: Layout shift em dispositivos x reduzido; Botão XYZ foi repaginado em paleta secundária).
- **Validação Compilação / Build**: (Indicar verificação: Build e Lint de CLI limpos/passing).
- **Branch Utilizada**: (Sempre priorizando target push final para origin/develop).
- **Hash do Commit**: (ex: `e4fa651 perf: ... ` informando ID via `git log`).
- **Deploy Triggered Context**: (Adendo de garantia de que "A atualização na cloud Preview Vercel prosseguiu").

Este guia blinda o código contra aversividades conceituais não autorizadas, unificando a linha operante para transições constantes perfeitamente.