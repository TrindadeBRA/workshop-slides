export const day1 = [
  // ===== SLIDE 1 - CAPA =====
  {
    title: 'Workshop Kiro — Dia 1',
    badge: 'bloco',
    badgeLabel: 'Início',
    content: [
      { type: 'h1', text: 'Workshop Kiro — Dia 1' },
      { type: 'h2', text: 'Fundação: Os 3 Pilares do Kiro' },
      { type: 'p', text: 'Facilitador: Trindade · Tech Leader @ UDS' },
      { type: 'highlight', text: 'Hoje: Setup + Steering + Hooks + Specs + Chat/MCP. Amanhã: caso técnico real com código, testes e PR.' },
      { type: 'quote', text: '"Os exemplos que vou mostrar hoje — steering files, hooks, padrões — são coisas que eu já implementei nas minhas equipes na UDS e que têm trazido um bom resultado no dia a dia. Não é teoria, é o que a gente já usa na prática."' },
    ]
  },

  // ===== SLIDE 2 - BLOCO 1: SETUP =====
  {
    title: 'Bloco 1 — Setup e Sanity Check',
    badge: 'bloco',
    badgeLabel: 'Bloco 1',
    content: [
      { type: 'h1', text: 'Bloco 1 — Setup e Sanity Check' },
      { type: 'p', text: 'Objetivo: Validar que todo mundo tem o ambiente funcional antes de começar.' },
      { type: 'quote', text: '"E aí pessoal, tudo certo? Eu sou o Trindade, Tech Leader aqui na UDS, e vou conduzir esse workshop com vocês. A ideia é simples: em 2 dias a gente configura o Kiro e toca alguns exemplos práticos. Hoje é o dia de fundação — vamos entender os 3 pilares do Kiro: Steering, Hooks e Specs. Amanhã a gente aplica tudo num caso técnico real, com código, testes e PR."' },
    ]
  },

  // ===== SLIDE 3 - CHECKLIST =====
  {
    title: 'Checklist de Ambiente',
    badge: 'bloco',
    badgeLabel: 'Bloco 1',
    content: [
      { type: 'h2', text: 'Checklist de Ambiente' },
      { type: 'p', text: 'Peça para todos abrirem o documento de Atividades Práticas — Bloco 1.' },
      { type: 'quote', text: '"Antes de qualquer coisa, vamos garantir que todo mundo tá com o ambiente funcionando. Abram o documento de Atividades Práticas no Bloco 1 e executem o checklist."' },
      { type: 'olist', items: [
        'Login no Kiro — nome aparece no canto',
        'Painel do Kiro visível e responsivo na IDE',
        'Repo_Piloto aberto e arquivos aparecendo no explorer',
        'Pedir ao agente: "Explique o que este arquivo faz: #File" — agente responde',
      ]},
      { type: 'highlight', title: '💡 Dica:', text: 'Se alguém travar no login, peça pra fechar e reabrir o Kiro.' },
    ]
  },

  // ===== SLIDE 4 - POWERUP UDS: O QUE É =====
  {
    title: 'PowerUP UDS — O que é',
    badge: 'bloco',
    badgeLabel: 'PowerUP UDS',
    content: [
      { type: 'h1', text: 'PowerUP UDS' },
      { type: 'h2', text: 'Kiro Power com 20 tools MCP para a UDS Tecnologia' },
      { type: 'p', text: 'Um Kiro Power que conecta o agente ao MCP Server da UDS, trazendo padrões, análise e automação direto na IDE.' },
      { type: 'table', headers: ['Categoria', 'O que oferece'], rows: [
        ['Padrões UDS', 'Código, layout, arquitetura, GitLab, CI/CD, Docker, AWS'],
        ['Análise (Bedrock)', 'Auditoria com Claude Opus (7 passes), bug hunter, feature review'],
        ['Testes', 'Estratégia, quality gates, checklist de review'],
        ['Knowledge Base', 'Busca semântica em documentos internos da UDS'],
        ['Activity Tracking', 'Registro de atividades do agente por sessão'],
        ['Utilitários', 'Health check, echo, AWS info, steering updates'],
      ]},
      { type: 'highlight', title: '🔧 Auto-Setup:', text: 'Na primeira interação, o Power cria automaticamente steerings e hooks no workspace — autonomous.md, no_mock_data.md, token_optimization.md e mcp-tools-guide.md.' },
    ]
  },

  // ===== SLIDE 5 - POWERUP UDS: INSTALAÇÃO E TOOLS =====
  {
    title: 'PowerUP UDS — Instalação e Tools',
    badge: 'bloco',
    badgeLabel: 'PowerUP UDS',
    content: [
      { type: 'h2', text: 'Instalação' },
      { type: 'table', headers: ['Método', 'Como'], rows: [
        ['Via Kiro (recomendado)', 'Powers → Install from file → selecione uds-mcp-power.zip (app.mcp.udstec.io)'],
        ['Manual', 'git clone + cd uds-mcp-power + bash setup.sh'],
        ['Sem navegador', 'bash setup.sh --legacy <email> <senha>'],
      ]},
      { type: 'highlight', title: '🔐 Autenticação OAuth 2.1:', text: 'Na primeira interação o Kiro abre o navegador. Você faz login com credenciais UDS e a API key é gerada e salva automaticamente no mcp.json.' },
      { type: 'h2', text: '20 Tools disponíveis' },
      { type: 'list', items: [
        '7 tools de padrões UDS (código, layout, GitLab, CI/CD, Docker, AWS, mock data)',
        '4 tools Bedrock: code_auditor (Opus), feature_review, bug_hunter, knowledge_documentation',
        '3 tools de testes: test_strategy_guide, test_quality_gates, test_code_review_checklist',
        '1 tool Knowledge Base: knowledge_search (busca semântica)',
        '1 tool de tracking: report_activity',
        '4 utilitários: mcp_health_check, mcp_echo, mcp_aws_info, get_steering_updates',
      ]},
      { type: 'highlight', title: '⚠️ Tools Bedrock:', text: 'code_auditor e similares não acessam o filesystem. O agente lê os arquivos, concatena no formato // === arquivo: path === e passa no campo codebase (limite ~50KB).' },
    ]
  },

  // ===== SLIDE 6 - CONTEXTO: SPEC-DRIVEN =====
  {
    title: 'Contexto: Spec-Driven Development',
    badge: 'bloco',
    badgeLabel: 'Bloco 2',
    content: [
      { type: 'h1', text: 'Bloco 2 — Os 3 Pilares do Kiro' },
      { type: 'p', text: 'Objetivo: Apresentar Steering, Hooks e Specs com demos ao vivo. Visão completa antes de praticar.' },
      { type: 'h2', text: 'Contexto: Spec-Driven Development' },
      { type: 'quote', text: '"Antes de entrar nos pilares, vou explicar o que é Spec-Driven Development. Hoje todo mundo fala de vibe coding — você abre o chat, pede pro agente e torce pra sair certo. Funciona pra coisas pequenas, mas em projeto real vira bagunça rápido."' },
      { type: 'highlight', text: 'O Kiro propõe Spec-Driven Development: em vez de "pedir e torcer", você especifica o que quer, revisa o plano, e só depois o agente implementa — passo a passo, com você no controle. É a diferença entre construir uma casa com planta e construir no improviso.' },
    ]
  },

  // ===== SLIDE 5 - CONTEXTO: KIRO + CLAUDE =====
  {
    title: 'O que é o Kiro + Modelos Claude',
    badge: 'bloco',
    badgeLabel: 'Bloco 2',
    content: [
      { type: 'h2', text: 'O que é o Kiro + Modelos Claude | Amazon/Anthropic' },
      { type: 'quote', text: '"O Kiro não é autocomplete — é um IDE com IA integrada da Amazon. Ele lê o repositório inteiro, segue os padrões que você define, e trabalha em múltiplos arquivos ao mesmo tempo."' },
      { type: 'list', items: [
        'Usa Claude da Anthropic (Amazon é maior investidor — $8bi, mas Anthropic é independente)',
        'Lê o repositório inteiro, segue padrões definidos, trabalha em múltiplos arquivos',
      ]},
      { type: 'table', headers: ['Modelo', 'Perfil', 'Uso'], rows: [
        ['Opus', 'Mais inteligente, mais caro', 'Antecipa necessidades, cria coisas extras'],
        ['Sonnet', 'Equilíbrio custo/qualidade', 'Faz exatamente o que pede, faz bem feito'],
        ['Haiku', 'Barato, menos capaz', 'Tarefas simples'],
      ]},
      { type: 'highlight', text: 'O Kiro usa Sonnet — ponto ideal pro dev do dia a dia.' },
    ]
  },

  // ===== SLIDE 6 - KIRO + CLAUDE: EXEMPLO PRÁTICO =====
  {
    title: 'Opus vs. Sonnet — Exemplo prático',
    badge: 'bloco',
    badgeLabel: 'Bloco 2',
    content: [
      { type: 'h2', text: 'Opus vs. Sonnet — Diferença na prática' },
      { type: 'quote', text: '"Pra vocês terem uma ideia da diferença: se eu pedir pro Opus \'crie um blog com posts, autores e categorias\', ele vai criar páginas de Authors e Categories sozinho — antecipa necessidades que eu nem pedi. O Sonnet é mais direto, faz exatamente o que você pede, mas faz bem feito. Pro dia a dia de desenvolvimento, o Sonnet é perfeito."' },
      { type: 'p', text: 'Agora vamos ver como o Kiro organiza esse poder através dos 3 pilares.' },
    ]
  },

  // ===== SLIDE 7 - PILAR 1: STEERING =====
  {
    title: 'Pilar 1: Steering',
    badge: 'bloco',
    badgeLabel: 'Pilar 1',
    content: [
      { type: 'h1', text: 'Pilar 1: Steering' },
      { type: 'quote', text: '"O primeiro pilar é o Steering. Imagina que você contratou um pedreiro muito bom, mas ele nunca trabalhou na sua obra. Se você não passar a planta, ele vai levantar parede do jeito dele — funciona, mas não é do jeito que você quer."' },
      { type: 'p', text: 'O Steering é a planta que você entrega pro agente: nomenclatura, estrutura de pastas, tratamento de erro. Com isso, ele gera código seguindo os padrões do time, não os dele.' },
      { type: 'highlight', title: '📝 Tradução:', text: '"Steering" = Direcionamento. São arquivos Markdown que direcionam o comportamento do agente. Para quem conhece o Cursor: é o equivalente às Rules.' },
    ]
  },

  // ===== SLIDE 8 - STEERING: DETALHES =====
  {
    title: 'Steering — Como funciona',
    badge: 'bloco',
    badgeLabel: 'Pilar 1',
    content: [
      { type: 'h2', text: 'Steering — Como funciona' },
      { type: 'list', items: [
        'São arquivos Markdown que dão contexto ao agente',
        'Ficam em .kiro/steering/',
        'Mostrar template: abrir steering_off/steering-template.md e explicar estrutura (front matter, seções)',
      ]},
      { type: 'h3', text: 'Modos de inclusão:' },
      { type: 'table', headers: ['Modo', 'Quando ativa', 'Exemplo'], rows: [
        ['auto', 'Sempre ativo', 'Padrões gerais, segurança'],
        ['fileMatch', 'Por tipo de arquivo', '**/*.java → padrões Java'],
        ['manual', 'Via # no chat', 'Chamado sob demanda'],
      ]},
      { type: 'highlight', title: '⚠️ Importante:', text: 'NÃO colocar .kiro/ no .gitignore — os steering files devem ser versionados para o time todo usar.' },
      { type: 'p', text: 'Diferença: steering (automático) ≠ skills (ativação manual via #)' },
    ]
  },

  // ===== SLIDE 9 - STEERING: EXEMPLO REAL =====
  {
    title: 'Steering — Exemplo Real Java',
    badge: 'bloco',
    badgeLabel: 'Pilar 1',
    content: [
      { type: 'h2', text: 'Steering — Exemplo Real' },
      { type: 'p', text: 'Mostrar o steering Java com a estrutura completa:' },
      { type: 'list', items: [
        'Front matter YAML: inclusion: fileMatch, fileMatchPattern: \'**/*.java\'',
        'Nomenclatura (camelCase, pacotes)',
        'Limites (métodos, parâmetros)',
        'Arquitetura Hexagonal',
        'Bean Validation',
        'Segurança',
      ]},
      { type: 'highlight', title: '💡 Se perguntarem sobre o código Java:', text: '"Essa é uma boa pergunta pro agente — pergunta pra ele: Explica por que você usou essa abordagem aqui"' },
    ]
  },

  // ===== SLIDE 10 - DEMO STEERING: INTRO =====
  {
    title: 'Demo: Sem Steering vs. Com Steering',
    badge: 'demo',
    badgeLabel: 'Demo ao vivo',
    content: [
      { type: 'h2', text: '🎬 Demo: Sem Steering vs. Com Steering' },
      { type: 'p', text: 'Esta é a demo mais impactante. Mesmo prompt, mesmo projeto — resultados diferentes.' },
      { type: 'p', text: 'Os steering files já estão prontos na pasta steering_off/. Na hora da demo, basta renomear para steering/.' },
      { type: 'h3', text: 'Prompt da demo (mesmo para ambos):' },
      { type: 'code', text: 'Em #without-steering\n\nComplete o CRUD de pedidos criando os endpoints que faltam:\n- POST (criar pedido)\n- PUT (atualizar pedido)\n- DELETE (deletar pedido)\n\nInclua:\n- DTOs de request/response\n- Use Cases para cada operação\n- Validações apropriadas\n- Tratamento de erros\n- Documentação Swagger' },
    ]
  },

  // ===== SLIDE 11 - DEMO STEERING: ROTEIRO DETALHADO =====
  {
    title: 'Demo Steering — Roteiro Detalhado',
    badge: 'demo',
    badgeLabel: 'Demo ao vivo',
    content: [
      { type: 'h3', text: 'Passo 1 — SEM steering (modelo Auto):' },
      { type: 'olist', items: [
        'Garanta que a pasta está como steering_off/ (agente não enxerga os padrões)',
        'Selecione o modelo Auto no Kiro',
        'Execute o prompt',
        'Código vai para /api/without-steering/orders',
        'Observe: código funcional mas genérico — sem Bean Validation, sem ApiResponse padronizado, sem Hexagonal',
      ]},
      { type: 'h3', text: 'Passo 2 — COM steering (modelo Opus):' },
      { type: 'olist', items: [
        'Renomeie steering_off/ para steering/ (agente passa a enxergar os padrões)',
        'Troque o modelo para Opus',
        'Execute o MESMO prompt',
        'Código vai para /api/with-steering/orders',
        'Observe: agente segue camelCase, pacote correto, ApiResponse, Swagger',
      ]},
    ]
  },

  // ===== SLIDE 12 - DEMO STEERING: COMPARAÇÃO SWAGGER =====
  {
    title: 'Demo Steering — Comparação no Swagger',
    badge: 'demo',
    badgeLabel: 'Demo ao vivo',
    content: [
      { type: 'h3', text: 'Passo 3 — Comparar no Swagger:' },
      { type: 'p', text: 'Abra: http://localhost:8081/swagger-ui/index.html' },
      { type: 'table', headers: ['Seção', 'Endpoint', 'Gerado com'], rows: [
        ['Without Steering', '/api/without-steering/orders', 'Sem steering + modelo Auto'],
        ['With Steering', '/api/with-steering/orders', 'Com steering + modelo Opus'],
      ]},
      { type: 'p', text: 'Ambos fazem a mesma coisa (CRUD completo), mas a qualidade e aderência aos padrões é visivelmente diferente.' },
      { type: 'quote', text: '"Mesmo prompt, mesmo projeto, resultados diferentes. Sem steering com Auto, o código funciona mas é genérico. Com steering e Opus, o agente segue exatamente os padrões do time — nomenclatura, arquitetura, documentação."' },
      { type: 'highlight', title: '💡 Destaque:', text: 'Nenhum dos dois códigos ficou ruim — o Kiro já tem boas práticas por padrão. Mas com steering, ele segue exatamente os padrões do seu time.' },
    ]
  },

  // ===== SLIDE 13 - SKILLS =====
  {
    title: 'Skills — Conhecimento Sob Demanda',
    badge: 'bloco',
    badgeLabel: 'Pilar 1',
    content: [
      { type: 'h2', text: 'Skills — Conhecimento Sob Demanda' },
      { type: 'quote', text: '"Rapidamente sobre Skills. Se o Steering é a placa de trânsito que tá sempre ali na estrada, a Skill é o manual do carro que você abre só quando precisa."' },
      { type: 'list', items: [
        'Arquivos Markdown com instruções que o agente usa sob demanda',
        'Ficam em .kiro/skills/ (workspace, versionado) ou ~/.kiro/skills/ (pessoal)',
        'Ativa digitando # no chat e selecionando a skill',
        'Exemplos: guia de deploy, checklist de review, template de ADR',
      ]},
      { type: 'highlight', text: 'Steering = automático, sempre ativo. Skill = manual, só quando você chama via #.' },
    ]
  },

  // ===== SLIDE 14 - PILAR 2: HOOKS =====
  {
    title: 'Pilar 2: Hooks',
    badge: 'bloco',
    badgeLabel: 'Pilar 2',
    content: [
      { type: 'h1', text: 'Pilar 2: Hooks' },
      { type: 'quote', text: '"O segundo pilar são os Hooks. Imagina um detector de fumaça na cozinha. Você não precisa ficar olhando o fogão o tempo todo — se algo queimar, o alarme dispara sozinho. Os Hooks funcionam igual: são automações que disparam quando algo acontece na IDE. Salvou um arquivo? O hook verifica se tem problema de segurança. O agente terminou de gerar código? O hook roda os testes. Você não precisa lembrar de nada."' },
      { type: 'highlight', title: '📝 Tradução:', text: '"Hooks" = Ganchos. São automações que se conectam a eventos da IDE e disparam ações. Pra quem conhece CI/CD: é como um pipeline, mas dentro da IDE, em tempo real.' },
    ]
  },

  // ===== SLIDE 15 - HOOKS: EVENTOS E AÇÕES =====
  {
    title: 'Hooks — Eventos e Ações',
    badge: 'bloco',
    badgeLabel: 'Pilar 2',
    content: [
      { type: 'h2', text: 'Hooks — Eventos e Ações' },
      { type: 'table', headers: ['Evento', 'Quando dispara'], rows: [
        ['fileEdited', 'Ao salvar arquivo'],
        ['fileCreated', 'Ao criar arquivo'],
        ['preToolUse', 'Antes de escrever código'],
        ['agentStop', 'Quando o agente termina'],
        ['userTriggered', 'Clique manual'],
      ]},
      { type: 'h3', text: 'Tipos de ação:' },
      { type: 'list', items: [
        'askAgent — envia prompt ao agente',
        'runCommand — executa no terminal',
      ]},
      { type: 'p', text: 'Mostrar a estrutura JSON de um hook no próximo slide.' },
    ]
  },

  // ===== SLIDE 16 - HOOKS: ESTRUTURA JSON =====
  {
    title: 'Hooks — Estrutura JSON',
    badge: 'bloco',
    badgeLabel: 'Pilar 2',
    content: [
      { type: 'h2', text: 'Hooks — Estrutura de um Hook' },
      { type: 'code', text: '{\n  "name": "Complexity Check on Save",\n  "version": "1.0.0",\n  "when": {\n    "type": "fileEdited",\n    "patterns": ["**/*.java"]\n  },\n  "then": {\n    "type": "askAgent",\n    "prompt": "Analise o arquivo salvo..."\n  }\n}' },
      { type: 'list', items: [
        'when.type — qual evento dispara o hook',
        'when.patterns — quais arquivos ativam (glob pattern)',
        'then.type — askAgent ou runCommand',
        'then.prompt — o que o agente deve fazer',
      ]},
    ]
  },

  // ===== SLIDE 17 - DEMO HOOKS =====
  {
    title: 'Demo: Hook detectando SQL Injection',
    badge: 'demo',
    badgeLabel: 'Demo ao vivo',
    content: [
      { type: 'h2', text: '🎬 Demo: Hook detectando SQL Injection' },
      { type: 'h3', text: 'Roteiro:' },
      { type: 'olist', items: [
        'Abra PedidoQueryService.java (ou qualquer .java)',
        'Cole esta linha em qualquer método:',
      ]},
      { type: 'code', text: 'String query = "SELECT * FROM users WHERE name = \'" + name + "\'";' },
      { type: 'olist', items: [
        'Salve o arquivo',
        'Observe o hook java-validate-save disparando',
        'O agente aponta o problema automaticamente',
      ]},
      { type: 'quote', text: '"O hook detectou um problema de segurança automaticamente. Isso é SQL injection — o agente identificou sem vocês precisarem pedir. Imagina isso rodando no dia a dia do time, em cada save."' },
      { type: 'highlight', title: '💡 Nota:', text: 'Você não precisa explicar SQL injection em detalhes. O agente vai explicar. Deixe ele fazer o trabalho.' },
    ]
  },

  // ===== SLIDE 18 - HOOKS BOAS PRÁTICAS =====
  {
    title: 'Hooks — Boas Práticas',
    badge: 'bloco',
    badgeLabel: 'Pilar 2',
    content: [
      { type: 'h2', text: 'Hooks — Boas Práticas' },
      { type: 'list', items: [
        'Começar com poucos hooks e ir adicionando',
        'Usar patterns específicos (**/*.java, não ** para tudo)',
        'Evitar cascata (hook A → hook B → hook A)',
        'Se travar: "enabled": false no JSON do hook',
      ]},
      { type: 'highlight', title: '💡 Se perguntarem sobre criar hooks customizados:', text: '"Vocês vão fazer isso na prática nas Atividades. Por enquanto, só entendam o conceito."' },
    ]
  },

  // ===== SLIDE 19 - PILAR 3: SPECS =====
  {
    title: 'Pilar 3: Specs',
    badge: 'bloco',
    badgeLabel: 'Pilar 3',
    content: [
      { type: 'h1', text: 'Pilar 3: Specs' },
      { type: 'quote', text: '"O terceiro pilar são as Specs. Pensa na planta de um arquiteto. Ninguém constrói uma casa chegando e levantando parede — primeiro você faz a planta, define os cômodos, aprova o projeto, e só depois começa a obra por etapas. As Specs são a planta do seu código: em vez de pedir tudo de uma vez no chat e torcer pro agente acertar, você itera com ele em 3 fases — requisitos, design e tarefas. Cada fase você revisa e aprova antes de seguir."' },
      { type: 'highlight', title: '📝 Tradução:', text: '"Specs" = Especificações. Pra quem conhece metodologias ágeis: é como um refinamento técnico, mas feito direto com o agente dentro da IDE.' },
    ]
  },

  // ===== SLIDE 20 - SPECS: 3 FASES =====
  {
    title: 'Specs — As 3 Fases',
    badge: 'bloco',
    badgeLabel: 'Pilar 3',
    content: [
      { type: 'h2', text: 'As 3 Fases de uma Spec' },
      { type: 'table', headers: ['Fase', 'O quê', 'Você faz'], rows: [
        ['Requisitos 📋', 'O que construir', 'Você descreve, agente refina, você aprova'],
        ['Design 🏗️', 'Como construir', 'Agente propõe arquitetura, você revisa'],
        ['Tarefas ✅', 'Implementação', 'Agente implementa, você valida'],
      ]},
      { type: 'code', text: 'Requisitos (o quê)  →  Design (como)  →  Tarefas (implementação)\n     📋                    🏗️                    ✅\n  Você descreve        Agente propõe         Agente implementa\n  Agente refina        Você revisa           Você valida' },
    ]
  },

  // ===== SLIDE 21 - SPECS: QUANDO USAR =====
  {
    title: 'Specs — Quando usar',
    badge: 'bloco',
    badgeLabel: 'Pilar 3',
    content: [
      { type: 'h2', text: 'Quando usar Spec vs. Chat' },
      { type: 'table', headers: ['Situação', 'Use'], rows: [
        ['Feature nova, múltiplos arquivos, CRUD completo', 'Spec'],
        ['Refatoração grande, integração externa', 'Spec'],
        ['Fix de bug simples, ajuste pontual, dúvida', 'Chat'],
      ]},
      { type: 'highlight', title: '📏 Regra prática:', text: 'Vai mexer em mais de 3 arquivos? → Use Spec' },
      { type: 'highlight', title: '⚠️ Lembrete:', text: 'Rode a demo como Spec, não como vibe coding. O objetivo é mostrar o diferencial do Kiro — o fluxo estruturado. Vibe coding qualquer ferramenta faz; Spec só o Kiro tem.' },
    ]
  },

  // ===== SLIDE 22 - DEMO SPECS =====
  {
    title: 'Demo: Spec — Fluxo de Status de Pedidos',
    badge: 'demo',
    badgeLabel: 'Demo ao vivo',
    content: [
      { type: 'h2', text: '🎬 Demo: Criando uma Spec' },
      { type: 'h3', text: 'Roteiro:' },
      { type: 'olist', items: [
        'Abra o painel de Specs (sidebar ou Command Palette → "Kiro: Open Specs")',
        'Inicie uma Spec com o prompt abaixo',
        'Mostre o agente gerando requisitos e fazendo perguntas',
        'Não precisa avançar — só mostrar o fluxo',
      ]},
      { type: 'highlight', title: '📝 Prompt da demo:', text: 'Preciso adicionar um fluxo de status nos pedidos, onde eles transitam entre: PENDENTE → CONFIRMADO → ENVIADO → ENTREGUE, com regras de validação para cada transição de estado' },
      { type: 'quote', text: '"Olha como o agente estrutura o trabalho em fases. Isso evita aquele problema de pedir tudo de uma vez e o agente ir numa direção errada."' },
      { type: 'highlight', title: '💡 Nota:', text: 'Não se aprofunde demais em Specs — no Dia 2 eles vão criar uma de verdade.' },
    ]
  },

  // ===== SLIDE 23 - FLUXO COMPLETO =====
  {
    title: 'Fluxo Completo: Os 3 Pilares',
    badge: 'bloco',
    badgeLabel: 'Resumo',
    content: [
      { type: 'h2', text: 'Como os 3 Pilares se Complementam' },
      { type: 'table', headers: ['Pilar', 'Função', 'Analogia'], rows: [
        ['Steering', 'Define os padrões', 'Planta da obra'],
        ['Hooks', 'Garante que são seguidos', 'Detector de fumaça'],
        ['Specs', 'Estrutura features complexas', 'Planta do arquiteto'],
        ['Chat', 'Resolve o dia a dia', 'Conversa com o pedreiro'],
      ]},
      { type: 'quote', text: '"Steering define os padrões. Hooks garantem que são seguidos. Specs estruturam features complexas. E o chat resolve o dia a dia. Agora vamos praticar."' },
      { type: 'highlight', title: '✅ Checkpoint:', text: 'Participantes entendem os 3 pilares. Pergunte: "Alguma dúvida antes de partirmos para a prática?"' },
    ]
  },

  // ===== SLIDE 24 - AGENTE VS. SPEC =====
  {
    title: 'Agente vs. Spec — qual a diferença?',
    badge: 'bloco',
    badgeLabel: 'Resumo',
    content: [
      { type: 'h2', text: 'Agente vs. Spec — qual a diferença?' },
      { type: 'quote', text: '"Antes de seguir, vale deixar claro a diferença entre usar o agente no chat e usar uma Spec — porque isso confunde bastante no começo."' },
      { type: 'table', headers: ['', 'Agente (Chat)', 'Spec'], rows: [
        ['O que é', 'Campo de prompt com resposta direta', 'Fluxo estruturado em fases'],
        ['Quando usar', 'Tarefas pontuais, 1-2 arquivos', 'Features complexas, múltiplos arquivos'],
        ['Controle', 'Você pede e torce (vibe coding)', 'Você revisa e aprova cada fase'],
      ]},
      { type: 'p', text: 'O agente é o chat — ótimo pra tirar dúvida, corrigir bug, gerar trecho de código. A Spec é o fluxo estruturado — requisitos, design, tarefas, com você validando cada etapa.' },
      { type: 'highlight', title: '📏 Regra prática:', text: 'Cabe num prompt e mexe em 1-2 arquivos? Chat. Envolve múltiplos arquivos ou arquitetura? Spec.' },
    ]
  },

  // ===== SLIDE 25 - BLOCO 3: CHAT =====
  {
    title: 'Bloco 3 — O Chat do Kiro',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h1', text: 'Bloco 3 — O Chat do Kiro' },
      { type: 'h2', text: 'Contexto, Documentação e MCP' },
      { type: 'p', text: 'Objetivo: Mostrar que o chat vai além de perguntas simples — aceita contexto rico, consulta documentação e se conecta a ferramentas externas via MCP.' },
      { type: 'quote', text: '"Vocês já viram os 3 pilares. Agora vamos falar do chat — que é onde vocês vão passar a maior parte do tempo no dia a dia. Mas o chat do Kiro não é só um campo de texto. Ele entende contexto: você pode arrastar arquivos, referenciar pastas, mostrar erros, e até conectar ferramentas externas."' },
    ]
  },

  // ===== SLIDE 26 - CHAT: CONTEXTO =====
  {
    title: 'Chat — Referências de Contexto',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h2', text: 'Atalhos de Contexto no Chat' },
      { type: 'p', text: 'Demonstre: abra o chat, digite # e mostre as opções aparecendo.' },
      { type: 'table', headers: ['Atalho', 'O que faz'], rows: [
        ['#File', 'Referencia um arquivo específico'],
        ['#Folder', 'Referencia uma pasta inteira'],
        ['#Problems', 'Mostra erros e warnings do arquivo atual'],
        ['#Terminal', 'Mostra o output do terminal'],
        ['#Git Diff', 'Mostra as mudanças no código'],
      ]},
      { type: 'p', text: 'Também aceita arrastar imagem ou documento (PDF, DOCX) direto no chat.' },
      { type: 'quote', text: '"Isso muda a qualidade da resposta. Quando você dá contexto pro agente, ele não precisa adivinhar — ele sabe exatamente do que você tá falando."' },
    ]
  },

  // ===== SLIDE 27 - DOCUMENTAÇÃO COMO CONTEXTO =====
  {
    title: 'Documentação como Contexto',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h2', text: 'Documentação como Contexto' },
      { type: 'quote', text: '"Uma coisa que pouca gente sabe: você pode usar documentação do projeto como contexto pro agente. Tem um Swagger? Um OpenAPI spec? Um documento de arquitetura? Você referencia no chat ou no steering e o agente passa a considerar aquilo nas respostas."' },
      { type: 'list', items: [
        'Steering files e Specs aceitam referências via #[[file:caminho/do/arquivo]]',
        'OpenAPI spec, GraphQL schema, doc de arquitetura — tudo pode guiar a implementação',
        'Exemplo: referenciar o orders-api-swagger.yaml do Repo_Piloto',
      ]},
      { type: 'h3', text: 'Demo rápida:' },
      { type: 'code', text: 'Baseado neste contrato, o que falta implementar?\n#File orders-api-swagger.yaml' },
      { type: 'quote', text: '"O agente leu o contrato da API e comparou com o código. Útil pra garantir alinhamento sem conferir manualmente."' },
    ]
  },

  // ===== SLIDE 28 - MCP =====
  {
    title: 'MCP — Model Context Protocol',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h1', text: 'MCP — Model Context Protocol' },
      { type: 'quote', text: '"Agora a parte mais avançada: MCP. O Kiro sozinho já é forte, mas ele só enxerga o que tá dentro da IDE. O MCP é como dar braços extras pro agente: ele consegue acessar ferramentas externas, consultar documentação online, interagir com bancos de dados, tudo de dentro do chat."' },
      { type: 'highlight', title: '📝 Tradução:', text: 'MCP = Model Context Protocol. É um protocolo aberto que conecta o agente a ferramentas externas (servidores MCP). Pra quem conhece plugins: é como um sistema de plugins, mas padronizado.' },
      { type: 'list', items: [
        'Onde configura: .kiro/settings/mcp.json',
        'Exemplos: Documentação AWS, banco de dados, ferramentas de busca, APIs internas',
        'O comando uvx roda os servidores sem precisar instalar nada localmente',
      ]},
    ]
  },

  // ===== SLIDE 29 - MCP CONFIG =====
  {
    title: 'MCP — Configuração',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h2', text: 'MCP — Configuração' },
      { type: 'p', text: 'Abra .kiro/settings/mcp.json (ou crie se não existir)' },
      { type: 'code', text: '{\n  "mcpServers": {\n    "nome-do-servidor": {\n      "command": "uvx",\n      "args": ["pacote@latest"],\n      "disabled": false,\n      "autoApprove": []\n    }\n  }\n}' },
      { type: 'list', items: [
        'command — como roda o servidor',
        'args — qual servidor/pacote',
        'autoApprove — ferramentas que não precisam de confirmação',
      ]},
      { type: 'highlight', title: '🔒 Segurança:', text: 'Toda chamada MCP pede aprovação antes de executar, a menos que esteja no autoApprove. Controle total.' },
    ]
  },

  // ===== SLIDE 30 - MCP DEMO E EXEMPLOS =====
  {
    title: 'MCP — Demo e Exemplos',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h2', text: 'MCP — Exemplos e Demo' },
      { type: 'list', items: [
        'Documentação AWS',
        'Acesso a banco de dados',
        'Ferramentas de busca',
        'APIs internas do time',
      ]},
      { type: 'h3', text: 'Demo (se tiver MCP configurado):' },
      { type: 'olist', items: [
        'Mostre um servidor MCP ativo no painel do Kiro',
        'Faça uma pergunta que use o MCP (ex: consultar documentação)',
        'Mostre o agente pedindo permissão pra usar a ferramenta externa',
      ]},
      { type: 'highlight', title: '⚠️ Nota:', text: 'Se não tiver MCP configurado no ambiente, mostre apenas a configuração e explique o conceito. Demo ao vivo é opcional aqui.' },
      { type: 'quote', text: '"O MCP transforma o Kiro de um assistente de código num assistente conectado ao ecossistema do time. Banco de dados, documentação, APIs — tudo acessível direto do chat."' },
      { type: 'highlight', title: '✅ Checkpoint:', text: 'Até aqui — contexto no chat, documentação como referência, MCP. Alguma dúvida antes de falar sobre workspaces?' },
    ]
  },

  // ===== SLIDE 31 - WORKSPACES =====
  {
    title: 'Workspaces — Múltiplos Repositórios',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h2', text: 'Workspaces — Trabalhando com Múltiplos Repos' },
      { type: 'quote', text: '"Pra fechar o Bloco 3: o Kiro suporta multi-root workspaces. Você pode abrir mais de um repositório no mesmo workspace e o agente enxerga todos ao mesmo tempo."' },
      { type: 'list', items: [
        'O agente navega entre repos, entende dependências e faz mudanças coordenadas',
        'Cada repo pode ter seus próprios steering, hooks e MCP em .kiro/',
        'Configs MCP mescladas com precedência: config do usuário < workspace 1 < workspace 2',
      ]},
      { type: 'h3', text: 'Casos de uso:' },
      { type: 'list', items: [
        'Frontend + Backend — agente entende o contrato entre os dois',
        'Microsserviços — navegar entre serviços e manter consistência',
        'Biblioteca + App que consome — agente vê os dois lados',
        'Monorepo com múltiplos módulos — cada módulo com seus padrões',
      ]},
    ]
  },

  // ===== SLIDE 32 - WORKSPACES CONFIG =====
  {
    title: 'Workspaces — Como configurar',
    badge: 'bloco',
    badgeLabel: 'Bloco 3',
    content: [
      { type: 'h2', text: 'Workspaces — Como configurar' },
      { type: 'list', items: [
        'No Kiro/VS Code: File → Add Folder to Workspace...',
        'Ou criar um arquivo .code-workspace:',
      ]},
      { type: 'code', text: '// arquivo .code-workspace\n{\n  "folders": [\n    { "path": "./repo-frontend" },\n    { "path": "./repo-backend" }\n  ]\n}' },
      { type: 'quote', text: '"Imagina que você tem o front e o back em repos separados. Com multi-root workspace, você pede pro agente: \'Cria o endpoint no back e o hook de chamada no front\' — e ele faz nos dois repos, respeitando os padrões de cada um. Sem precisar ficar trocando de janela."' },
      { type: 'highlight', title: '💡 Se perguntarem sobre limites:', text: '"O agente enxerga todos os repos do workspace. Quanto mais contexto, melhor — mas se ficar muito grande, use #File ou #Folder pra direcionar."' },
      { type: 'highlight', title: '✅ Checkpoint:', text: 'Ficou claro como o chat vai além de só perguntar coisas?' },
    ]
  },

  // ===== SLIDE 33 - ATIVIDADES PRÁTICAS =====
  {
    title: 'Atividades Práticas',
    badge: 'atividade',
    badgeLabel: 'Prática',
    content: [
      { type: 'h1', text: 'Atividades Práticas' },
      { type: 'p', text: 'Escolha pelo menos 1 atividade para exercitar o que foi visto.' },
      { type: 'table', headers: ['Se quer exercitar...', 'Faça a'], rows: [
        ['Steering na prática', 'Atividade 1'],
        ['Hooks na prática', 'Atividade 2'],
        ['Specs na prática', 'Atividade 3'],
        ['Tudo junto', 'As 3 em ordem'],
      ]},
    ]
  },

  // ===== SLIDE 34 - ATIVIDADE 1: STEERING =====
  {
    title: 'Atividade 1 — Steering + Chat: Testes',
    badge: 'atividade',
    badgeLabel: 'Atividade 1',
    content: [
      { type: 'h2', text: 'Atividade 1 — Steering + Chat: Gerar testes seguindo padrões' },
      { type: 'h3', text: 'Passo 1: Criar steering de testes' },
      { type: 'p', text: 'Criar .kiro/steering/testing-standards.md:' },
      { type: 'code', text: '---\ninclusion: fileMatch\nfileMatchPattern: \'**/*Test.java\'\n---\n\n# Padrão de Testes\n\n## Nomenclatura\n- deve_[resultado]_quando_[condicao]\n\n## Estrutura\n- Padrão AAA: Arrange, Act, Assert\n- Comentários: // Arrange, // Act, // Assert\n\n## Cobertura obrigatória\n- Happy path\n- Entrada inválida / null\n- Caso de erro (exceção)' },
    ]
  },

  // ===== SLIDE 35 - ATIVIDADE 1 (cont) =====
  {
    title: 'Atividade 1 — Prompt e Validação',
    badge: 'atividade',
    badgeLabel: 'Atividade 1',
    content: [
      { type: 'h3', text: 'Passo 2: Pedir ao agente' },
      { type: 'code', text: 'Crie testes unitários para este use case:\n#File CreateOrderUseCase.java' },
      { type: 'h3', text: 'Passo 3: Avaliar' },
      { type: 'list', items: [
        'Nomes seguem deve_[resultado]_quando_[condicao]?',
        'Estrutura AAA com comentários?',
        'Cobriu happy path, entrada inválida e erro?',
      ]},
      { type: 'highlight', title: '✅ Sucesso:', text: 'Se o agente seguiu os 3 critérios, o steering de testes está funcionando.' },
    ]
  },

  // ===== SLIDE 36 - ATIVIDADE 2 =====
  {
    title: 'Atividade 2 — Hook: Guardrail de Complexidade',
    badge: 'atividade',
    badgeLabel: 'Atividade 2',
    content: [
      { type: 'h2', text: 'Atividade 2 — Hook + Steering: Guardrail de complexidade' },
      { type: 'h3', text: 'Passo 1: Criar o hook' },
      { type: 'p', text: 'Criar .kiro/hooks/complexity-check.kiro.hook:' },
      { type: 'code', text: '{\n  "name": "Complexity Check on Save",\n  "version": "1.0.0",\n  "when": {\n    "type": "fileEdited",\n    "patterns": ["**/*.java"]\n  },\n  "then": {\n    "type": "askAgent",\n    "prompt": "Analise o arquivo salvo. Verifique se algum método tem mais de 20 linhas ou mais de 4 parâmetros. Se encontrar, aponte quais e sugira refatoração."\n  }\n}' },
      { type: 'h3', text: 'Passo 2: Testar' },
      { type: 'list', items: [
        'Abra OrderController.java e adicione método grande (>20 linhas)',
        'Salve o arquivo',
        'Observe o hook disparar e o agente apontar o problema',
      ]},
      { type: 'highlight', title: '✅ Sucesso:', text: 'Hook detectou método longo e sugeriu refatoração? Guardrail funcionando.' },
    ]
  },

  // ===== SLIDE 37 - ATIVIDADE 3 =====
  {
    title: 'Atividade 3 — Spec: Planejar Feature',
    badge: 'atividade',
    badgeLabel: 'Atividade 3',
    content: [
      { type: 'h2', text: 'Atividade 3 — Spec: Planejar uma feature do zero' },
      { type: 'h3', text: 'Prompt:' },
      { type: 'code', text: 'Criar endpoint de busca de pedidos com filtros por status, data e nome do cliente.\nDeve suportar paginação e ordenação.' },
      { type: 'h3', text: 'Roteiro:' },
      { type: 'olist', items: [
        'Abra painel de Specs (Command Palette → "Kiro: Open Specs")',
        'Inicie a Spec com o prompt acima',
        'Na fase de Requisitos: leia, peça ajuste (ex: filtro por valor), aprove',
        'Na fase de Design: verifique se segue steering, aprove',
        'PARE antes das Tarefas — objetivo é só planejar',
      ]},
      { type: 'h3', text: 'Avalie:' },
      { type: 'list', items: [
        'O agente fez perguntas de clarificação?',
        'O design segue os padrões do steering?',
        'Você se sentiu no controle do processo?',
      ]},
      { type: 'highlight', title: '✅ Sucesso:', text: 'Conseguiu iterar nos requisitos e aprovar o design? Fluxo de Specs entendido.' },
    ]
  },

  // ===== SLIDE 38 - ENCERRAMENTO =====
  {
    title: 'Encerramento — Dia 1',
    badge: 'checkpoint',
    badgeLabel: 'Fim do Dia 1',
    content: [
      { type: 'h1', text: 'Encerramento — Dia 1' },
      { type: 'h2', text: 'O que vimos hoje:' },
      { type: 'list', items: [
        'Steering — padrões do time pro agente seguir',
        'Hooks — automações que garantem qualidade',
        'Specs — fluxo estruturado pra features complexas',
        'Chat — contexto rico, documentação e MCP',
        'Workspaces — múltiplos repos no mesmo fluxo',
      ]},
      { type: 'highlight', title: '🚀 Amanhã:', text: 'Dia 2 — Caso técnico real com código, testes e PR. Vamos aplicar tudo junto.' },
      { type: 'quote', text: '"Dúvidas? Manda no chat ou me chama. Até amanhã!"' },
    ]
  },
]
