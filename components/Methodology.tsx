export type MethodologyPoint = {
  title: string;
  description: string;
};

type MethodologyProps = {
  points: MethodologyPoint[];
};

const tools = ["Claude Code", "Codex", "Cursor", "ADRs", "Definition of Done"];

export default function Methodology({ points }: MethodologyProps) {
  return (
    <section
      className="scroll-mt-24 px-8 py-20 lg:px-16 xl:px-24"
      id="metodologia"
    >
      <div className="mb-16 flex flex-col gap-2">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
          Metodologia
        </span>
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Como eu trabalho com IA
        </h2>
        <p className="mt-4 max-w-3xl text-lg font-normal leading-relaxed text-gray-500">
          Um método próprio de trabalho com agentes de IA (Claude Code, Codex,
          Cursor) atravessa meus projetos pessoais, como o Cactos Gourmet CRM
          e o Sidekick AI. Não é só usar IA para gerar código — é um processo
          de engenharia com papéis definidos, decisões registradas e
          continuidade entre sessões.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <article
            key={point.title}
            className="rounded-[2rem] border border-gray-200 bg-[#F3F3F1] px-6 py-8 shadow-sm"
          >
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              {point.title}
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              {point.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-gray-200 bg-[#F3F3F1] px-6 py-8 shadow-sm">
        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
          Ferramentas e disciplina
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-black px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
