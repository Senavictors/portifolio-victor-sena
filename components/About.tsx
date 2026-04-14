export type FocusArea = {
  title: string;
  description: string;
};

type AboutProps = {
  areas: FocusArea[];
};

export default function About({ areas }: AboutProps) {
  return (
    <section className="scroll-mt-24 p-4 lg:p-8" id="sobre">
      <div className="group relative w-full scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/5 bg-[#08090A] px-6 py-20 text-center md:px-16 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-4xl -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px] opacity-60 transition-opacity duration-1000 group-hover:opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_30%,transparent_70%,rgba(56,189,248,0.08))]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Posicionamento
          </p>
          <h2 className="mb-8 text-3xl font-medium leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
            Desenvolvedor backend com atuação forte em{" "}
            <span className="text-blue-400">CRM, APIs REST</span>, arquitetura
            de serviços e automação de processos para{" "}
            <span className="text-blue-400">operações reais</span>.
          </h2>
          <p className="mb-16 max-w-4xl text-lg font-normal leading-relaxed text-gray-400 md:text-2xl">
            Sou formado em Análise e Desenvolvimento de Sistemas e atuo na
            manutenção e evolução de um sistema de CRM na Allcom Telecom.
            Trabalho da definição de regras de negócio até a persistência e
            integridade dos dados, buscando performance, escalabilidade,
            segurança e código sustentável.
          </p>

          <div className="grid w-full gap-4 md:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-6 text-left backdrop-blur-sm"
              >
                <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-blue-200/70">
                  {area.title}
                </p>
                <p className="text-sm leading-relaxed text-gray-300">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
