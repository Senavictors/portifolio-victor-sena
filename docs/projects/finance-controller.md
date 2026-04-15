---
slug: finance-controller
title: Finance Controller
eyebrow: Finanças pessoais
summary: >
  Sistema full stack de gestão financeira pessoal para centralizar contas,
  transações, categorias, recorrências e analytics em uma única aplicação. A
  solução combina arquitetura em camadas, dashboard customizável e regras de
  consistência transacional para apoiar controle financeiro com clareza e
  autonomia.
status: em_producao
period: 2026
context: Projeto pessoal de portfólio
company: Projeto autoral
role: Desenvolvedor Full Stack
confidentiality: publico
stack:
  - Next.js 16
  - TypeScript
  - PostgreSQL
  - Prisma 7
  - Tailwind CSS v4
highlights:
  - Dashboard customizável com layout persistido por usuário
  - Transferências atômicas entre contas vinculadas por transferId
  - Recorrências com apply idempotente e logs de execução
metrics:
  - 25 route handlers cobrindo autenticação, finanças, analytics e dashboard
  - 9 models e 3 enums estruturando o núcleo financeiro da aplicação
links:
  repo: "https://github.com/Senavictors/Finance-Controller"
  demo: ""
  api_docs: ""
  related: ""
assets:
  cover: /projects/finance-controller.png
  screenshots: []
---

# Finance Controller

## Snapshot para o portfólio

### Eyebrow

Finanças pessoais

### Descrição curta

O Finance Controller foi criado para substituir planilhas manuais e ferramentas
fragmentadas por uma aplicação única de gestão financeira pessoal. O projeto
centraliza contas, transações, categorias, recorrências e indicadores em uma
arquitetura full stack com Next.js, PostgreSQL e Prisma, priorizando clareza de
uso, consistência de dados e autonomia para tomada de decisão.

### Highlights

- Dashboard customizável com drag-and-drop
- Transferências atômicas entre contas
- Recorrências idempotentes com logs

### Stack principal

- Next.js 16
- TypeScript
- PostgreSQL
- Prisma 7

## Visão geral

O projeto é um sistema full stack de gestão financeira pessoal voltado para
controle, visualização e tomada de decisão. A aplicação cobre fluxo completo de
contas, categorias, transações, transferências, recorrências e analytics, com
experiência autenticada e dashboard personalizável por usuário.

## Problema de negócio

Gerenciar finanças pessoais com planilhas ou ferramentas isoladas normalmente
gera inconsistência, pouca visibilidade de tendências e dificuldade para manter
uma estrutura que acompanhe a vida real. O projeto nasceu para resolver esse
cenário, oferecendo uma visão clara e integrada sobre gastos, receitas,
transferências e recorrências.

## Objetivo

- Centralizar o controle financeiro pessoal em uma única aplicação
- Garantir consistência em operações financeiras sensíveis
- Oferecer visualização clara para tomada de decisão
- Combinar boa experiência de uso com arquitetura sustentável

## Minha atuação

- concepção do produto e definição do escopo funcional
- arquitetura full stack da aplicação
- modelagem do domínio financeiro e do banco de dados
- implementação de frontend, APIs, autenticação e validações
- construção de dashboard customizável, analytics e recorrências
- configuração de qualidade de código e CI

## Solução implementada

A solução foi organizada com Next.js App Router no frontend e route handlers
como camada HTTP fina no backend da própria aplicação. A lógica de negócio fica
concentrada em use cases e regras de domínio, enquanto o acesso a dados usa
repository pattern sobre Prisma e PostgreSQL. O sistema trata valores em
centavos, persiste dashboard por usuário e suporta autenticação server-side com
cookies HttpOnly, sessões e rate limiting.

## Arquitetura e fluxo técnico

```text
Browser -> Route Handlers -> Auth Guard e Zod -> Use Cases -> Domain Rules -> Repositories -> PostgreSQL
```

- Route handlers atuam como adaptadores HTTP
- Use cases concentram as regras do fluxo financeiro
- Repositories isolam persistência e consultas
- Multi-tenant por usuário em todas as tabelas financeiras
- Persistência de layout do dashboard no banco

## Regras de negócio importantes

- toda query financeira é filtrada por userId
- valores monetários são armazenados em centavos para evitar floating-point
- transferências criam um par de transações vinculadas por transferId
- recorrências usam logs e apply idempotente para evitar duplicidade
- dashboard e widgets são persistidos por usuário

## Decisões técnicas

- Next.js 16 com App Router para unir aplicação, rotas autenticadas e camada HTTP
- PostgreSQL + Prisma 7 para consistência relacional, type-safety e migrations
- Zod para validação compartilhada entre frontend e API
- sessões server-side com cookies HttpOnly para maior controle sobre autenticação
- react-grid-layout para dar flexibilidade real ao dashboard

## Desafios encontrados

- manter consistência transacional em movimentações entre contas
- evitar duplicidade ao aplicar regras recorrentes
- estruturar um dashboard flexível sem perder persistência de layout
- modelar domínio financeiro com clareza e segurança
- equilibrar UX refinada com arquitetura em camadas

## Como resolvi

- tratei transferências como duas transações vinculadas por transferId
- implementei RecurringLog e aplicação idempotente para recorrências
- persisti layout e widgets no banco por usuário
- mantive route handlers enxutos e lógica de negócio em use cases
- usei validação forte com Zod e tipagem compartilhada via TypeScript

## Resultados e impacto

Como se trata de um projeto pessoal de portfólio, os resultados são medidos pela
abrangência funcional e pela consistência da solução entregue:

- cobertura completa do fluxo de finanças pessoais em uma única aplicação
- 25 route handlers para autenticação, contas, categorias, transações, analytics e dashboard
- 9 models e 3 enums para sustentar o núcleo financeiro
- experiência customizável com dashboard persistido e visualização analítica
- base pronta para evoluções como importação CSV, metas financeiras e relatórios

## O que este projeto demonstra no portfólio

- domínio de arquitetura full stack com separação clara de responsabilidades
- modelagem confiável para dados financeiros
- integração entre produto, UX e backend
- capacidade de transformar um problema comum em aplicação robusta
- preocupação com escalabilidade, clareza e qualidade de código

## Aprendizados

- como estruturar domínio financeiro sem sacrificar legibilidade
- como combinar UX customizável com persistência e consistência
- como manter regras sensíveis fora da camada HTTP

## Próximos passos

- importação e exportação CSV
- metas financeiras
- relatórios e exportação PDF
- evolução para experiência mobile e PWA

## Assets e referências

- imagem principal do portfólio em `public/projects/finance-controller.png`
- preview no repositório com telas de dashboard, transações, categorias, contas e recorrências
- pipeline de CI configurado via GitHub Actions
- repositório público: `https://github.com/Senavictors/Finance-Controller`

## Versão curta pronta para virar card

```md
eyebrow: Finanças pessoais
title: Finance Controller
description: Sistema full stack de gestão financeira pessoal para centralizar contas, transações, recorrências e analytics em uma única aplicação, com arquitetura em camadas, dashboard customizável e consistência transacional.
highlights:
  - Dashboard customizável
  - Transferências atômicas
  - Recorrências idempotentes
stack:
  - Next.js 16
  - TypeScript
  - PostgreSQL
  - Prisma 7
```
