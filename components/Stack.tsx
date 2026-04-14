export type StackGroup = {
  title: string;
  description: string;
  items: string[];
};

type StackProps = {
  groups: StackGroup[];
};

const principles = [
  "SOLID",
  "Clean Code",
  "Arquitetura de serviços",
  "Integrações confiáveis",
  "Automação de processos",
  "Responsabilidades bem definidas",
];

export default function Stack({ groups }: StackProps) {
  return (
    <section className="scroll-mt-24 bg-white/50 px-8 py-20 lg:px-16 xl:px-24" id="stack">
      <div className="mb-16 flex flex-col gap-2">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
          Stack
        </span>
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Tecnologias em operação
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-[2rem] border border-gray-200 bg-[#F3F3F1] px-6 py-8 shadow-sm"
          >
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              {group.title}
            </p>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-500">
              {group.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-gray-200 bg-[#F3F3F1] px-6 py-8 shadow-sm">
        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
          Como eu entrego
        </p>
        <div className="flex flex-wrap gap-2">
          {principles.map((principle) => (
            <span
              key={principle}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-widest text-gray-600"
            >
              {principle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
