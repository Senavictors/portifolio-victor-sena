---
slug: watch-crm
title: Watch CRM
eyebrow: CRM para relojoaria
summary: >
  CRM full stack para centralizar vendas, catálogo, clientes, logística e pós-venda
  de uma operação de relojoaria. A solução consolidou pedidos multi-itens, metas
  comerciais, garantias e gestão de usuários em uma única plataforma com regras de
  acesso por papel, ownership e auditoria.
status: em_producao
period: 2026-02 a 2026-04
context: Projeto interno
company: Operação comercial de relojoaria
role: Desenvolvedor Full Stack com foco em Backend
confidentiality: publico
stack:
  - Laravel 12
  - Next.js 16
  - MySQL
  - TypeScript
  - Docker
highlights:
  - Pedidos multi-itens com cálculo automático de totais e vínculo por vendedor
  - Pós-venda com garantias, trocas, devoluções e fila de reenvio
  - Metas de vendas com filtros por catálogo e progresso calculado em tempo real
metrics:
  - 9 frentes operacionais consolidadas em um único CRM
  - 4 papéis de acesso com 50+ permissões e regras de ownership
links:
  repo: ""
  demo: ""
  api_docs: ""
  related: "/DOCUMENTACAO.md"
assets:
  cover: /imagens-do-sistema/dashboard.png
  screenshots:
    - /imagens-do-sistema/pedidos.png
    - /imagens-do-sistema/fila-de-envios.png
    - /imagens-do-sistema/clientes.png
    - /imagens-do-sistema/produtos-e-estoque.png
---

# Watch CRM

## Snapshot para o portfólio

### Eyebrow

CRM para relojoaria

### Descrição curta

O Watch CRM nasceu para organizar a operação comercial e de pós-venda de uma relojoaria em um único sistema. O projeto resolveu a fragmentação entre catálogo, pedidos, logística, clientes, garantias e metas comerciais com uma arquitetura full stack em Laravel e Next.js, incluindo autenticação stateful, autorização por papéis, ownership por usuário e auditoria. O impacto mais visível foi a centralização do fluxo operacional e o ganho de previsibilidade sobre vendas, envios e acompanhamento do pós-venda.

### Highlights

- Pedidos multi-itens com cálculo de preço, custo e desconto a partir das linhas do pedido
- Módulo de garantias, trocas e devoluções com custos rastreáveis e fila de reenvio
- Metas de vendas por empresa ou vendedor, com filtros por produto, marca e modelo

### Stack principal

- Laravel 12
- Next.js 16
- MySQL

## Visão geral

O projeto é um CRM full stack voltado para uma operação de relojoaria, cobrindo o ciclo comercial e operacional do negócio. Pelo que o repositório mostra, a aplicação foi estruturada para atender rotinas de vendas, cadastro de clientes, organização do catálogo, controle de pedidos, logística de envios, pós-venda e acompanhamento de metas. O desenvolvimento aconteceu em um contexto de produto interno, com backend em Laravel e frontend em Next.js.

## Problema de negócio

Antes da consolidação do CRM, a operação exigia controle de várias frentes que naturalmente geram ruído quando ficam dispersas: catálogo com regras específicas por tipo de produto, pedidos com múltiplos itens, distribuição por vendedor, gestão de envios, acompanhamento de garantias e leitura de desempenho comercial. Esse cenário aumenta o risco de inconsistência de dados, perda de contexto no pós-venda, baixa rastreabilidade operacional e dificuldade para acompanhar metas e indicadores com confiança.

## Objetivo

- Centralizar o fluxo comercial e operacional da relojoaria em uma única aplicação
- Estruturar regras de acesso por papel e ownership para proteger dados sensíveis
- Dar suporte a pedidos, envios, pós-venda e metas com consistência de dados

## Minha atuação

- entendimento do domínio e das regras de negócio do CRM
- desenho da API e da modelagem das entidades principais
- implementação backend em Laravel para catálogo, pedidos, metas, retornos e usuários
- definição das regras de autenticação stateful, autorização por permissão e policies
- apoio na evolução do frontend em Next.js para carregamento por página e integração com a API
- auditoria, sessões em banco e estrutura preparada para cache e filas no ecossistema Laravel

## Solução implementada

A solução foi organizada como um monorepo com frontend em Next.js App Router e backend em Laravel 12. O frontend consome a API autenticada por sessão e cookies HTTP-only, enquanto o backend concentra validação, regras de negócio, autorização, policies e persistência. Pedidos e retornos usam sincronização transacional de itens, metas calculam progresso em tempo real sobre `order_items`, e a visibilidade dos dados muda conforme papel e ownership do usuário.

## Arquitetura e fluxo técnico

```text
Operação comercial -> Next.js -> API Laravel -> Validação/Policies/Regras -> MySQL -> Dashboard/Metas/Envios/Pós-venda
```

- Frontend em rotas independentes, com carregamento lazy por página
- Backend REST com autenticação stateful, middleware de permissão e policies por registro
- Persistência principal em MySQL, com sessões e cache configurados em banco
- Modelagem orientada a denormalização estratégica em `order_items` e `return_items` para preservar contexto de venda

## Regras de negócio importantes

- Modelos `WATCH` exigem qualidade; modelos `BOX` não exigem
- Vendedor vê apenas registros próprios nos módulos com ownership e metas permitidas pela policy
- Pedidos precisam de ao menos um item e têm totais calculados a partir das linhas
- Metas podem ser por empresa ou por vendedor e ignoram pedidos com status `Cancelado`
- Garantias, trocas e devoluções exigem pelo menos um item e acompanham custos operacionais do caso

## Decisões técnicas

- Laravel foi escolhido para concentrar regras de negócio, autenticação, autorização e modelagem relacional com rapidez
- Next.js foi adotado no frontend para organizar as telas por rota e reduzir carregamento desnecessário
- `order_items` e `return_items` armazenam dados denormalizados do produto para preservar o estado do item no momento da operação
- Sessão, cache e fila foram mantidos aderentes ao ecossistema padrão do Laravel, com drivers em banco para simplificar ambiente local e Docker
- O projeto aceitou o trade-off de recalcular indicadores e progresso em tempo real em vez de materializar agregados antecipadamente

## Desafios encontrados

- evoluir o CRM de um fluxo mais simples para pedidos multi-itens sem perder consistência
- aplicar controle de acesso por papel e ownership em módulos diferentes
- suportar pós-venda com estados, custos e itens próprios
- calcular progresso de metas com filtros por catálogo e escopo por vendedor
- manter o frontend mais modular e previsível à medida que os módulos cresceram

## Como resolvi

- normalizei o fluxo de pedidos e retornos em registros pai com coleções de itens sincronizadas em transação
- usei middleware de permissão e policies para separar acesso por papel e acesso por ownership
- modelei `goal_intervals` e um calculador dedicado para progresso em tempo real sobre `order_items`
- extraí autenticação, toasts e tema para contexts dedicados no frontend
- reorganizei a aplicação para App Router com carregamento por página, reduzindo acoplamento entre módulos

## Resultados e impacto

Como o repositório não expõe KPIs operacionais reais, os resultados abaixo refletem impactos observáveis na solução implementada:

- centralização de 9 frentes operacionais no mesmo CRM: dashboard, clientes, produtos, modelos, pedidos, envios, garantias, metas e usuários
- suporte a 4 papéis de acesso com autorização por permissão e regras por registro
- cobertura de ponta a ponta do fluxo comercial com 8 status de pedidos e 14 status de pós-venda
- maior rastreabilidade em operações sensíveis por meio de auditoria, atribuição por vendedor e histórico de mudanças de status

## O que este projeto demonstra no portfólio

- domínio de backend para sistemas transacionais com regras de negócio reais
- integração consistente entre frontend e API stateful
- modelagem de dados orientada a operação comercial e pós-venda
- capacidade de estruturar autorização, ownership e auditoria em um CRM
- preocupação com clareza arquitetural, evolução incremental e manutenção

## Aprendizados

- como modelar crescimento funcional sem perder coesão entre módulos
- como usar denormalização com critério para preservar histórico operacional
- como equilibrar simplicidade de implementação com regras de acesso mais granulares

## Próximos passos

- materializar indicadores críticos para reduzir cálculo em tempo real no dashboard e em metas
- ampliar observabilidade operacional com eventos e trilhas mais completas de auditoria
- evoluir fluxos de estoque e integração com canais externos de venda, se o produto exigir

## Assets e referências

- prints disponíveis em `imagens-do-sistema/`
- documentação geral em `DOCUMENTACAO.md`
- documentações específicas em `docs/pedidos.md`, `docs/garantias.md`, `docs/metas.md` e `docs/usuarios.md`
- por prudência de portfólio, vale anonimizar dados e nomes operacionais se o case for publicado externamente

## Versão curta pronta para virar card

```md
eyebrow: CRM para relojoaria
title: Watch CRM
description: CRM full stack para centralizar catálogo, pedidos, envios, pós-venda e metas comerciais de uma operação de relojoaria, com autenticação stateful, autorização por papel e regras de ownership.
highlights:
  - Pedidos multi-itens com cálculo automático de totais
  - Garantias, trocas e devoluções com fluxo operacional rastreável
  - Metas de vendas com filtros por catálogo e progresso em tempo real
stack:
  - Laravel 12
  - Next.js 16
  - MySQL
```
