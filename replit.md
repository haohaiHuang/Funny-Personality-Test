# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### 职场毁型人格测试 (`artifacts/workplace-quiz`)
- **Type**: React + Vite (pure frontend, no backend)
- **Preview path**: `/`
- **Description**: A dark-humored H5 mobile personality quiz app. Users answer 8 questions about workplace behavior, and the app calculates one of 8 personality archetypes (e.g., 害群之马, 甩锅宗师, 人形摆烂机).
- **Features**:
  - Landing page with dark-themed design
  - 8 swipeable quiz questions with card-style options
  - Result page with title, rank, and diagnosis text
  - Canvas-based share image generation (with share button)
  - Special combination logic (Q3B+Q4C = 开会幽灵, Q1C+Q6C = 害群之马)
  - Framer Motion animations throughout
  - Mobile-first, dark theme (black/zinc + yellow accent)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/workplace-quiz run dev` — run quiz app locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
