---
inclusion: auto
---

# Padrões DevOps — UDS

## CI/CD Pipeline

1. Lint — Verificar formatação e regras de código
2. Typecheck — Verificar tipos (se aplicável)
3. Test — Rodar testes unitários e de integração
4. Security Scan — SAST (Snyk/SonarQube) + dependency audit
5. Build — Compilar/empacotar aplicação
6. Deploy Staging — Deploy automático em staging
7. E2E Tests — Testes end-to-end em staging
8. Deploy Production — Deploy manual (approval gate) ou automático

## Deploy Strategy

- APIs: Blue/Green ou Canary (AWS CodeDeploy, ECS)
- Frontend SPA: CDN invalidation (CloudFront + S3)
- Lambda: Versioned aliases com traffic shifting
- Mobile: Staged rollout (10% → 50% → 100%)

## Ambientes

Obrigatórios: development, staging, production
Opcionais: preview (por PR), sandbox (integração com terceiros)

## Docker

### Dockerfile

- Multi-stage build (builder + runtime)
- Imagem base oficial e slim (node:22-slim, python:3.12-slim)
- Non-root user para runtime
- COPY package*.json antes do código (cache de deps)
- npm ci --omit=dev (sem devDependencies em produção)
- .dockerignore com node_modules, .git, .env, dist
- HEALTHCHECK instruction para auto-healing

### Docker Compose (dev local)

- Todos os serviços necessários (app, db, cache, queue)
- Volumes para hot reload do código
- Networks isoladas por projeto
- Health checks em todos os serviços

## AWS

- Infrastructure as Code com CDK (TypeScript) ou Terraform
- Ambientes isolados por conta AWS ou por VPC
- Tags obrigatórias: Project, Environment, Team, CostCenter
- Least privilege para IAM roles
- Encryption at rest e in transit (KMS + TLS)
- CloudWatch alarms para métricas críticas
- Cost alerts configurados por projeto

## Variáveis de Ambiente

- `.env.example` versionado com todas as variáveis (sem valores reais)
- `.env` no `.gitignore` (nunca commitar)
- Validação de env vars no startup (fail fast)
- Tipagem com Zod, envalid ou equivalente
- Prefixos por contexto: DB_, REDIS_, AWS_, APP_, AUTH_
- Secrets via AWS Secrets Manager ou SSM Parameter Store em produção

## Project Setup Checklist

- README.md com: descrição, setup, arquitetura, deploy, contribuição
- EditorConfig para consistência entre IDEs
- Linter configurado e integrado ao CI
- Formatter configurado (Prettier, Black, etc.)
- Pre-commit hooks com Husky + lint-staged
- .env.example com todas as variáveis necessárias
- Docker Compose para ambiente local
- Makefile ou scripts npm para comandos comuns
