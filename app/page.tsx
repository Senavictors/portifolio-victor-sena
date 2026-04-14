import About, { type FocusArea } from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects, { type Project } from "@/components/Projects";
import Stack, { type StackGroup } from "@/components/Stack";

const basePath =
  process.env.GITHUB_PAGES === "true" ? "/portifolio-victor-sena" : "";

const withBasePath = (path: string) => `${basePath}${path}`;

const contact = {
  email: "victorsena760@gmail.com",
  github: "https://github.com/Senavictors",
  linkedin: "https://www.linkedin.com/in/senavictors/",
};

const focusAreas: FocusArea[] = [
  {
    title: "CRM & Operação",
    description:
      "Atuo na evolução de um sistema de CRM com foco em regras de negócio, estabilidade operacional e crescimento sustentável do produto.",
  },
  {
    title: "APIs & Automações",
    description:
      "Construo APIs REST, webhooks e integrações entre sistemas para automatizar fluxos e reduzir tarefas manuais com confiabilidade.",
  },
  {
    title: "Arquitetura & Qualidade",
    description:
      "Aplico SOLID, Clean Code, separação de responsabilidades e arquitetura orientada a serviços para manter o backend claro e evolutivo.",
  },
];

const projects: Project[] = [
  {
    eyebrow: "CRM para relojoaria",
    title: "Watch CRM",
    description:
      "CRM full stack para centralizar catálogo, pedidos, envios, pós-venda e metas comerciais de uma operação de relojoaria. A solução unificou regras de acesso, ownership por usuário e rastreabilidade operacional em uma única plataforma.",
    highlights: [
      "Pedidos multi-itens",
      "Pós-venda rastreável",
      "Metas em tempo real",
    ],
    stack: ["Laravel 12", "Next.js 16", "MySQL", "TypeScript", "Docker"],
    image: withBasePath("/projects/watch-crm.png"),
    glow: "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(180,83,9,0.85))",
    frameClassName:
      "rounded-[2rem] border border-stone-200 bg-white",
    repositoryUrl: "https://github.com/Senavictors/watch-crm",
  },
  {
    eyebrow: "Dados e faturamento",
    title: "Integração SAP",
    description:
      "Pipeline de ingestão de dados de faturamento integrado ao SAP, responsável por processamento mensal, normalização das informações e cálculo de crescimento para leitura executiva. A solução priorizou confiabilidade do fluxo e rastreabilidade do processamento.",
    highlights: [
      "Ingestão mensal",
      "APIs externas",
      "Crescimento calculado",
    ],
    stack: ["Laravel", "Jobs", "APIs externas"],
    image: withBasePath("/projects/integracao-sap.svg"),
    glow: "linear-gradient(135deg, rgba(249,115,22,0.95), rgba(245,158,11,0.9))",
    frameClassName:
      "rounded-[2.5rem] border-8 border-orange-600 bg-gray-100",
  },
  {
    eyebrow: "Eficiência operacional",
    title: "Automação de Processos",
    description:
      "Automação de rotinas operacionais com processamento assíncrono, filas e redistribuição de tarefas para reduzir trabalho manual em fluxos críticos. O resultado foi mais velocidade de execução com menos dependência de ações repetitivas do time.",
    highlights: [
      "Filas assíncronas",
      "Menos tarefas manuais",
      "Redis em operação",
    ],
    stack: ["Laravel", "Queues", "Redis"],
    image: withBasePath("/projects/automacao-processos.svg"),
    glow: "linear-gradient(135deg, rgba(34,197,94,0.95), rgba(16,185,129,0.9))",
    frameClassName:
      "rounded-[1.5rem] border-4 border-emerald-500 bg-[#07111f]",
  },
];

const stackGroups: StackGroup[] = [
  {
    title: "Backend",
    description:
      "Desenvolvimento de aplicações backend cobrindo regras de negócio, APIs, automações e serviços voltados a operação real.",
    items: ["PHP", "Laravel", "Python", "FastAPI"],
  },
  {
    title: "APIs & Integrações",
    description:
      "Integração entre sistemas com foco em contratos claros, comunicação confiável e suporte ao ciclo completo de desenvolvimento.",
    items: ["REST APIs", "Webhooks", "Postman"],
  },
  {
    title: "Banco de Dados & Cache",
    description:
      "Persistência e integridade dos dados com suporte a leitura eficiente, consistência de informações e performance em produção.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Suporte Frontend",
    description:
      "Ferramentas para versionamento, entrega contínua e suporte a integrações frontend quando o produto exige esse apoio.",
    items: ["Git", "Docker", "CI/CD", "JavaScript", "TypeScript", "React", "Next.js"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-stone-300 p-4 text-slate-900 lg:p-6">
      <main
        className="relative flex w-full max-w-[1400px] flex-col overflow-hidden rounded-[2.5rem] bg-[#F3F3F1] shadow-2xl"
        id="top"
      >
        <Hero
          avatarSrc={withBasePath("/avatar.png")}
          email={contact.email}
          github={contact.github}
          linkedin={contact.linkedin}
        />
        <About areas={focusAreas} />
        <Projects projects={projects} />
        <Stack groups={stackGroups} />
        <Contact
          email={contact.email}
          github={contact.github}
          linkedin={contact.linkedin}
        />
      </main>
    </div>
  );
}
