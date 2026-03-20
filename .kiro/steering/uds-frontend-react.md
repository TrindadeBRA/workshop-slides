---
inclusion: auto
---

# Padrões Frontend React — UDS

## Atomic Design

- `src/components/atoms/` — Botões, inputs, labels, ícones
- `src/components/molecules/` — Grupos de atoms (SearchBar, FormField)
- `src/components/organisms/` — Seções completas (Header, Sidebar, DataTable)
- `src/components/templates/` — Layouts de página sem dados
- `src/pages/` — Páginas com dados e lógica de negócio

## Estrutura de Componente

```
ComponentName/
  index.tsx          — Componente principal
  ComponentName.test.tsx   — Testes
  ComponentName.module.scss — Estilos
  ComponentName.types.ts   — Tipos
  useComponentName.ts      — Hook local (se necessário)
```

## Padrões React

- Functional components apenas (sem class components)
- Custom hooks para lógica reutilizável (`useXxx`)
- Context API para estado global simples, Zustand/Redux para complexo
- React.memo() para componentes puros com props pesadas
- useCallback/useMemo apenas quando há problema de performance mensurável
- Suspense + lazy() para code splitting por rota
- Error Boundaries em cada seção principal

## Naming

- Componentes: PascalCase (`UserProfileCard.tsx`)
- Hooks: camelCase com prefixo use (`useUserProfile.ts`)
- Serviços: camelCase (`userService.ts`)
- Estilos: kebab-case (`user-profile-card.module.scss`)
- Tipos: PascalCase (`UserProfile.types.ts`)
- Constantes: UPPER_SNAKE_CASE (`USER_ROLES`)

## Estilização

- CSS Modules ou Styled Components. Nunca CSS global exceto reset/variables
- Design tokens centralizados em `src/styles/tokens/`
- Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Espaçamento baseado em múltiplos de 4px (4, 8, 12, 16, 24, 32, 48, 64)
- Tipografia: font-size em rem, line-height em unitless ratio
- Cores: usar variáveis CSS ou theme tokens, nunca hex hardcoded
- Z-index scale: dropdown(100), sticky(200), modal(300), toast(400), tooltip(500)

## Acessibilidade (WCAG 2.1 AA)

- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande
- Todos os inputs devem ter labels associados (htmlFor/id)
- Imagens devem ter alt text descritivo
- Navegação por teclado funcional em todos os componentes interativos
- aria-labels em botões com apenas ícone
- Focus visible em todos os elementos interativos
- Roles semânticos corretos (nav, main, aside, header, footer)

## Responsividade (Mobile-first)

- CSS Grid para layouts de página, Flexbox para alinhamento de componentes
- Imagens responsivas com srcset ou next/image
- Tabelas responsivas: card layout em mobile, tabela em desktop
- Touch targets mínimo 44x44px em mobile

## Performance Frontend

- Lighthouse score mínimo: Performance 90, Accessibility 90, Best Practices 90
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Total Blocking Time < 200ms
- Bundle size: < 200KB gzipped para JS inicial
- Code splitting por rota (lazy loading)
- Imagens: WebP/AVIF com fallback, lazy loading, srcset
- Fonts: preload, font-display: swap, subset
