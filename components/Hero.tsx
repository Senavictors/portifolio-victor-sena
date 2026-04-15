import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

type HeroProps = {
  avatarSrc: string;
  email: string;
  github: string;
  linkedin: string;
};

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export default function Hero({
  avatarSrc,
  email,
  github,
  linkedin,
}: HeroProps) {
  return (
    <>
      <header className="flex items-center justify-between px-8 pb-8 pt-8 lg:px-12">
        <a
          aria-label="Voltar ao topo"
          className="group flex items-center gap-1"
          href="#inicio"
        >
          <div className="h-6 w-2 rounded-full bg-black transition-all group-hover:h-8" />
          <div className="h-6 w-2 rounded-full bg-black transition-all group-hover:h-4" />
          <div className="h-6 w-2 rounded-full bg-black transition-all group-hover:h-6" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-black"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-medium uppercase tracking-widest text-gray-500 transition-colors hover:bg-gray-200 hover:text-black sm:flex"
            href={github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub <GithubIcon className="h-3 w-3" />
          </a>
          <a
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-medium uppercase tracking-widest text-gray-500 transition-colors hover:bg-gray-200 hover:text-black sm:flex"
            href={linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <LinkedinIcon className="h-3 w-3" />
          </a>
          <a
            className="button-dark flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-widest shadow-lg shadow-gray-300/50 transition-all hover:scale-105 hover:bg-black"
            href={`mailto:${email}?subject=Projeto%20via%20portfolio`}
          >
            Contato <MailIcon className="h-3 w-3" />
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="grid scroll-mt-24 grid-cols-1 lg:min-h-[70vh] lg:grid-cols-2"
      >
        <div className="relative z-10 flex flex-col justify-center px-8 pb-12 pt-4 lg:px-12 xl:px-20">
          <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Allcom Telecom • CRM interno • APIs • Operação
          </p>

          <div className="relative mb-6">
            <h1 className="text-7xl font-semibold leading-[0.85] tracking-tighter text-[#0A0A0A] lg:text-8xl xl:text-9xl">
              VICTOR
              <br />
              SENA
            </h1>
            <div className="absolute -bottom-4 left-0 z-20 inline-flex rotate-[-2deg] cursor-default items-center gap-2 rounded-full bg-black px-4 py-2 text-white shadow-xl transition-transform hover:rotate-0 lg:left-2">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest">
                Laravel • FastAPI • CRM
              </span>
            </div>
          </div>

          <div className="mt-8 max-w-xl">
            <h2 className="mb-4 text-xl font-medium leading-snug tracking-tight text-gray-900">
              Na <span className="text-blue-600">Allcom Telecom</span>, atuo na
              evolução de uma plataforma CRM interna, desenvolvendo interfaces
              administrativas, APIs, integrações e automações para fluxos
              comerciais e operacionais.
            </h2>
            <p className="mb-8 text-base font-normal leading-relaxed text-gray-500">
              Sou formado em Análise e Desenvolvimento de Sistemas e atuo de
              forma full stack com foco em backend, trabalhando em regras de
              negócio, autenticação, permissões, persistência, filas e
              sustentação técnica da aplicação, sempre com atenção a
              confiabilidade, escalabilidade e segurança da informação.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="button-dark inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs font-semibold uppercase tracking-widest shadow-xl shadow-gray-200 transition-all hover:scale-105 hover:bg-gray-800"
                href="#projetos"
              >
                Ver Projetos <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-4 text-xs font-medium uppercase tracking-widest text-gray-600 transition-all hover:border-gray-900 hover:text-gray-900"
                href={`mailto:${email}?subject=Projeto%20via%20portfolio`}
              >
                Enviar Email <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="group relative h-[50vh] overflow-hidden bg-[#F0EFEB] lg:h-auto lg:rounded-tl-[4rem]">
          <Image
            alt="Avatar 3D de Victor Sena"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={avatarSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />

          <div className="absolute left-6 top-8 rounded-[1.75rem] border border-white/80 bg-white/55 px-5 py-4 text-slate-900 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:left-10 lg:top-10">
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.28em] text-slate-500">
              Core Stack
            </p>
            <p className="mt-2 text-base font-semibold tracking-wide text-slate-900">
              Laravel • FastAPI • Redis
            </p>
          </div>

          <div className="absolute bottom-10 right-6 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-widest text-white backdrop-blur-xl transition-colors lg:right-10">
            Webhooks • Docker • CI/CD
          </div>

        </div>
      </section>
    </>
  );
}
