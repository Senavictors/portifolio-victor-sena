"use client";

import Image from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/icons";
import type { Project } from "@/data/projects";
import { useEffect, useEffectEvent, useRef, useState } from "react";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex];
  const gallery = activeProject?.gallery ?? [];
  const currentGalleryItem = gallery[activeImageIndex];

  const showPreviousImage = () => {
    setActiveImageIndex((current) => Math.max(current - 1, 0));
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      activeProject ? Math.min(current + 1, gallery.length - 1) : current,
    );
  };

  const closeProjectDetails = () => {
    const trigger = triggerRef.current;

    setActiveProjectIndex(null);
    setActiveImageIndex(0);

    window.requestAnimationFrame(() => {
      trigger?.focus();
    });
  };

  const handleWindowKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (!activeProject) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeProjectDetails();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousImage();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextImage();
    }
  });

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleWindowKeyDown);

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, [activeProject, handleWindowKeyDown]);

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
          const hasGallery = Boolean(project.gallery?.length);

          return (
            <article
              key={project.title}
              className="group/project grid grid-cols-1 items-center gap-12 xl:gap-20 lg:grid-cols-2"
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
                  className={`relative h-[88%] w-[90%] overflow-hidden shadow-2xl transition-transform duration-500 group-hover/project:scale-[1.02] ${project.frameClassName}`}
                >
                  {hasGallery ? (
                    <button
                      aria-haspopup="dialog"
                      aria-label={`Abrir detalhes do projeto ${project.title}`}
                      className="group/preview relative flex h-full w-full cursor-zoom-in items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                      type="button"
                      onClick={(event) => {
                        triggerRef.current = event.currentTarget;
                        setActiveProjectIndex(index);
                        setActiveImageIndex(0);
                      }}
                    >
                      <ProjectCardImage project={project} />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100 motion-reduce:transition-none" />
                      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white opacity-0 shadow-lg transition-all duration-300 group-hover/preview:translate-y-0 group-hover/preview:opacity-100 group-focus-visible/preview:translate-y-0 group-focus-visible/preview:opacity-100 motion-reduce:transition-none">
                        Ver detalhes
                      </div>
                    </button>
                  ) : (
                    <ProjectCardImage project={project} />
                  )}
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

      {activeProject && currentGalleryItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeProjectDetails}
        >
          <div className="modal-overlay-enter absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            aria-label={`Detalhes do projeto ${activeProject.title}`}
            aria-modal="true"
            className="modal-panel-enter relative z-10 grid max-h-[calc(100vh-2rem)] w-full max-w-[1240px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#F3F3F1] shadow-[0_30px_120px_rgba(15,23,42,0.28)] lg:grid-cols-[minmax(0,1.25fr)_420px]"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[320px] flex-col bg-[#ECEEEB] p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-black px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white">
                  {currentGalleryItem.label}
                </span>
                <span className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-600">
                  {activeImageIndex + 1}/{gallery.length}
                </span>
              </div>

              <div
                className={`relative flex min-h-0 flex-1 items-center justify-center overflow-hidden ${activeProject.frameClassName}`}
              >
                <div className="absolute inset-4 sm:inset-6">
                  <Image
                    alt={currentGalleryItem.alt}
                    className="h-full w-full object-contain object-center"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    src={currentGalleryItem.src}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  aria-label="Ver imagem anterior"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 transition-colors hover:border-black/20 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={activeImageIndex === 0}
                  type="button"
                  onClick={showPreviousImage}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {gallery.map((item, galleryIndex) => {
                    const isActive = galleryIndex === activeImageIndex;

                    return (
                      <button
                        key={`${item.label}-${galleryIndex}`}
                        aria-label={`Ver imagem ${galleryIndex + 1} de ${gallery.length}: ${item.label}`}
                        aria-pressed={isActive}
                        className={`h-3 w-3 rounded-full transition-all ${
                          isActive ? "bg-black" : "bg-black/20 hover:bg-black/40"
                        }`}
                        type="button"
                        onClick={() => {
                          setActiveImageIndex(galleryIndex);
                        }}
                      />
                    );
                  })}
                </div>

                <button
                  aria-label="Ver próxima imagem"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 transition-colors hover:border-black/20 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={activeImageIndex === gallery.length - 1}
                  type="button"
                  onClick={showNextImage}
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative flex max-h-[calc(100vh-2rem)] flex-col overflow-y-auto border-t border-black/5 bg-[#F8F8F6] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <button
                ref={closeButtonRef}
                aria-label="Fechar modal"
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 transition-colors hover:border-black/20 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F8F6]"
                type="button"
                onClick={closeProjectDetails}
              >
                <CloseIcon className="h-5 w-5" />
              </button>

              <div className="pr-12">
                <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  {activeProject.eyebrow}
                </p>
                <h3 className="mb-5 text-3xl font-medium tracking-tight text-gray-900">
                  {activeProject.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  {activeProject.detailDescription ?? activeProject.description}
                </p>
              </div>

              {activeProject.metrics?.length ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {activeProject.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-[1.5rem] border border-gray-200 bg-white px-4 py-4 shadow-sm"
                    >
                      <p className="text-sm font-medium leading-relaxed text-gray-700">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-8">
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Highlights
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {activeProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-widest text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {activeProject.repositoryUrl ? (
                <div className="mt-8">
                  <a
                    className="button-dark inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-xl shadow-gray-200 transition-all hover:scale-105 hover:bg-gray-800"
                    href={activeProject.repositoryUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Acessar Repositório <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

type ProjectCardImageProps = {
  project: Project;
};

function ProjectCardImage({ project }: ProjectCardImageProps) {
  return (
    <div className={`absolute ${project.imageInsetClassName ?? "inset-0"}`}>
      <Image
        alt={`Preview do projeto ${project.title}`}
        className={`h-full w-full ${project.imageClassName ?? "object-cover"}`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        src={project.image}
      />
    </div>
  );
}
