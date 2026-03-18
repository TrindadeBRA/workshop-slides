export const day2 = [
  // ===== SLIDE 1 - CAPA DIA 2 =====
  {
    title: 'Workshop Kiro — Dia 2',
    badge: 'bloco',
    badgeLabel: 'Início',
    content: [
      { type: 'h1', text: 'Workshop Kiro — Dia 2' },
      { type: 'h2', text: 'Aplicação: Troubleshooting, Testes e PR' },
      { type: 'p', text: 'Facilitador: Trindade · Tech Leader @ UDS' },
      { type: 'highlight', text: 'Hoje: caso técnico real — investigar bug, corrigir, testar e criar PR com evidência. Tudo com Steering + Hooks + Specs ativos.' },
      { type: 'quote', text: '"Ontem a gente montou a fundação — Steering, Hooks, Specs. Hoje é o dia de usar tudo junto num cenário real. Vamos investigar um bug, corrigir, escrever testes e criar uma PR completa. É o fluxo que vocês vão repetir no dia a dia."' },
    ]
  },

  // ===== SLIDE 2 - RECAP =====
  {
    title: 'Recap — Os 3 Pilares',
    badge: 'bloco',
    badgeLabel: 'Bloco 6',
    content: [
      { type: 'h2', text: 'Recap Rápido — Dia 1' },
      { type: 'quote', text: '"Antes de mergulhar no código, 2 minutos de recap. Ontem vimos os 3 pilares — hoje vamos usar todos juntos."' },
      { type: 'table', headers: ['Pilar', 'O que faz', 'Hoje'], rows: [
        ['Steering', 'Define padrões pro agente', 'Guia o fix e os testes'],
        ['Hooks', 'Guardrails automáticos', 'Valida o código ao salvar'],
        ['Specs', 'Fluxo estruturado', 'Planeja feature nova'],
      ]},
      { type: 'highlight', text: 'Fluxo do dia: Bug → Hipóteses → Fix → Testes → PR → Spec' },
    ]
  },

  // ===== SLIDE 3 - VALIDAÇÃO PRÉ-DIA 2 =====
  {
    title: 'Checklist Pré-Dia 2',
    badge: 'bloco',
    badgeLabel: 'Bloco 6',
    content: [
      { type: 'h2', text: 'Checklist — Validação Rápida' },
      { type: 'quote', text: '"Antes de começar, vamos garantir que o ambiente do Dia 1 tá funcionando. 2 minutos pra validar."' },
      { type: 'olist', items: [
        'Steering ativo — peça ao agente: "Liste os steering files ativos neste projeto"',
        'Hook disparando — abra um arquivo, faça uma alteração pequena, salve e confirme que o hook dispara',
      ]},
      { type: 'highlight', title: '⚠️ Se algo falhar:', text: 'Peça ajuda ao facilitador ou faça pair com um colega. Não siga sem o ambiente validado.' },
    ]
  },

  // ===== SLIDE 4 - CENÁRIO DO BUG =====
  {
    title: 'O Cenário — Bug de Paginação',
    badge: 'bloco',
    badgeLabel: 'Bloco 7',
    content: [
      { type: 'h1', text: 'Bloco 7 — Caso Técnico Integrado' },
      { type: 'h2', text: 'O Bug: Paginação com Itens Duplicados' },
      { type: 'quote', text: '"Imagina o seguinte: o time de QA reportou que a listagem de pedidos tá mostrando itens duplicados. O usuário vai pra página 2 e vê pedidos que já apareceram na página 1. O cliente tá reclamando. Vamos investigar."' },
      { type: 'table', headers: ['Item', 'Detalhe'], rows: [
        ['Sintoma', 'GET /api/pedidos?page=2 retorna pedidos que já apareceram na página 1'],
        ['Impacto', 'Usuário vê itens duplicados na listagem, experiência quebrada'],
        ['Módulo', 'PedidoController → PedidoService → PedidoRepository'],
        ['Como reproduzir', 'Chamar GET /api/pedidos?page=0 e page=1, comparar os resultados'],
      ]},
      { type: 'highlight', title: '🎯 Objetivo:', text: 'Seguir as 6 etapas do roteiro de troubleshooting usando o Kiro como parceiro de investigação.' },
    ]
  },

  // ===== SLIDE 5 - ETAPA 1: HIPÓTESES =====
  {
    title: 'Etapa 1 — Formulação de Hipóteses',
    badge: 'demo',
    badgeLabel: 'Etapa 1/6',
    content: [
      { type: 'h2', text: 'Etapa 1 — Formulação de Hipóteses' },
      { type: 'quote', text: '"Primeiro passo: não sair mexendo no código. Vamos formular hipóteses com o agente. Descrevam o sintoma e peçam hipóteses ordenadas por probabilidade."' },
      { type: 'h3', text: 'Prompt sugerido:' },
      { type: 'code', text: 'Estou investigando um bug: o endpoint GET /api/pedidos com paginação\nestá retornando itens duplicados entre páginas.\nO módulo afetado é #File PedidoRepository.java\nQuais são as possíveis causas? Liste hipóteses ordenadas por probabilidade.' },
      { type: 'h3', text: 'Hipóteses esperadas:' },
      { type: 'olist', items: [
        'Ordenação sem campo único — Sort por dataCriacao sem desempate por id',
        'Query sem ORDER BY estável — banco retorna ordem diferente entre chamadas',
        'Offset-based pagination com dados mutáveis — novos registros deslocam o offset',
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'Use #File para dar o arquivo afetado como contexto. O agente analisa melhor com contexto específico.' },
    ]
  },

  // ===== SLIDE 6 - ETAPA 2: EVIDÊNCIAS =====
  {
    title: 'Etapa 2 — Coleta de Evidências',
    badge: 'demo',
    badgeLabel: 'Etapa 2/6',
    content: [
      { type: 'h2', text: 'Etapa 2 — Coleta de Evidências no Código' },
      { type: 'quote', text: '"Agora que temos hipóteses, vamos coletar evidências. Peçam ao agente pra investigar cada hipótese no código."' },
      { type: 'h3', text: 'Prompt sugerido:' },
      { type: 'code', text: 'Investigue a hipótese 1: ordenação sem campo único.\nAnalise #File PedidoRepository.java e #File PedidoService.java\nprocurando como a paginação e ordenação estão implementadas.\nVerifique se o Sort usa um campo que garante ordem estável.' },
      { type: 'h3', text: 'O que o agente deve encontrar:' },
      { type: 'list', items: [
        'Repository usa Sort.by("dataCriacao") sem .and(Sort.by("id"))',
        'Vários pedidos com mesmo timestamp → ordem instável entre páginas',
        'Banco (PostgreSQL/MySQL) não garante ordem quando valores são iguais',
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'Use #Folder para investigar módulos inteiros e #Problems para ver erros que o agente pode analisar.' },
    ]
  },

  // ===== SLIDE 7 - CAUSA RAIZ =====
  {
    title: 'Causa Raiz Identificada',
    badge: 'demo',
    badgeLabel: 'Etapa 2/6',
    content: [
      { type: 'h2', text: 'Causa Raiz — Ordenação Instável' },
      { type: 'quote', text: '"Achamos. O problema é clássico: a query ordena por dataCriacao, mas vários pedidos têm o mesmo timestamp. Sem um campo de desempate (tiebreaker), o banco retorna numa ordem arbitrária — e entre uma página e outra, essa ordem muda."' },
      { type: 'code', text: '// ❌ Problema: ordenação instável\nSort sort = Sort.by(Sort.Direction.DESC, "dataCriacao");\n// Pedidos com mesmo timestamp → ordem arbitrária entre páginas\n\n// ✅ Solução: adicionar tiebreaker por id\nSort sort = Sort.by(Sort.Direction.DESC, "dataCriacao")\n              .and(Sort.by(Sort.Direction.DESC, "id"));' },
      { type: 'highlight', title: '🎯 Lição:', text: 'Sempre que paginar com ORDER BY, inclua um campo único como tiebreaker (geralmente o id). Isso garante ordem determinística entre páginas.' },
    ]
  },

  // ===== SLIDE 8 - ETAPA 3: FIX =====
  {
    title: 'Etapa 3 — Implementação do Fix',
    badge: 'demo',
    badgeLabel: 'Etapa 3/6',
    content: [
      { type: 'h2', text: 'Etapa 3 — Implementação do Fix' },
      { type: 'quote', text: '"Causa raiz identificada, agora vamos corrigir. Peçam ao agente pra implementar o fix seguindo os padrões do steering."' },
      { type: 'h3', text: 'Prompt sugerido:' },
      { type: 'code', text: 'A causa raiz do bug de paginação duplicada é a ordenação instável.\nO Sort usa apenas dataCriacao, sem tiebreaker por id.\n\nCorrija o problema em #File PedidoService.java seguindo os padrões do steering.\nGaranta que toda paginação use ordenação estável (campo único como desempate).' },
      { type: 'h3', text: 'Observe:' },
      { type: 'list', items: [
        'O agente segue os padrões do steering? (nomenclatura, arquitetura)',
        'O hook dispara ao salvar e valida o código?',
        'A correção é mínima e focada? (não refatora o mundo)',
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'Se o hook de segurança (security-pre-write) estiver ativo, ele valida a escrita automaticamente. Observe o guardrail em ação.' },
    ]
  },

  // ===== SLIDE 9 - ETAPA 4: TESTES =====
  {
    title: 'Etapa 4 — Geração de Testes',
    badge: 'demo',
    badgeLabel: 'Etapa 4/6',
    content: [
      { type: 'h2', text: 'Etapa 4 — Geração de Testes de Regressão' },
      { type: 'quote', text: '"Fix feito, agora a parte que ninguém gosta de fazer na mão: testes. Mas com o Kiro, a gente pede e ele gera seguindo os padrões do steering de testes."' },
      { type: 'h3', text: 'Prompt sugerido:' },
      { type: 'code', text: 'Gere testes para validar a correção de paginação em #File PedidoService.java:\n\n1. Teste de regressão: criar pedidos com mesmo timestamp e verificar\n   que a paginação não retorna duplicados entre páginas\n2. Teste de happy path: paginação normal com ordenação correta\n3. Teste de edge case: página vazia quando offset ultrapassa total\n\nSiga os padrões de teste do steering.' },
      { type: 'h3', text: 'Testes esperados:' },
      { type: 'list', items: [
        '✅ deve_retornarItensSemDuplicatas_quando_pedidosComMesmoTimestamp',
        '✅ deve_retornarPaginaOrdenada_quando_consultarPedidos',
        '✅ deve_retornarPaginaVazia_quando_offsetUltrapassaTotal',
      ]},
      { type: 'highlight', title: '💡 Avalie:', text: 'Os nomes seguem o padrão deve_[resultado]_quando_[condição]? Estrutura AAA? Cobriu regressão + edge case?' },
    ]
  },

  // ===== SLIDE 10 - ETAPA 5: VALIDAÇÃO =====
  {
    title: 'Etapa 5 — Execução e Validação',
    badge: 'demo',
    badgeLabel: 'Etapa 5/6',
    content: [
      { type: 'h2', text: 'Etapa 5 — Execução e Validação dos Testes' },
      { type: 'quote', text: '"Testes gerados, agora vamos rodar e ver se passam. Se algum falhar, o agente investiga e corrige."' },
      { type: 'h3', text: 'Prompt sugerido:' },
      { type: 'code', text: 'Execute os testes que criamos e mostre o resultado.' },
      { type: 'h3', text: 'Se algum teste falhar:' },
      { type: 'code', text: 'O teste [NOME] falhou com: #Terminal\nAnalise e corrija.' },
      { type: 'h3', text: 'Validação final:' },
      { type: 'code', text: 'Revise o #Git Diff e confirme que as mudanças estão corretas e completas.\nSó devem aparecer: fix no Service + testes novos.' },
      { type: 'highlight', title: '💡 Dica:', text: '#Git Diff é essencial antes de criar a PR — mostra exatamente o que mudou. Nada a mais, nada a menos.' },
    ]
  },

  // ===== SLIDE 11 - ETAPA 6: PR =====
  {
    title: 'Etapa 6 — PR com Evidência',
    badge: 'demo',
    badgeLabel: 'Etapa 6/6',
    content: [
      { type: 'h2', text: 'Etapa 6 — Criação de PR com Evidência' },
      { type: 'quote', text: '"Última etapa: criar a PR. E aqui é onde o steering de PR Standards brilha — o agente já sabe o formato que o time espera."' },
      { type: 'h3', text: 'Prompt sugerido:' },
      { type: 'code', text: 'Crie uma descrição de PR para as mudanças que fizemos.\nInclua:\n- Descrição do problema (bug de paginação duplicada)\n- Causa raiz identificada (ordenação instável)\n- Correção implementada (tiebreaker por id)\n- Testes de regressão criados\nSiga o padrão de PR do steering.' },
      { type: 'h3', text: 'A PR deve conter:' },
      { type: 'list', items: [
        'Título: [FIX] Corrigir paginação duplicada em listagem de pedidos',
        'Seção "O que foi feito" com descrição clara',
        'Seção "Por que" com causa raiz',
        'Seção "Como testar" com passos de validação',
        'Checklist do autor preenchido',
      ]},
      { type: 'highlight', title: '✅ Observe:', text: 'O formato da PR segue exatamente o steering de PR Standards que configuramos no Dia 1. Sem o steering, cada PR sairia num formato diferente.' },
    ]
  },

  // ===== SLIDE 12 - RUNBOOK =====
  {
    title: 'Runbook — Documentação do Fix',
    badge: 'bloco',
    badgeLabel: 'Bloco 7',
    content: [
      { type: 'h2', text: 'Runbook — Documentando o Fix' },
      { type: 'quote', text: '"Antes de seguir, vamos documentar o que fizemos. Isso é o Runbook — um registro que o time pode consultar se o problema voltar ou algo parecido aparecer."' },
      { type: 'h3', text: 'Peça ao agente:' },
      { type: 'code', text: 'Gere um Runbook para o bug que corrigimos, com:\n- Sintoma, causa raiz, correção aplicada\n- Testes de regressão criados\n- Referência à PR\nUse formato Markdown.' },
      { type: 'table', headers: ['Seção', 'Conteúdo'], rows: [
        ['Sintoma', 'Paginação retorna itens duplicados entre páginas'],
        ['Causa Raiz', 'Sort por dataCriacao sem tiebreaker — ordem instável'],
        ['Correção', 'Adicionado .and(Sort.by("id")) como desempate'],
        ['Testes', 'Regressão (duplicatas) + happy path + edge case (página vazia)'],
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'Runbooks são ouro pro time. Da próxima vez que alguém ver "itens duplicados na paginação", já tem o diagnóstico pronto.' },
    ]
  },

  // ===== SLIDE 13 - RETROSPECTIVA DO CASO =====
  {
    title: 'Retrospectiva — O que o Kiro fez por nós',
    badge: 'checkpoint',
    badgeLabel: 'Checkpoint',
    content: [
      { type: 'h2', text: 'Retrospectiva — 6 Etapas com o Kiro' },
      { type: 'quote', text: '"Vamos recapitular o que acabou de acontecer. Em 6 etapas, a gente foi do sintoma até a PR — e o Kiro participou de cada uma."' },
      { type: 'table', headers: ['Etapa', 'O que fizemos', 'O Kiro ajudou com'], rows: [
        ['1. Hipóteses', 'Descrevemos o sintoma', 'Listou causas prováveis ordenadas'],
        ['2. Evidências', 'Investigamos o código', 'Analisou arquivos e achou o problema'],
        ['3. Fix', 'Corrigimos a causa raiz', 'Gerou código seguindo o steering'],
        ['4. Testes', 'Criamos testes de regressão', 'Gerou testes no padrão do time'],
        ['5. Validação', 'Rodamos e validamos', 'Executou testes e revisou o diff'],
        ['6. PR', 'Criamos PR com evidência', 'Gerou descrição no formato do steering'],
      ]},
      { type: 'highlight', title: '🎯 Ponto-chave:', text: 'O Kiro não resolveu sozinho — ele foi um parceiro de investigação. Vocês direcionaram, ele executou seguindo os padrões.' },
    ]
  },

  // ===== SLIDE 14 - BLOCO 8: SPECS =====
  {
    title: 'Bloco 8 — Specs na Prática',
    badge: 'bloco',
    badgeLabel: 'Bloco 8',
    content: [
      { type: 'h1', text: 'Bloco 8 — Specs na Prática' },
      { type: 'quote', text: '"Agora que resolvemos o bug, vamos usar Specs pra planejar algo novo. Ontem eu mostrei o conceito — hoje vocês vão criar uma Spec de verdade."' },
      { type: 'h2', text: 'Cenário: Feature de Histórico de Status' },
      { type: 'p', text: 'Vamos planejar uma feature que registra o histórico de transições de status dos pedidos.' },
      { type: 'highlight', title: '📝 Contexto:', text: 'Pedidos transitam entre PENDENTE → CONFIRMADO → ENVIADO → ENTREGUE. Hoje não tem histórico — quando muda o status, perde o anterior. O cliente quer rastreabilidade.' },
    ]
  },

  // ===== SLIDE 15 - SPECS: ROTEIRO =====
  {
    title: 'Specs — Roteiro do Exercício',
    badge: 'atividade',
    badgeLabel: 'Bloco 8',
    content: [
      { type: 'h2', text: 'Exercício: Criar Spec de Histórico de Status' },
      { type: 'h3', text: 'Prompt para iniciar a Spec:' },
      { type: 'code', text: 'Crie uma Spec para: Histórico de transições de status de pedidos.\n\nContexto: Pedidos transitam entre PENDENTE → CONFIRMADO → ENVIADO → ENTREGUE.\nHoje o status é sobrescrito sem histórico. Precisamos registrar cada\ntransição com timestamp, status anterior, status novo e usuário responsável.\n\nDeve incluir:\n- Tabela de histórico (PedidoStatusHistorico)\n- Endpoint GET para consultar histórico de um pedido\n- Validação de transições válidas (não pode pular etapas)\n- Registro automático ao mudar status' },
      { type: 'h3', text: 'Roteiro:' },
      { type: 'olist', items: [
        'Abra o painel de Specs (sidebar ou Command Palette)',
        'Inicie a Spec com o prompt acima',
        'Fase Requisitos: leia, peça ajustes se necessário, aprove',
        'Fase Design: verifique se segue o steering, aprove',
        'PARE antes das Tarefas — objetivo é planejar, não implementar',
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'Use #File para referenciar arquivos existentes como padrão. Ex: #File PedidoController.java como referência de estilo.' },
    ]
  },

  // ===== SLIDE 16 - SPECS: O QUE AVALIAR =====
  {
    title: 'Specs — O que Avaliar',
    badge: 'atividade',
    badgeLabel: 'Bloco 8',
    content: [
      { type: 'h2', text: 'Avaliando a Spec' },
      { type: 'quote', text: '"Enquanto vocês trabalham na Spec, prestem atenção nesses pontos. É isso que diferencia Spec-Driven de vibe coding."' },
      { type: 'h3', text: 'Na fase de Requisitos:' },
      { type: 'list', items: [
        'O agente fez perguntas de clarificação? (bom sinal)',
        'Os requisitos cobrem os cenários que você pensou?',
        'Faltou algo? Peça pra adicionar antes de aprovar',
      ]},
      { type: 'h3', text: 'Na fase de Design:' },
      { type: 'list', items: [
        'A arquitetura segue os padrões do steering?',
        'A estrutura de pastas faz sentido pro projeto?',
        'O agente considerou a tabela de histórico e as validações?',
      ]},
      { type: 'highlight', title: '✅ Sucesso:', text: 'Conseguiu iterar nos requisitos, pedir ajustes e aprovar o design? O fluxo de Specs está funcionando.' },
    ]
  },

  // ===== SLIDE 17 - FLUXO COMPLETO =====
  {
    title: 'Fluxo Completo de Desenvolvimento',
    badge: 'bloco',
    badgeLabel: 'Resumo',
    content: [
      { type: 'h2', text: 'O Fluxo Completo — Quando Usar o Quê' },
      { type: 'quote', text: '"Agora que vocês viram tudo na prática, vamos consolidar. Quando usar cada pilar?"' },
      { type: 'table', headers: ['Situação', 'Use', 'Exemplo de hoje'], rows: [
        ['Padrões do time', 'Steering (sempre ativo)', 'Guiou o fix, testes e PR'],
        ['Validação automática', 'Hooks (ao salvar/escrever)', 'Validou código ao salvar'],
        ['Feature nova complexa', 'Spec (fluxo estruturado)', 'Histórico de status'],
        ['Bug fix, dúvida, ajuste', 'Chat (sob demanda)', 'Investigação do bug'],
      ]},
      { type: 'code', text: 'Bug reportado\n  → Chat: investigar hipóteses\n  → Chat: coletar evidências\n  → Chat: implementar fix (steering guia, hook valida)\n  → Chat: gerar testes\n  → Chat: criar PR\n\nFeature nova\n  → Spec: requisitos → design → tarefas\n  → Steering guia cada tarefa\n  → Hooks validam cada save' },
      { type: 'highlight', title: '📏 Regra prática:', text: 'Bug ou ajuste pontual → Chat. Feature com múltiplos arquivos → Spec. Steering e Hooks → sempre ativos.' },
    ]
  },

  // ===== SLIDE 18 - BLOCO 9: PLANO DE ADOÇÃO =====
  {
    title: 'Bloco 9 — Plano de Adoção',
    badge: 'bloco',
    badgeLabel: 'Bloco 9',
    content: [
      { type: 'h1', text: 'Bloco 9 — Fechamento e Plano de Adoção' },
      { type: 'quote', text: '"Último bloco. Workshop é legal, mas o que importa é o que acontece depois. Vamos montar um plano de adoção pra garantir que o Kiro vira ferramenta do dia a dia, não só do workshop."' },
      { type: 'h2', text: 'Checklist de Artefatos — 2 Dias' },
      { type: 'table', headers: ['Dia', 'Artefato', '✅'], rows: [
        ['1', 'Steering pack v1 publicado', '☐'],
        ['1', 'Pelo menos 1 hook configurado e funcional', '☐'],
        ['1', 'Código gerado com guardrails ativos', '☐'],
        ['2', 'PR com evidência criada (steering + hooks)', '☐'],
        ['2', 'Spec criada (requisitos + design)', '☐'],
      ]},
      { type: 'highlight', title: '⚠️ Se faltou algo:', text: 'Finalize nos próximos dias. Não deixe artefato incompleto — é a base pro plano de adoção.' },
    ]
  },

  // ===== SLIDE 19 - PLANO SPRINT 1 =====
  {
    title: 'Sprint 1 — Consolidação',
    badge: 'bloco',
    badgeLabel: 'Bloco 9',
    content: [
      { type: 'h2', text: 'Plano de Adoção — Sprint 1: Consolidação' },
      { type: 'quote', text: '"Sprint 1 é sobre consolidar o que aprendemos. Não precisa inventar nada novo — só usar o que já configuramos no dia a dia."' },
      { type: 'table', headers: ['Ação', 'Quem', 'Quando'], rows: [
        ['Revisar e expandir steering pack v1', 'Tech Lead', 'Fim da Sprint 1'],
        ['Configurar hooks adicionais (segurança, QA)', 'Dev referência', 'Fim da Sprint 1'],
        ['Usar chat do Kiro para pelo menos 5 tarefas', 'Todos', 'Contínuo'],
        ['Criar pelo menos 1 PR com evidência via Kiro', 'Todos', 'Fim da Sprint 1'],
      ]},
      { type: 'highlight', title: '🎯 Meta:', text: '50% do time usando o Kiro regularmente até o fim da Sprint 1.' },
    ]
  },

  // ===== SLIDE 20 - PLANO SPRINT 2 =====
  {
    title: 'Sprint 2 — Expansão',
    badge: 'bloco',
    badgeLabel: 'Bloco 9',
    content: [
      { type: 'h2', text: 'Plano de Adoção — Sprint 2: Expansão' },
      { type: 'quote', text: '"Sprint 2 é sobre expandir. O time já tá confortável com o básico — agora é hora de usar Specs pra features novas e refinar os padrões."' },
      { type: 'table', headers: ['Ação', 'Quem', 'Quando'], rows: [
        ['Usar Specs para pelo menos 1 feature nova', 'Dev referência', 'Fim da Sprint 2'],
        ['Atualizar steering com aprendizados da Sprint 1', 'Tech Lead', 'Fim da Sprint 2'],
        ['Configurar MCP servers relevantes', 'Dev referência', 'Fim da Sprint 2'],
        ['Revisar indicadores de adoção', 'Tech Lead', 'Fim da Sprint 2'],
      ]},
      { type: 'highlight', title: '🎯 Meta:', text: '80% do time usando o Kiro regularmente. Pelo menos 50% das PRs com descrição gerada pelo agente.' },
    ]
  },

  // ===== SLIDE 21 - INDICADORES =====
  {
    title: 'Indicadores de Adoção',
    badge: 'bloco',
    badgeLabel: 'Bloco 9',
    content: [
      { type: 'h2', text: 'Indicadores Mínimos de Adoção' },
      { type: 'quote', text: '"Pra saber se tá funcionando, acompanhem esses indicadores. Não precisa de dashboard complexo — uma planilha simples resolve."' },
      { type: 'table', headers: ['Indicador', 'Meta Sprint 1', 'Meta Sprint 2'], rows: [
        ['PRs com evidência via Kiro', '≥ 3', '≥ 50% das PRs'],
        ['Steering pack atualizado', '≥ 1 atualização', 'Revisão completa'],
        ['Hooks ativos no repositório', '≥ 2', '≥ 4'],
        ['Adoção pelo time', '≥ 50%', '≥ 80%'],
        ['Specs criadas', '≥ 1', '≥ 2'],
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'O indicador mais fácil de medir: contar PRs com descrição gerada pelo Kiro. Se o time tá usando pra PR, tá usando pra tudo.' },
    ]
  },

  // ===== SLIDE 22 - ENCERRAMENTO =====
  {
    title: 'Encerramento — Workshop Completo',
    badge: 'checkpoint',
    badgeLabel: 'Fim',
    content: [
      { type: 'h1', text: 'Workshop Concluído' },
      { type: 'h2', text: 'O que construímos em 2 dias:' },
      { type: 'list', items: [
        'Dia 1: Fundação — Steering, Hooks, Specs configurados e testados',
        'Dia 2: Aplicação — Bug investigado, corrigido, testado e documentado via PR',
        'Dia 2: Spec criada para feature nova com requisitos e design aprovados',
        'Plano de adoção com metas para 2 sprints',
      ]},
      { type: 'quote', text: '"O Kiro não substitui o dev — ele amplifica. Vocês continuam no controle, mas com um parceiro que segue os padrões do time, valida em tempo real e estrutura o trabalho. Usem no dia a dia, refinem os steering files, e em 2 sprints vocês vão sentir a diferença."' },
      { type: 'highlight', title: '🎉 Valeu demais!', text: 'Dúvidas? Feedback? Me chamem a qualquer momento. Bom trabalho, pessoal.' },
    ]
  },
]
