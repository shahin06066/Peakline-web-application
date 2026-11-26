import { useCallback, useMemo, useState } from "react";
import {
  business,
  projectCategories,
  projects,
  type ProjectCategory,
} from "../lib/site";
import { Icon } from "../components/Icon";
import { Cta, FinalCta, PageHero, Reveal } from "../components/ui";
import { ProjectCard, ProjectLightbox } from "../components/ProjectCard";

type Filter = "All Projects" | ProjectCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All Projects");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All Projects" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  const countFor = (category: Filter) =>
    category === "All Projects"
      ? projects.length
      : projects.filter((project) => project.category === category).length;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((index) => (index === null ? null : (index - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const next = useCallback(
    () => setOpenIndex((index) => (index === null ? null : (index + 1) % filtered.length)),
    [filtered.length],
  );

  return (
    <>
      <PageHero
        breadcrumb="Projects"
        eyebrow="Project gallery"
        title={
          <>
            Recent roofing &amp; exterior projects across <span className="italic-accent">Denver.</span>
          </>
        }
        subtitle="Real homes, real craftsmanship. Browse some of our recent roof replacements, hail restorations, and exterior upgrades across the Front Range."
        actions={
          <>
            <Cta to="/contact">Start your project</Cta>
            <Cta href={business.phoneHref} variant="outline" leadingIcon="phone" arrow={false}>
              {business.phoneDisplay}
            </Cta>
          </>
        }
      >
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-pine-950/10 pt-5">
          {[
            ["200+", "Denver Metro projects"],
            ["5.0", "Average Google rating"],
            ["1–2 days", "Typical roof install"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-[1.35rem] leading-none text-pine-950">{value}</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-pine-950/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-bone-50">
        <div className="shell py-12 sm:py-16">
          <div className="flex flex-col gap-4 border-b border-pine-950/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-rule" />
                Browse the work
              </p>
              <p className="mt-2.5 text-[0.82rem] text-pine-950/50">
                {filtered.length} {filtered.length === 1 ? "project" : "projects"} shown
              </p>
            </div>
            <div
              role="group"
              aria-label="Filter projects by category"
              className="-mx-1 flex flex-wrap gap-1.5"
            >
              {projectCategories.map((category) => {
                const active = filter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setFilter(category as Filter);
                      setOpenIndex(null);
                    }}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.7rem] font-medium transition-colors ${
                      active
                        ? "border-pine-900 bg-pine-900 text-bone-50"
                        : "border-pine-950/15 bg-white text-pine-950/65 hover:border-pine-950/35 hover:text-pine-950"
                    }`}
                  >
                    {category}
                    <span
                      className={`text-[0.6rem] tabular-nums ${active ? "text-bone-100/55" : "text-pine-950/35"}`}
                    >
                      {countFor(category as Filter)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={`${filter}-${project.id}`} delay={Math.min(index, 5) * 60}>
                <ProjectCard project={project} onOpen={() => setOpenIndex(index)} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-pine-950/10 bg-bone-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-4">
              <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-pine-900 text-bone-50 sm:grid">
                <Icon name="roof" className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="font-display text-[1.3rem] leading-snug text-pine-950">
                  Your home could be next.
                </p>
                <p className="mt-1 max-w-md text-[0.82rem] leading-relaxed text-pine-950/55">
                  Every project starts with a free, documented inspection. No pressure, no obligation.
                </p>
              </div>
            </div>
            <Cta to="/contact" className="shrink-0">
              Get a free inspection
            </Cta>
          </div>

          <p className="mt-5 text-[0.68rem] leading-relaxed text-pine-950/40">
            Project photos and captions are representative samples provided for this website. Inspections
            always include documentation specific to your home.
          </p>
        </div>
      </section>

      {openIndex !== null ? (
        <ProjectLightbox
          projects={filtered}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      ) : null}

      <FinalCta
        title={
          <>
            Let&apos;s add your home to the <span className="italic-accent">neighborhood.</span>
          </>
        }
        body="Free roof inspection, honest documentation, and a written estimate. If your roof doesn't need replacing, we'll be the first to say so."
      />
    </>
  );
}
