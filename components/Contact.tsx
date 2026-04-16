import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

type ContactProps = {
  email: string;
  github: string;
  linkedin: string;
};

export default function Contact({
  email,
  github,
  linkedin,
}: ContactProps) {
  return (
    <section className="scroll-mt-24 p-4 pt-0 lg:p-8 lg:pt-0" id="contato">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#08090A] px-6 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_32%)]" />

        <div className="relative z-10">
          <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Contato
          </p>
          <h2 className="mb-6 max-w-3xl text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
            Vamos construir algo juntos?
          </h2>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
            Se você precisa de um backend confiável, integrações bem desenhadas
            e automações que reduzam fricção operacional, vamos conversar.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-medium uppercase tracking-widest text-gray-900 transition-all hover:scale-105"
              href={`mailto:${email}?subject=Projeto%20via%20portfolio`}
            >
              <MailIcon className="h-4 w-4" />
              Enviar Email
            </a>
            <a
              className="button-dark inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-xs font-medium uppercase tracking-widest text-white transition-all hover:border-white/30 hover:bg-white/10"
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon className="h-4 w-4 text-white" />
              GitHub
            </a>
            <a
              className="button-dark inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-xs font-medium uppercase tracking-widest text-white transition-all hover:border-white/30 hover:bg-white/10"
              href={linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinIcon className="h-4 w-4 text-white" />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <span>{email}</span>
            <div className="flex items-center gap-2 text-gray-400">
              <span>São Paulo, Brasil</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <footer className="px-2 pb-6 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Victor Sena. Backend developer focado em
        clareza técnica, confiabilidade e escala.
      </footer>
    </section>
  );
}
