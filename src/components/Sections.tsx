import { useState } from "react";
import { cn } from "../utils/cn";
import {
  AREAS,
  GALLERY_FILTERS,
  IMG,
  PHONE,
  PHONE_HREF,
  PROJECTS,
  SERVICES,
  STORM_STEPS,
  WHY_POINTS,
} from "../data";
import {
  IconAlert,
  IconArrowUpRight,
  IconBroom,
  IconCamera,
  IconClipboard,
  IconHammer,
  IconMap,
  IconPhone,
  IconReport,
  IconScope,
  PeakDivider,
} from "./icons";
import { GhostBtn, PrimaryBtn, Reveal, SectionHead } from "./ui";

const WHY_ICONS: Record<string, typeof IconMap> = {
  map: IconMap,
  camera: IconCamera,
  broom: IconBroom,
};

/* ================= MATERIALS STRIP ================= */

const BRANDS = [
  "GAF Timberline",
  "Owens Corning",
  "CertainTeed",
  "James Hardie®",
  "Decra® Stone-Coated",
  "Boral Steel",
];

export function MaterialsStrip() {
  return (
    <section aria-label="Materials we install" className="border-b border-line bg-card">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-7 lg:justify-between">
          <p className="flex items-center gap-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.24em] text-steel">
            <span className="h-2 w-2 bg-ember" aria-hidden />
            Premium Materials We Install
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {BRANDS.map((b, i) => (
              <li key={b} className="flex items-center gap-3">
                {i > 0 && <PeakDivider className="h-2 w-8 text-line" aria-hidden />}
                <span className="cursor-default font-display text-[19px] font-bold uppercase tracking-[0.06em] text-steel transition-all duration-300 hover:-translate-y-0.5 hover:text-ember">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

const STEP_ICONS: Record<string, typeof IconScope> = {
  scope: IconScope,
  report: IconReport,
  handshake: IconClipboard,
  hammer: IconHammer,
};

/* ================= SERVICES ================= */

export function Services({ onPick }: { onPick: (option: string) => void }) {
  return (
    <section id="services" className="relative bg-paper bg-blueprint py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            kicker="What We Do — 01"
            title={
              <>
                Complete Residential Roofing &amp; <span className="text-ember">Exterior Solutions</span>{" "}
                in Denver
              </>
            }
            sub="Durable materials, certified installation, and clear warranties built to protect your home year-round. Click any service to pre-fill your inspection request."
          />
          <Reveal delay={150} className="shrink-0 max-lg:hidden">
            <p className="border-l-2 border-ember pl-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-steel">
              Class 4 impact-rated systems
              <br />
              engineered for the Front Range
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <a
                href="#contact"
                onClick={() => onPick(s.option)}
                className="group grid items-center gap-x-8 gap-y-5 border-b border-line py-8 transition-colors duration-300 hover:bg-ink md:grid-cols-[70px_1fr_240px_56px] md:py-7 lg:gap-x-12"
              >
                <span className="font-display text-3xl font-bold text-ember transition-transform duration-300 group-hover:-translate-y-1 md:text-4xl">
                  {s.num}
                </span>

                <span className="block">
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-[26px] font-bold uppercase leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-paper md:text-3xl">
                      {s.title}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ember opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {s.cta} →
                    </span>
                  </span>
                  <span className="mt-2 block max-w-2xl text-[15.5px] leading-relaxed text-steel transition-colors duration-300 group-hover:text-steel-2">
                    {s.blurb}
                  </span>
                  <span className="mt-3.5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line bg-card px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-steel transition-colors duration-300 group-hover:border-linedark group-hover:bg-ink-2 group-hover:text-steel-2"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </span>

                <span className="relative hidden h-28 overflow-hidden md:block">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[45%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute inset-0 border border-line transition-colors duration-300 group-hover:border-ember" />
                </span>

                <span className="hidden h-12 w-12 items-center justify-center border border-line text-ink transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-white md:flex">
                  <IconArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
            <PeakDivider className="h-2.5 w-10 text-ember" />
            Every service backed by our workmanship warranty · Serving{" "}
            {AREAS.slice(0, 3).join(" · ")} &amp; beyond
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= STORM DAMAGE ================= */

export function Storm({ onPick }: { onPick: (option: string) => void }) {
  return (
    <section id="storm" className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <img
          src={IMG.storm}
          alt="Thunderstorm rolling over the Front Range"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="bg-rain absolute inset-0 opacity-70" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <SectionHead
          dark
          kicker="Storm & Hail Damage — 02"
          title={
            <>
              Denver Storm &amp; Hail Damage Restoration —{" "}
              <span className="text-outline">Fast, Honest &amp; Hassle-Free</span>
            </>
          }
          sub="Hit by a recent Front Range storm? We document every detail and guide you through the insurance claim process from start to finish."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STORM_STEPS.map((step, i) => {
            const Ic = STEP_ICONS[step.icon];
            return (
              <Reveal key={step.num} delay={i * 100}>
                <div className="group relative border-t-2 border-ember pt-6 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between">
                    <Ic className="h-9 w-9 text-steel-2 transition-colors duration-300 group-hover:text-ember-2" />
                    <span className="font-display text-5xl font-extrabold text-outline-steel">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[22px] font-bold uppercase leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-steel-2">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* emergency callout */}
        <Reveal delay={140}>
          <div className="mt-16 grid items-center gap-8 bg-ember px-8 py-9 text-abyss shadow-[0_30px_70px_-25px_rgba(240,90,14,0.6)] lg:grid-cols-[auto_1fr_auto] lg:px-10">
            <span className="relative flex h-16 w-16 items-center justify-center bg-abyss text-ember-2">
              <IconAlert className="h-8 w-8" />
              <span className="pulse-dot absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-ember-2" />
            </span>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-abyss/70">
                Emergency Tarping — 24/7 Callout
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold uppercase leading-none">
                Active leak after a storm?
              </h3>
              <p className="mt-2.5 max-w-2xl text-[15.5px] font-medium leading-relaxed text-abyss/80">
                We offer rapid emergency tarping across the Denver Metro area to prevent interior
                water damage while your claim is processed.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#contact"
                onClick={() => onPick("Storm/Hail Damage")}
                className="inline-flex items-center justify-center gap-3 bg-abyss px-7 py-4 font-display text-[16px] font-bold uppercase tracking-[0.08em] text-paper transition-all hover:-translate-y-0.5 hover:bg-ink-3"
              >
                Request Emergency Tarping
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-abyss px-7 py-[14px] font-display text-[16px] font-bold uppercase tracking-[0.08em] text-abyss transition-all hover:bg-abyss hover:text-ember-2"
              >
                <IconPhone className="h-4 w-4" />
                {PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= WHY PEAKLINE ================= */

export function Why() {
  return (
    <section id="why" className="bg-paper py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead
            kicker="The PeakLine Standard — 03"
            title={
              <>
                Why Homeowners Choose <span className="text-ember">PeakLine</span> Roofing
              </>
            }
            sub="After seeing too many neighbors deal with slow communication, messy job sites, and high-pressure storm chasers, we set out to raise the standard for residential roofing across the Denver Metro."
          />
          <Reveal delay={160}>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryBtn href="#contact">Schedule My Inspection</PrimaryBtn>
              <GhostBtn href={PHONE_HREF}>{PHONE}</GhostBtn>
            </div>
          </Reveal>
        </div>

        <div>
          {WHY_POINTS.map((p, i) => {
            const Ic = WHY_ICONS[p.icon];
            return (
              <Reveal key={p.num} delay={i * 110}>
                <div className="group flex gap-6 border-t border-line py-9 transition-transform duration-300 hover:translate-x-2 first:pt-2 last:border-b">
                  <span className="relative mt-1 flex h-16 w-16 shrink-0 items-center justify-center bg-ink text-paper transition-colors duration-300 group-hover:bg-ember">
                    <Ic className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 bg-ember px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-[0.1em] text-white transition-colors duration-300 group-hover:bg-ink">
                      {p.num}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-display text-[24px] font-bold uppercase leading-tight tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 max-w-lg text-[15.5px] leading-relaxed text-steel">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= GALLERY ================= */

export function Gallery() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]>("All Projects");
  const shown = PROJECTS.filter((p) => filter === "All Projects" || p.cat === filter);

  return (
    <section id="gallery" className="border-y border-line bg-paper-2 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            kicker="Project Gallery — 04"
            title={
              <>
                Recent Roofing &amp; Exterior Projects <span className="text-ember">Across Denver</span>
              </>
            }
            sub="Real homes, real craftsmanship. Browse some of our recent roof replacements, hail restorations, and exterior upgrades."
          />
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "border px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                  filter === f
                    ? "border-ink bg-ink text-paper shadow-[4px_4px_0_0_var(--color-ember)]"
                    : "border-line bg-card text-steel hover:border-ink hover:text-ink",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={filter} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal
              key={p.city}
              delay={i * 70}
              className={cn(i === 0 && filter === "All Projects" && "md:col-span-2")}
            >
              <figure className="group relative h-full min-h-[260px] overflow-hidden bg-ink">
                <img
                  src={p.img}
                  alt={`${p.city} — ${p.caption}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent" />
                <span className="absolute top-4 left-4 bg-paper/95 px-2.5 py-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink">
                  {p.cat}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="flex items-center gap-2 font-display text-[22px] font-bold uppercase tracking-tight text-paper">
                    {p.city}
                    <IconArrowUpRight className="h-4 w-4 text-ember-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </p>
                  <p className="mt-1 max-w-md text-[13.5px] leading-snug text-paper/80">{p.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
              Want your home featured here next?
            </p>
            <PrimaryBtn href="#contact">Start Your Project</PrimaryBtn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
