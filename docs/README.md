# Documentação de Projetos

Esta pasta guarda o padrão de documentação para qualquer projeto que depois possa virar case no portfólio.

## Objetivo

A ideia é documentar cada projeto uma vez, com informações suficientes para reaproveitar em:

- card do portfólio
- estudo de caso mais completo
- README técnico
- apresentação em entrevista

## O que o portfólio precisa mostrar

Pelo formato atual do site, cada projeto precisa comunicar com clareza:

- contexto de negócio
- problema real resolvido
- impacto gerado
- stack usada
- 3 highlights curtos
- narrativa de backend confiável, integrações e automação

## Estrutura recomendada

Para cada novo projeto:

1. Crie um arquivo em `docs/projects/<slug-do-projeto>.md`
2. Copie o conteúdo de `docs/templates/project-case-template.md`
3. Preencha primeiro os campos do bloco inicial
4. Depois complete as seções detalhadas
5. Revise a checklist em `docs/checklists/project-documentation-checklist.md`

## Regras para preencher bem

- Escreva sempre pensando em problema, solução e resultado.
- Prefira verbos de entrega: implementei, estruturei, automatizei, integrei, reduzi.
- Sempre que possível, use números: tempo reduzido, volume processado, ganho operacional.
- Se o projeto for confidencial, descreva o contexto sem expor dados sensíveis.
- Mantenha os `highlights` curtos, com no máximo 3 a 5 palavras.
- Use o campo `eyebrow` como uma categoria estratégica do case, não como nome técnico.

## Padrão ideal para o resumo do card

- `eyebrow`: 2 a 4 palavras
- `title`: nome claro do projeto
- `description`: 2 a 4 linhas com contexto + solução + impacto
- `highlights`: exatamente 3 itens
- `stack`: 3 a 6 itens principais

## Sugestão de pastas

```text
docs/
  README.md
  checklists/
    project-documentation-checklist.md
  templates/
    project-case-template.md
  projects/
    crm-de-metas.md
    integracao-sap.md
    automacao-de-processos.md
```

## Fluxo prático

Quando terminar ou evoluir um projeto, registre:

1. O problema e o contexto
2. Sua responsabilidade direta
3. A solução técnica
4. As decisões importantes
5. O resultado para operação ou negócio
6. O que vale destacar no portfólio

Com isso, depois fica muito mais simples transformar a documentação em seção visual dentro do site.
