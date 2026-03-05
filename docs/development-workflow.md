# Fluxo de Desenvolvimento

Este guia documenta os passos operacionais para interações seguras e previsíveis com a base de código (Humano/IA CLI).

## Estratégia de branches

- **`develop`**: Ramo de origem do desenvolvimento. Todos os feature-commits, fix-commits, e trabalhos recorrentes devem parar aqui. Funciona como um ambiente constante de teste via **Preview do Vercel**.
- **`main`**: Ramo sagrado e estável de Produção. Só recepciona atualizações a partir da branch `develop`.

## Fluxo de trabalho correto

1. Assuma estar ou mude para a `develop`.
2. Programe e teste localmente.
3. Faça *commit* das mudanças na `develop` local.
4. Faça *push* (`git push origin develop`).
5. Valide a conformidade da PR / Preview provido pela Vercel assim que o build compilar na cloud.
6. Crie um Merge Request/Pull Request para a `main`, ou realize o merge manual se pertinente (`develop -> main`).
7. O merge aciona automaticamente o deploy para produção oficial da aplicação.

## Comandos Git principais (No terminal local ou prompt CLI)

**Verificar a branch atual e qual status das edições:**
```bash
git branch
git status
```

**Preparar (adicionar) e consolidar (commit) mudanças:**
```bash
git add .
# Realizar commit descritivo:
git commit -m "feat: [descrição clara do que foi feito]"
```  

**Enviar à nuvem (Branch de dev/preview):**
```bash
git push origin develop
```

**Finalizando em Produção (Merge):**
```bash
git checkout main
git merge develop
git push origin main
git checkout develop # sempre volte para a branch de preview para dar sequência
```

## Publicação em produção

A versão entrará em vigor publicamente em instantes assim que a linha do tempo da `main` receber novas inserções e ser pushed ao Vercel. Não há passo manual no painel do Vercel requerido — a integração com Github monitora a branch `main` ativamente. 
Sempre verifique o Build na sua máquina local antes de realizar Merge:
```bash
npm run build
```

## Regras de segurança

- **Proibido commit direto na `main`:** Qualquer desenvolvimento "rápido" deve invariavelmente passar por preview.
- Antes do merge, certifique-se de validar se o pacote constrói adequadamente localmente com build, evitando perdas de disponibilidade por erros de TypeScript estritos.
- Mantenha a adoção arquitetural sólida: Evite que a preguiça impulsione lógicas isoladas no `page.tsx`. Use componentização de acordo.