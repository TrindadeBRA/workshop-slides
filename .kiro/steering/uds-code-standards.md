---
inclusion: auto
---

# Padrões de Código UDS

## Code Review — Checklist de PR

- Código segue os padrões de nomenclatura UDS
- Sem código comentado ou console.log/print de debug
- Funções com no máximo 30 linhas (extrair se maior)
- Complexidade ciclomática ≤ 10 por função
- Sem duplicação de código (DRY)
- Tratamento de erros adequado (sem catch vazio)
- Tipos explícitos (sem 'any' em TypeScript)
- Imports organizados e sem imports não utilizados
- Variáveis com nomes descritivos (sem abreviações obscuras)
- Commits atômicos com mensagens seguindo Conventional Commits

## Conventional Commits

Formato: `<type>(<scope>): <description>`

Tipos: feat, fix, docs, style, refactor, perf, test, chore, ci, revert

Exemplos:
- `feat(auth): add OAuth2 login with Google`
- `fix(cart): resolve race condition on quantity update`
- `refactor(user): extract validation to shared util`

## Git Flow

- `main` — Produção (protegida, só merge via PR)
- `develop` — Integração (protegida, só merge via PR)
- `feature/<ticket-id>-<descricao>` — Features
- `fix/<ticket-id>-<descricao>` — Bug fixes
- `hotfix/<ticket-id>-<descricao>` — Hotfixes em produção
- `release/<version>` — Preparação de release

## Arquitetura

Princípios obrigatórios:
- SOLID
- Clean Architecture — dependências apontam para dentro
- DDD para domínios complexos
- CQRS quando necessário separar leitura/escrita
- Event-Driven para comunicação assíncrona entre serviços

## API Design (REST)

- Versionamento via URL: `/api/v1/resources`
- Recursos no plural: `/users`, `/orders`
- Nested resources: `/users/:id/orders`
- Query params para filtros: `?status=active&sort=-createdAt`
- Paginação cursor-based para grandes datasets
- Rate limiting com headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`
- Idempotency key para POST/PUT

## Banco de Dados

- Migrations versionadas e reversíveis
- Naming: snake_case para tabelas e colunas
- Toda tabela: id (UUID v4), created_at, updated_at
- Soft delete com deleted_at (nunca DELETE físico em dados de negócio)
- Índices em colunas usadas em WHERE, JOIN e ORDER BY
- Transações para operações multi-tabela

## Error Handling

- try/catch em todo async/await
- Wrapper para controllers: `asyncHandler(fn)`
- Timeout em chamadas externas (default: 10s)
- Retry com exponential backoff para erros transientes (429, 503)
- Exceções customizadas: AppError (base) → ValidationError (400), AuthenticationError (401), AuthorizationError (403), NotFoundError (404), ConflictError (409), ExternalServiceError (502)
- Middleware global: logar erro completo internamente, retornar mensagem segura ao cliente

## Logging

Formato JSON estruturado com campos: timestamp (ISO 8601), level, message, service, correlationId, userId, context, error (stack trace apenas para level error).

Níveis:
- ERROR — Falha que requer ação imediata
- WARN — Situação inesperada mas recuperável
- INFO — Eventos de negócio significativos
- DEBUG — Informações para debugging (desabilitado em produção)

Nunca logar: senhas, tokens, API keys, dados pessoais (CPF, cartão), request/response bodies completos.
