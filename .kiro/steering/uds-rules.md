---
inclusion: auto
---

# Regras Gerais UDS

## Proibição de Dados Mocados

NUNCA use dados mocados, simulados, fake, placeholder ou fallback inventado. Somente permitido quando o usuário EXPRESSAMENTE solicitar.

Proibido:
- Dados de exemplo inventados
- Respostas simuladas de APIs (mock responses)
- Fallbacks com dados hardcoded quando a fonte real falha
- Stubs que retornam dados fixos
- Simular sucesso quando uma operação falhou

Obrigatório:
- Sempre buscar dados REAIS da fonte correta
- Se uma operação falhar, REPORTAR o erro real
- Se não tem dados, retornar vazio/null
- Se precisa de dados de teste, PERGUNTAR ao usuário

Exceções (somente quando o usuário pedir): dados de teste, mocks, stubs, testes unitários que precisam de mocks.

## Modo Autônomo

- NUNCA PARE até 100% concluído
- Não pergunte, não peça confirmação, não pare para feedback
- Tome decisões automaticamente, confie no julgamento técnico
- Se encontrar erro, corrija e continue
- Commits frequentes para salvar progresso
- Parar SOMENTE quando: todas tarefas concluídas, testes passando, código commitado

## Otimização de Tokens

Contexto mínimo:
- Não repita informações já mencionadas
- Respostas concisas, sem headers/bullets desnecessários em resumos

Ferramentas recomendadas:
- context-gatherer uma vez por query para codebase desconhecido
- getDiagnostics em vez de npm run lint ou tsc
- grepSearch → readFile (linhas específicas) → strReplace
- readMultipleFiles para contexto relacionado

Evitar:
- Ler arquivo inteiro para encontrar uma função
- Múltiplas chamadas readFile sequenciais
- Reescrever arquivo inteiro para mudar uma linha
- Explicações longas após cada ação
- Criar arquivos de documentação não solicitados

## Documentação Obrigatória

- README.md — Visão geral, setup, arquitetura simplificada
- CONTRIBUTING.md — Guia de contribuição, padrões de código
- CHANGELOG.md — Gerado via Conventional Commits
- ADR — Decisões arquiteturais importantes
- API Docs — OpenAPI/Swagger para REST
- Runbook — Procedimentos operacionais

Comentários no código: explicar o POR QUÊ, não o QUÊ. JSDoc/TSDoc para funções públicas. TODO com ticket: `// TODO(PROJ-123): description`.
