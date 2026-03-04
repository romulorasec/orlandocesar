# Setup das Logomarcas - Orlando Cesar

## 📁 Estrutura de Pastas

```
/public/
├── logo/
│   ├── orlando-cesar-dark.svg        ← Logo escura (para fundo claro)
│   ├── orlando-cesar-dark.png        ← PNG alternative
│   ├── orlando-cesar-light.svg       ← Logo branca (para fundo escuro)
│   ├── orlando-cesar-light.png       ← PNG alternative
│   ├── favicon.ico                   ← Favicon do site
│   └── og-image.png                  ← Imagem para redes sociais (1200x630px)
└── images/
    ├── hero/
    ├── properties/
    └── testimonials/
```

## 🎯 Como Adicionar as Logomarcas

### Opção 1: SVG (Recomendado)
1. Exporte as logomarcas em formato SVG do seu designer
2. Salve em:
   - `/public/logo/orlando-cesar-dark.svg` (logo escura)
   - `/public/logo/orlando-cesar-light.svg` (logo branca)
3. Otimize os SVGs removendo espaços em branco e comentários

### Opção 2: PNG
1. Exporte em PNG com fundo transparente
2. Minifique usando ferramentas como TinyPNG
3. Salve em:
   - `/public/logo/orlando-cesar-dark.png` (~50-100KB)
   - `/public/logo/orlando-cesar-light.png` (~50-100KB)

## 🔧 Usando as Logomarcas no Código

### No Header (Dark Mode)
```tsx
<Image
  src="/logo/orlando-cesar-dark.svg"
  alt="Orlando Cesar - Corretor Imobiliário"
  width={150}
  height={50}
  priority
/>
```

### No Footer (Light Mode)
```tsx
<Image
  src="/logo/orlando-cesar-light.svg"
  alt="Orlando Cesar - Corretor Imobiliário"
  width={150}
  height={50}
/>
```

## 📱 Favicon

1. Crie um favicon 32x32px
2. Salve como `/public/logo/favicon.ico`
3. Será automaticamente servido pelo Next.js

## 🌐 Social Media Image (OG Image)

Para compartilhamentos em redes sociais:
- Dimensões: 1200x630px
- Inclua logo + headline principal
- Salve como `/public/logo/og-image.png`

## 📝 Tamanhos Recomendados

| Local | Dimensões | Formato |
|-------|-----------|---------|
| Header | 150x50px | SVG ou PNG |
| Footer | 150x50px | SVG ou PNG |
| Favicon | 32x32px | ICO |
| OG Image | 1200x630px | PNG |
| Hero Background | 2000x600px+ | WebP/PNG |

## 🚀 Próximas Etapas

1. ✅ Criar `/public/logo/` folder
2. ⬜ Adicionar `orlando-cesar-dark.svg`
3. ⬜ Adicionar `orlando-cesar-light.svg`
4. ⬜ Adicionar `favicon.ico`
5. ⬜ Atualizar `app/components/header.tsx` com logo real
6. ⬜ Atualizar `app/components/footer.tsx` com logo real

## 💡 Dicas

- Use `priority={true}` na imagem do logo do header (LCP optimization)
- Otimize SVGs com [SVGO](https://github.com/svg/svgo)
- Minifique PNGs com [TinyPNG](https://tinypng.com/)
- Teste com diferentes backgrounds para garantir contrast

## 🔗 Referências

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Next.js Icons & Favicon](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#favicon)
- [SVG Best Practices](https://css-tricks.com/svg-best-practices/)
