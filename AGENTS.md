# AGENTS.md - Developer Guide for HonorOfKings-Hero-Counters

This file provides guidance for AI agents working in this repository.

## Project Overview

- **Type**: React 19 + TypeScript web application
- **Build Tool**: Vite 7
- **UI Framework**: Radix UI + TailwindCSS
- **Data Visualization**: D3.js 7
- **Deployment**: GitHub Pages

## Available Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:5173 (with --host for mobile access)
npm run build            # Production build (TypeScript + Vite)
npm run preview          # Preview production build
npm run lint             # Run ESLint on all files

# Deployment
npm run build            # Build the project
npm run deploy           # Deploy dist/ to GitHub Pages
npm run build:deploy     # Build and deploy in one command
```

**Note**: This project does not include a test framework.

## TypeScript Configuration

The project uses strict TypeScript settings. Key options in `tsconfig.app.json`:

- `strict: true` - Full type checking enabled
- `noUnusedLocals: true` - Error on unused local variables
- `noUnusedParameters: true` - Error on unused function parameters
- `verbatimModuleSyntax: true` - Requires explicit type imports
- `noEmit: true` - TypeScript only checks, does not emit files

**IMPORTANT**: Never suppress type errors with `as any`, `@ts-ignore`, or `@ts-expect-error`.

## Import Guidelines

### Path Aliases
Use `@/` for imports from the `src/` directory:

```typescript
// Correct
import { Button } from '@/components/ui/button';
import { heroes } from '@/data/heroData';
import { cn } from '@/lib/utils';

// Avoid
import { Button } from '../components/ui/button';
```

### Import Order
Organize imports in groups (separate with blank lines):

1. External libraries (React, D3, Radix UI)
2. Internal components (@/components/...)
3. Data imports (@/data/...)
4. Utilities (@/lib/, @/hooks/, @/i18n/)
5. Type imports (use `type` keyword)

```typescript
import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { Badge } from '@/components/ui/badge';
import { heroes } from '@/data/heroData';
import { useI18n } from '@/i18n';
import type { Language } from '@/i18n';
```

## Type Annotations

Always use explicit type annotations. With `verbatimModuleSyntax`, use separate type imports:

```typescript
import { useState } from 'react';
import type { Language } from '@/i18n';

const [language, setLanguage] = useState<Language>('en');

interface ForceGraphProps {
  selectedRole: string | null;
  selectedHero: string | null;
  onHeroSelect: (heroId: string | null) => void;
}
```

## Naming Conventions

- **Components**: PascalCase (e.g., `ForceGraph.tsx`, `Button.tsx`)
- **Functions/variables**: camelCase (e.g., `handleCopyToClipboard`, `filteredMaps`)
- **Interfaces**: PascalCase with descriptive names (e.g., `NodeDatum`, `LinkDatum`)
- **Constants**: camelCase or UPPER_SNAKE_CASE for configuration objects

## Component Patterns

### UI Components (Radix + cva)

```typescript
export { Button, buttonVariants };

const buttonVariants = cva("...", {
  variants: {
    variant: { default: "...", destructive: "...", outline: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

### D3.js Force Graphs

```typescript
const simulationRef = useRef<d3.Simulation<NodeDatum, LinkDatum> | null>(null);

useEffect(() => {
  // Cleanup is mandatory
  return () => { simulation?.stop(); };
}, []);
```

## TailwindCSS

- Use `cn()` from `@/lib/utils` for conditional classes
- Follow custom colors in `tailwind.config.js`
- **Unit preference**: Use `rem`-based values, avoid `px` in arbitrary values

### Spacing & Sizing (Tailwind class names)
- Use **numeric values** (auto-converts to rem): `left-4`, `w-64`, `mt-8`, `p-2`
- **Avoid** arbitrary pixel values: `left-[410px]`, `w-[256px]` — use rem equivalent instead
- For non-standard sizes, use explicit rem: `left-[25.625rem]`, `w-[16rem]`

```typescript
// ✅ Good - numeric value → auto rem (4 = 1rem = 16px)
<div className="left-4 w-64 mt-8 p-2" />

// ✅ Good - arbitrary rem for non-standard values
<div className="left-[25.625rem] w-[16rem]" />

// ❌ Bad - avoid px in arbitrary values
<div className="left-[410px] w-[256px]" />
```

### CSS Files 【跨项目通用】

- Always prefer `rem` over `px` for font-size, spacing, margins, padding
- Only use `px` when dealing with border widths or properties where pixels are semantically required

```css
/* ✅ Good */
.card { padding: 1rem; margin-bottom: 0.5rem; font-size: 1.125rem; }
/* ❌ Avoid */
.card { padding: 16px; margin-bottom: 8px; font-size: 18px; }
```

## Error Handling

- Handle async operations with proper error states
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Provide fallback values for undefined data

```typescript
const hero = heroes.find(h => h.id === heroId);
const heroName = hero ? (language === 'zh' ? hero.name : hero.nameEn) : 'Unknown';

.filter((item): item is { hero: Hero; strength: number } => item.hero !== undefined)
```

## Hard Blocks

- **NEVER** use `as any`, `@ts-ignore`, `@ts-expect-error` to suppress errors
- **NEVER** leave empty catch blocks `catch(e) {}`
- **NEVER** delete failing tests to "pass" (no test framework exists)
- **NEVER** commit unless explicitly requested

## Dependency Management

### Temporary Tool Dependencies 【跨项目通用】

**临时工具依赖包（如 potrace、puppeteer 等）不要安装到项目，要安装到全局。**

- 这些包仅用于一次性任务（如图片转换、爬虫、构建工具等）
- 使用 `npm install -g <package>` 进行全局安装
- 不要在 `package.json` 的 `dependencies` 或 `devDependencies` 中添加这些包
- 使用完后可以卸载全局包：`npm uninstall -g <package>`

### Examples of Temporary Tools

- `potrace` - 图片矢量化
- `puppeteer` - 浏览器自动化
- `sharp` - 图片处理（如果仅用于一次性转换）
- `imagemin` - 图片压缩
- `svgo` - SVG 优化

### Temporary Script Files 【跨项目通用】

**临时性脚本文件（如数据抓取脚本、数据转换脚本等）都要放在 scripts/ 目录下。**

- 这些脚本仅用于一次性任务（如数据抓取、格式转换、临时修复等）
- 所有临时脚本文件都应该放在 `scripts/` 目录中
- 不要将临时脚本直接放在项目根目录
- 临时数据文件（如临时JSON数据）也应该放在 `scripts/` 目录中

## Project Structure

```
src/
├── components/
│   ├── ForceGraph.tsx      # Main D3 visualization
│   └── ui/                 # Radix UI components
├── data/
│   ├── heroData.ts         # Hero definitions, counter/synergy relations
│   ├── counterReasons.ts   # Counter explanation text
│   ├── synergyRelations.ts # Synergy partner data
│   ├── synergyReasons.ts   # Synergy explanation text
│   └── mapData.ts          # Map information
├── hooks/                  # Custom React hooks
├── i18n/                   # Internationalization (zh/en)
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
├── App.tsx                # Main application
└── main.tsx               # Entry point
```

## Key Libraries

- **React 19**: UI framework
- **Vite 7**: Build tool
- **Radix UI**: Accessible component primitives
- **TailwindCSS**: Styling
- **D3.js 7**: Force-directed graph visualization
- **Lucide React**: Icons
- **class-variance-authority**: Component variants
- **next-themes**: Theme switching

## Build Verification

After any changes, always run:
```bash
npm run build
```

Ensure the build passes (exit code 0) before considering work complete.
