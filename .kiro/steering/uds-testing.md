---
inclusion: auto
---

# Padrões de Testes — UDS

## Pirâmide de Testes

Muitos unitários, alguns integração, poucos E2E.

## Cobertura

- Mínima: 80% de linhas, 70% de branches
- Unitários: toda lógica de negócio e utils
- Integração: endpoints de API, queries de banco
- E2E: fluxos críticos de negócio (login, checkout, etc.)
- Snapshot tests: apenas para componentes estáveis

## Quality Gates

| Métrica | Threshold |
|---|---|
| Code Coverage | ≥ 80% |
| Automated Tests Passing | > 98% |
| Bugs Found in ALFA vs PROD | > 90% in ALFA |
| Regression Tests | 100% Automated |
| Code Duplication | ≤ 5% |

## Ferramentas (JavaScript/TypeScript)

- Vitest ou Jest
- Testing Library
- Playwright (E2E)
- MSW (mock API)

## Boas Práticas

- AAA pattern: Arrange, Act, Assert
- Um assert por teste (quando possível)
- Mocks apenas para dependências externas (DB, APIs, filesystem)
- Factories/Fixtures para dados de teste (nunca hardcoded)
- Testes independentes (sem dependência de ordem)
- CI deve rodar testes em cada PR (blocking)
- Testes de regressão para cada bug corrigido

## Naming

```
describe('UserService')
  describe('createUser')
    it('should create user when valid data is provided')
    it('should throw ValidationError when email is invalid')
    it('should throw ConflictError when email already exists')
```

Padrão Given-When-Then para descrições.
