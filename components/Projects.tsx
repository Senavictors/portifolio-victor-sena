import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

export type Project = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  glow: string;
  frameClassName: string;
  repositoryUrl?: string;
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="scroll-mt-24 px-8 pb-20 pt-8 lg:px-16 xl:px-24" id="projetos">
      <div className="mb-16 flex flex-col gap-2">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
          Projetos
        </span>
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Experiência prática em backend
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          const reverseOrder = index % 2 === 1;

          return (
            <article
              key={project.title}
              className="group grid grid-cols-1 items-center gap-12 xl:gap-20 lg:grid-cols-2"
            >
              <div
                className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-inner lg:aspect-[4/3] ${
                  reverseOrder ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="absolute h-[70%] w-[70%] rounded-full opacity-20 blur-3xl"
                  style={{
                    background: project.glow,
                    left: reverseOrder ? "auto" : "-18%",
                    right: reverseOrder ? "-18%" : "auto",
                    top: reverseOrder ? "auto" : "-16%",
                    bottom: reverseOrder ? "-16%" : "auto",
                  }}
                />
                <div
                  className={`relative h-[88%] w-[90%] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${project.frameClassName}`}
                >
                  <Image
                    alt={`Preview do projeto ${project.title}`}
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={project.image}
                  />
                </div>
              </div>

              <div
                className={`flex flex-col items-start justify-center ${
                  reverseOrder ? "lg:order-1 lg:pr-12" : "lg:pr-12"
                }`}
              >
                <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  {project.eyebrow}
                </p>
                <h3 className="mb-6 text-4xl font-medium tracking-tight text-gray-900 lg:text-5xl">
                  {project.title}
                </h3>
                <p className="mb-8 max-w-lg text-lg font-normal leading-relaxed text-gray-500">
                  {project.description}
                </p>

                <ul className="mb-8 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-widest text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.repositoryUrl ? (
                  <a
                    className="button-dark inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-xl shadow-gray-200 transition-all hover:scale-105 hover:bg-gray-800"
                    href={project.repositoryUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Acessar Repositório <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
