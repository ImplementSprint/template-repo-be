# Template Repo Backend - NestJS

Reusable NestJS backend template with strict TypeScript defaults and caller-oriented CI/CD.

## What This Template Guarantees

- TypeScript strict mode is enabled.
- JavaScript source files are disabled (`allowJs: false`).
- CI quality gates run lint, strict build, unit coverage tests, and e2e tests.
- Health endpoint is available at `GET /api/health`.
- Production-ready multi-stage Docker build is included.

## Stack

- Framework: NestJS 11
- Runtime: Node.js 20
- Language: TypeScript strict mode
- Testing: Jest + Supertest
- Linting: ESLint + TypeScript ESLint + Prettier
- CI/CD: GitHub Actions caller workflow + local fallback workflow

## Quick Start

```bash
npm install
npm run start:dev
```

Run quality checks:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:cov
npm run test:e2e
```

## Strict TypeScript Policy

This template intentionally enforces strict typing:

- `strict: true`
- `allowJs: false`
- `noImplicitAny: true`
- `noUncheckedIndexedAccess: true`
- `exactOptionalPropertyTypes: true`

If you add new features, keep controller/service contracts explicitly typed and prefer type-only imports where possible.

## CI/CD Workflows

Two workflow models are included.

1. Caller workflow: `.github/workflows/be-pipeline-caller.yml`
2. Local fallback workflow: `.github/workflows/master-pipeline-be-single.yml`

Use the caller workflow when your organization has a central orchestrator workflow repo. Use the local fallback workflow when running this template independently.

### Branches

- `test`
- `uat`
- `main`
- `backend`

### Local Fallback Pipeline Stages

1. Quality gates (lint, build, unit coverage, e2e)
2. Optional security scan (`npm audit`)
3. Optional SonarCloud analysis
4. Optional DB migration validation hook
5. Optional k6 smoke test
6. Optional deploy/promotion placeholders

## Docker

Build and run locally:

```bash
docker build -t template-repo-be-single .
docker run --rm -p 3000:3000 template-repo-be-single
```

Container healthcheck targets `http://127.0.0.1:3000/api/health`.

## Environment

Copy `.env.example` into `.env` and adjust as needed:

- `NODE_ENV`
- `PORT`
- `ENABLE_SWAGGER`

## Optional SonarCloud

`sonar-project.properties` is provided for default analysis. Set `SONAR_TOKEN` in GitHub secrets to enable Sonar stage.

## Project Structure

```text
src/
  main.ts
  app.module.ts
  app.controller.ts
  app.service.ts
  health/
    health.module.ts
    health.controller.ts
    health.service.ts
test/
  app.e2e-spec.ts
```
