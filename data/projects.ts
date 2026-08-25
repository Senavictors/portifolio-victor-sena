export type ProjectGalleryItem = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  eyebrow: string;
  title: string;
  description: string;
  detailDescription?: string;
  highlights: string[];
  metrics?: string[];
  stack: string[];
  image: string;
  gallery?: ProjectGalleryItem[];
  glow: string;
  frameClassName: string;
  imageClassName?: string;
  imageInsetClassName?: string;
  repositoryUrl?: string;
};

const basePath =
  process.env.GITHUB_PAGES === "true" ? "/portifolio-victor-sena" : "";

const withBasePath = (path: string) => `${basePath}${path}`;

const watchCrmGallery: ProjectGalleryItem[] = [
  {
    src: withBasePath("/projects/watch-crm/dashboard.png"),
    alt: "Dashboard principal do Watch CRM",
    label: "Dashboard",
  },
  {
    src: withBasePath("/projects/watch-crm/pedidos.png"),
    alt: "Tela de pedidos do Watch CRM",
    label: "Pedidos",
  },
  {
    src: withBasePath("/projects/watch-crm/fila-de-envios.png"),
    alt: "Tela de envios do Watch CRM",
    label: "Envios",
  },
  {
    src: withBasePath("/projects/watch-crm/clientes.png"),
    alt: "Tela de clientes do Watch CRM",
    label: "Clientes",
  },
  {
    src: withBasePath("/projects/watch-crm/produtos-e-estoque.png"),
    alt: "Tela de produtos do Watch CRM",
    label: "Produtos",
  },
  {
    src: withBasePath("/projects/watch-crm/modelos.png"),
    alt: "Tela de modelos do Watch CRM",
    label: "Modelos",
  },
  {
    src: withBasePath("/projects/watch-crm/configuracoes.png"),
    alt: "Tela de configuracoes do Watch CRM",
    label: "Configuracoes",
  },
];

const financeControllerGallery: ProjectGalleryItem[] = [
  {
    src: withBasePath("/projects/finance-controller/dashboard.png"),
    alt: "Dashboard do Finance Controller",
    label: "Dashboard",
  },
  {
    src: withBasePath("/projects/finance-controller/transacoes.png"),
    alt: "Tela de transacoes do Finance Controller",
    label: "Transacoes",
  },
  {
    src: withBasePath("/projects/finance-controller/categorias.png"),
    alt: "Tela de categorias do Finance Controller",
    label: "Categorias",
  },
  {
    src: withBasePath("/projects/finance-controller/contas.png"),
    alt: "Tela de contas do Finance Controller",
    label: "Contas",
  },
  {
    src: withBasePath("/projects/finance-controller/recorrencias.png"),
    alt: "Tela de recorrencias do Finance Controller",
    label: "Recorrencias",
  },
];

export const projects: Project[] = [
  {
    eyebrow: "CRM/ERP para food service",
    title: "Cactos Gourmet CRM",
    description:
      "Sistema de gestão para a operação de uma loja de marmitas congeladas artesanais, unificando pedidos, clientes, estoque, produção, compras e financeiro em uma única ferramenta administrativa — no lugar de controle manual em planilha. Projeto pessoal em desenvolvimento (MVP em construção).",
    detailDescription:
      "O Cactos Gourmet CRM organiza a operação de food service de uma loja de marmitas congeladas artesanais, cobrindo catálogo, pedidos, clientes, estoque, produção, compras e financeiro. O frontend em Next.js consome uma API Laravel estruturada como monólito modular por domínio, com autenticação via Sanctum (cookie HTTP-only + CSRF, sem token em localStorage) e regras de domínio explícitas — como dinheiro sempre em DECIMAL (nunca float) e estoque sem movimentação sem registro auditável. O projeto também define um design system próprio, com paleta e tipografia da marca documentadas para manter consistência entre telas.",
    highlights: [
      "Fundação de identidade e permissões",
      "Financeiro com precisão decimal",
      "Estoque com trilha auditável",
    ],
    metrics: [
      "Épico de Fundação (usuários, papéis, permissões e auditoria) implementado",
      "Design system próprio documentado (paleta, tipografia e regras de uso)",
    ],
    stack: ["Next.js 16", "React 19", "Laravel 12", "PHP 8.4", "MySQL", "Docker"],
    image: withBasePath("/projects/cactos-gourmet-crm/cover.svg"),
    glow: "linear-gradient(135deg, rgba(47,82,51,0.9), rgba(201,124,75,0.8))",
    frameClassName: "rounded-[2rem] border border-amber-100 bg-[#FBF6EA]",
    imageClassName: "object-contain object-center",
    imageInsetClassName: "inset-3 md:inset-4",
  },
  {
    eyebrow: "Leitor desktop local-first com IA",
    title: "Sidekick AI",
    description:
      "Aplicativo desktop local-first para organizar, ler e explorar uma biblioteca pessoal de quadrinhos (CBR, CBZ, PDF), com catálogo, busca híbrida e um assistente de IA contextual com proteção ativa contra spoilers. Toda a biblioteca fica no computador do usuário, sem backend e sem conta. Projeto pessoal em fase inicial de desenvolvimento.",
    detailDescription:
      "O Sidekick AI combina leitor, catálogo e busca com um assistente de IA sobre uma biblioteca pessoal de quadrinhos, priorizando privacidade e ausência de spoiler por construção. É local-first: biblioteca, progresso de leitura, OCR e índices ficam no computador do usuário, sem sincronização em nuvem. A chave de API da OpenAI (BYOK) fica no cofre do sistema operacional e apenas a pergunta atual e o trecho de texto selecionado saem do dispositivo — nenhuma imagem de página é enviada. O limite de leitura do usuário restringe o que a busca pode recuperar antes da consulta, e não por instrução de prompt. A interface (React) nunca acessa filesystem, banco ou segredo diretamente: toda capacidade privilegiada passa por um comando Tauri tipado, validado por schemas Zod compartilhados e um teste de contrato Rust↔TypeScript.",
    highlights: [
      "100% local-first, sem conta",
      "Busca sem spoiler por arquitetura",
      "Fronteira IPC tipada Rust ↔ TypeScript",
    ],
    metrics: [
      "Fase 0 concluída: workspace, IPC tipada e banco SQLite validados",
      "Roadmap de 20 tasks estruturado em 4 milestones",
    ],
    stack: ["Tauri 2", "Rust", "React 19", "TypeScript", "Vite", "SQLite"],
    image: withBasePath("/projects/sidekick-ai/cover.svg"),
    glow: "linear-gradient(135deg, rgba(124,58,237,0.85), rgba(245,158,11,0.75))",
    frameClassName: "rounded-[2rem] border border-white/10 bg-[#16181F]",
    imageClassName: "object-contain object-center",
    imageInsetClassName: "inset-3 md:inset-4",
  },
  {
    eyebrow: "CRM para relojoaria",
    title: "Watch CRM",
    description:
      "CRM full stack para centralizar catálogo, pedidos, envios, pós-venda e metas comerciais de uma operação de relojoaria. A solução unificou regras de acesso, ownership por usuário e rastreabilidade operacional em uma única plataforma.",
    detailDescription:
      "O Watch CRM organiza o ciclo comercial e operacional de uma relojoaria em um único sistema, cobrindo catálogo, clientes, pedidos, envios, pós-venda e metas. A aplicação foi estruturada para sustentar regras de acesso por papel, ownership por usuário e rastreabilidade em fluxos sensíveis, com backend em Laravel e frontend em Next.js.",
    highlights: [
      "Pedidos multi-itens",
      "Pós-venda rastreável",
      "Metas em tempo real",
    ],
    metrics: [
      "9 frentes operacionais centralizadas no mesmo CRM",
      "4 papéis de acesso com 50+ permissões e regras por registro",
    ],
    stack: ["Laravel 12", "Next.js 16", "MySQL", "TypeScript", "Docker"],
    image: watchCrmGallery[0].src,
    gallery: watchCrmGallery,
    glow: "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(180,83,9,0.85))",
    frameClassName: "rounded-[2rem] border border-stone-200 bg-[#F5F6FA]",
    imageClassName: "object-contain object-center",
    imageInsetClassName: "inset-3 md:inset-4",
    repositoryUrl: "https://github.com/Senavictors/watch-crm",
  },
  {
    eyebrow: "Finanças pessoais",
    title: "Finance Controller",
    description:
      "Sistema full stack de gestão financeira pessoal para centralizar contas, transações, recorrências e analytics em uma única aplicação. O projeto combina arquitetura em camadas, dashboard customizável e consistência transacional para apoiar controle e tomada de decisão.",
    detailDescription:
      "O Finance Controller foi criado para substituir planilhas manuais e ferramentas fragmentadas por uma aplicação única de gestão financeira pessoal. A solução reúne contas, transações, categorias, recorrências e analytics em uma arquitetura full stack com Next.js, PostgreSQL e Prisma, priorizando clareza de uso, consistência de dados e autonomia para tomada de decisão.",
    highlights: [
      "Dashboard customizável",
      "Transferências atômicas",
      "Recorrências idempotentes",
    ],
    metrics: [
      "25 route handlers cobrindo autenticação, finanças, analytics e dashboard",
      "9 models e 3 enums estruturando o núcleo financeiro da aplicação",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma 7",
      "Tailwind CSS",
    ],
    image: financeControllerGallery[0].src,
    gallery: financeControllerGallery,
    glow: "linear-gradient(135deg, rgba(16,185,129,0.92), rgba(20,184,166,0.88))",
    frameClassName: "rounded-[2rem] border border-emerald-100 bg-[#F7FFFC]",
    imageClassName: "object-contain object-center",
    imageInsetClassName: "inset-3 md:inset-4",
    repositoryUrl: "https://github.com/Senavictors/Finance-Controller",
  },
];
