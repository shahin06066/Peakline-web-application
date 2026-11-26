import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "../lib/router";
import type { ProjectCategory } from "../lib/site";
import { Icon } from "./Icon";

export interface Project {
  id: string;
  city: string;
  category: ProjectCategory;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  meta: string;
}

export function ProjectCard({
  project,
  onOpen,
  className = "",
  showCaption = true,
}: {
  project: Project;
  onOpen?: () => void;
  className?: string;
  showCaption?: boolean;
}) {
  const media = (
    <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-950/55 via-pine-950/0 to-pine-950/5" />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-bone-50/95 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-pine-900 backdrop-blur">
          {project.category}
        </span>
        <span className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-3 text-bone-50">
          <span className="flex items-center gap-1.5 text-[0.66rem] font-medium uppercase tracking-[0.12em]">
            <Icon name="mapPin" className="h-3.5 w-3.5 text-clay-300" strokeWidth={1.8} />
            {project.city}
          </span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-bone-50/35 bg-pine-950/35 backdrop-blur transition-all duration-300 group-hover:border-bone-50/70 group-hover:bg-bone-50 group-hover:text-pine-950">
            <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={1.9} />
          </span>
        </span>
    </div>
  );

  const caption = showCaption ? (
    <div className="border-t border-pine-950/10 px-5 py-5">
      <h3 className="font-display text-[1.22rem] leading-snug text-pine-950">{project.title}</h3>
      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-pine-950/58">{project.meta}</p>
    </div>
  ) : null;

  const classes = `group block overflow-hidden rounded-2xl border border-pine-950/10 bg-bone-50 text-left transition-all duration-500 hover:-translate-y-1 hover:border-pine-950/20 hover:shadow-[0_28px_50px_-32px_rgba(14,31,25,0.55)] ${className}`;

  if (onOpen) {
    return (
      <article className={classes}>
        <button
          type="button"
          onClick={onOpen}
          className="block w-full text-left"
          aria-label={`View project: ${project.title}, ${project.city}`}
        >
          {media}
        </button>
        {caption}
      </article>
    );
  }

  return (
    <Link to="/projects" className={classes} aria-label={`View our projects: ${project.title}`}>
      {media}
      {caption}
    </Link>
  );
}

export function ProjectLightbox({
  projects,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  projects: Project[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const project = projects[index];
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project: ${project.title}`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-pine-950/92 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close project"
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-bone-50/25 text-bone-50 transition-colors hover:bg-bone-50/10 sm:right-7 sm:top-7"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-bone-50 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative shrink-0">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="max-h-[46vh] w-full object-cover sm:max-h-[50vh]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-bone-50/95 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-pine-900">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto p-6 sm:flex-row sm:items-start sm:justify-between sm:p-7">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-clay-600">
              <Icon name="mapPin" className="h-3.5 w-3.5" />
              {project.city}
            </p>
            <h3 className="display mt-2 text-[1.6rem] leading-tight text-pine-950">{project.title}</h3>
            <p className="mt-2.5 text-[0.88rem] leading-relaxed text-pine-950/65">{project.caption}</p>
            <p className="mt-3.5 inline-flex rounded-full border border-pine-950/15 px-3.5 py-1.5 text-[0.65rem] font-medium text-pine-950/60">
              {project.meta}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous project"
              className="grid h-11 w-11 place-items-center rounded-full border border-pine-950/15 text-pine-950 transition-colors hover:bg-pine-950/5"
            >
              <Icon name="chevronLeft" className="h-4 w-4" />
            </button>
            <span className="text-[0.68rem] font-medium tabular-nums text-pine-950/45">
              {index + 1} / {projects.length}
            </span>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next project"
              className="grid h-11 w-11 place-items-center rounded-full border border-pine-950/15 text-pine-950 transition-colors hover:bg-pine-950/5"
            >
              <Icon name="chevronRight" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
