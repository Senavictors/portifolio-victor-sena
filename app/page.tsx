import About, { type FocusArea } from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Methodology, { type MethodologyPoint } from "@/components/Methodology";
import Projects from "@/components/Projects";
import Stack, { type StackGroup } from "@/components/Stack";
import { projects } from "@/data/projects";

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
    title: "Sistemas Internos & LIMS",
    description:
      "Atuo no desenvolvimento de sistemas internos de gestão, incluindo plataformas de laboratório (LIMS) e de dados técnicos, com foco em fluxos operacionais, auditoria e arquitetura multi-tenant.",
  },
  {
    title: "APIs & Automações",
    description:
      "Construo APIs REST, integrações com serviços externos e rotinas assíncronas para reduzir retrabalho e sustentar processos internos com confiabilidade.",
  },
  {
    title: "Arquitetura & Qualidade",
    description:
      "Trabalho do frontend ao backend com autenticação, permissões, persistência e responsabilidades bem definidas para manter o produto claro, seguro e evolutivo.",
  },
];

const methodologyPoints: MethodologyPoint[] = [
  {
    title: "Agentes especializados por domínio",
    description:
      "Cada projeto define papéis de agente de IA com escopo próprio (frontend, backend, infraestrutura, regras de negócio críticas), alguns com poder de veto sobre mudanças que quebrem uma invariante — segurança, integridade financeira ou privacidade.",
  },
  {
    title: "Hub de continuidade entre sessões",
    description:
      "Uma pasta viva de contexto, tasks e decisões arquiteturais em estilo ADR, com handoffs escritos para retomar o trabalho em outra sessão ou ferramenta sem perder histórico.",
  },
  {
    title: "Documentação como fonte de verdade",
    description:
      "Regras de negócio e decisões técnicas ficam registradas fora do código e são lidas antes de qualquer alteração — o código nunca é a única fonte da regra.",
  },
  {
    title: "Multi-ferramenta por design",
    description:
      "Os mesmos papéis de agente são replicados para diferentes ferramentas de IA (Claude Code, Codex, Cursor), garantindo que o processo não dependa de uma ferramenta específica.",
  },
  {
    title: "Critérios de conclusão formais",
    description:
      "Cada entrega segue um Definition of Done explícito: build e testes rodados, decisão registrada quando necessário, riscos declarados e handoff preenchido.",
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
        <Methodology points={methodologyPoints} />
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
