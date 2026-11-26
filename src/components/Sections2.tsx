import { useState } from "react";
import { cn } from "../utils/cn";
import {
  ADDRESS,
  APART_POINTS,
  AREAS,
  EMAIL,
  FAQS,
  IMG,
  PHONE,
  PHONE_HREF,
  REVIEWS,
} from "../data";
import {
  GoogleG,
  IconBadge,
  IconClock,
  IconHail,
  IconMail,
  IconPhone,
  IconPin,
  IconQuote,
  IconReceipt,
  LogoMark,
  PeakDivider,
} from "./icons";
import { InspectionForm, Reveal, SectionHead, Stars } from "./ui";

const APART_ICONS: Record<string, typeof IconBadge> = {
  badge: IconBadge,
  hail: IconHail,
  receipt: IconReceipt,
};

/* ================= REVIEWS ================= */

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink bg-shingle py-24 text-paper lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 hidden select-none font-display text-[22rem] font-extrabold leading-none text-paper/[0.03] lg:block"
      >
        5★
      </span>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead
            dark
            kicker="Google Reviews — 05"
            title={
              <>
                What Denver Homeowners <span className="text-ember">Say About Us</span>
              </>
            }
          />
          <Reveal delay={140}>
            <div className="flex items-center gap-5 border border-linedark bg-ink-2 px-6 py-5">
              <GoogleG className="h-10 w-10" />
              <div>
                <p className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold leading-none">4.9</span>
                  <Stars className="translate-y-[-4px]" />
                </p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-steel-2">
                  From 180+ verified Google reviews
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 110} className={cn(i === 1 && "lg:translate-y-10")}>
              <blockquote className="group relative flex h-full flex-col border border-linedark bg-ink-2 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/60">
                <IconQuote className="h-8 w-8 text-ember" />
                <Stars className="mt-4" />
                <p className="mt-4 flex-1 text-[16.5px] leading-relaxed text-paper/90">
                  “{r.quote}”
                </p>
                <footer className="mt-7 flex items-center gap-4 border-t border-linedark pt-5">
                  <span
                    className="flex h-11 w-11 items-center justify-center font-display text-[17px] font-bold text-paper"
                    style={{ backgroundColor: r.tint }}
                  >
                    {r.initials}
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-[17px] font-bold uppercase tracking-wide">
                      {r.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-2">
                      {r.city} · Verified Google Review
                    </p>
                  </div>
                  <GoogleG className="h-5 w-5 opacity-80" />
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-paper py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 hidden h-full w-full border-2 border-ember sm:block" aria-hidden />
            <img
              src={IMG.about}
              alt="Snow-dusted Denver Metro neighborhoods beneath the Front Range"
              loading="lazy"
              className="relative aspect-[4/3] w-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-ink px-3.5 py-2 font-display text-[15px] font-bold uppercase tracking-[0.14em] text-paper">
              Founded in Denver
            </span>
            <span className="absolute bottom-4 left-4 bg-paper px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
              Denver Metro — Front Range, Colorado
            </span>
          </div>
        </Reveal>

        <div>
          <SectionHead
            kicker="About PeakLine — 06"
            title={
              <>
                Built on Honesty, Craftsmanship &amp; <span className="text-ember">Colorado Grit</span>
              </>
            }
          />
          <Reveal delay={100}>
            <p className="mt-6 text-[16.5px] leading-relaxed text-steel">
              PeakLine Roofing was founded in Denver with a simple mission: to give local homeowners
              a roofing and exterior contractor they can actually trust. After seeing too many
              neighbors deal with slow communication, messy job sites, and high-pressure storm
              chasers, we set out to raise the standard for residential roofing across the Denver
              Metro area.
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {APART_POINTS.map((p, i) => {
              const Ic = APART_ICONS[p.icon];
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="group flex gap-5 border-l-2 border-line pl-5 transition-colors duration-300 hover:border-ember">
                    <Ic className="mt-0.5 h-7 w-7 shrink-0 text-steel transition-colors duration-300 group-hover:text-ember" />
                    <div>
                      <h3 className="font-display text-[20px] font-bold uppercase tracking-tight text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-steel">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-9 border-t border-line pt-7">
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-steel">
                Proudly Serving the Front Range
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {AREAS.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-1.5 border border-line bg-card px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-ember hover:text-ember"
                  >
                    <IconPin className="h-3.5 w-3.5 text-ember" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-line bg-paper-2 py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead
            kicker="Straight Answers — 07"
            title={
              <>
                Roofing Questions, <span className="text-ember">Answered Honestly</span>
              </>
            }
            sub="No fine print, no runaround. If your question isn't here, a real person answers the phone."
          />
          <Reveal delay={140}>
            <div className="mt-9 border-2 border-ink bg-card p-6 shadow-[6px_6px_0_0_var(--color-ember)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                Prefer to talk it through?
              </p>
              <a
                href={PHONE_HREF}
                className="mt-2 block font-display text-3xl font-extrabold tracking-tight text-ink transition-colors hover:text-ember"
              >
                {PHONE}
              </a>
              <p className="mt-1.5 text-[14px] text-steel">Mon–Sat 7am–6pm · 24/7 storm line</p>
            </div>
          </Reveal>
        </div>

        <div>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[21px] font-bold uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-ember">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "relative h-9 w-9 shrink-0 border transition-all duration-300",
                      open === i ? "rotate-45 border-ember bg-ember" : "border-line bg-card",
                    )}
                    aria-hidden
                  >
                    <span
                      className={cn(
                        "absolute top-1/2 left-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2",
                        open === i ? "bg-white" : "bg-ink",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute top-1/2 left-1/2 h-4 w-[2px] -translate-x-1/2 -translate-y-1/2",
                        open === i ? "bg-white" : "bg-ink",
                      )}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-2xl pb-7 pl-9 text-[15.5px] leading-relaxed text-steel">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */

export function Contact({ preset }: { preset?: string }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink bg-shingle py-24 text-paper lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 hidden select-none font-display text-[20rem] font-extrabold leading-none text-paper/[0.03] lg:block"
      >
        CO
      </span>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHead
            dark
            kicker="Contact — 08"
            title={
              <>
                Get Your <span className="text-outline">Free Roof Inspection</span> Today
              </>
            }
            sub="Have a question, need a repair quote, or want us to check for hail damage? Reach out — we respond within 1 business hour."
          />

          <div className="mt-10 space-y-6">
            {[
              {
                icon: IconPhone,
                label: "Phone — Click to Call",
                value: PHONE,
                href: PHONE_HREF,
              },
              {
                icon: IconMail,
                label: "E-mail",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
              },
              {
                icon: IconPin,
                label: "Office Location",
                value: ADDRESS,
              },
            ].map((row, i) => (
              <Reveal key={row.label} delay={i * 80}>
                <div className="group flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-linedark text-steel-2 transition-colors duration-300 group-hover:border-ember group-hover:text-ember-2">
                    <row.icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-2">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="mt-1 block font-display text-[22px] font-bold tracking-tight text-paper transition-colors hover:text-ember-2"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-[22px] font-bold tracking-tight">
                        {row.value}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-9 border border-linedark bg-ink-2 p-6">
              <div className="flex items-center gap-3">
                <IconClock className="h-5 w-5 text-ember-2" />
                <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-steel-2">
                  Business Hours
                </p>
              </div>
              <p className="mt-3 font-display text-xl font-bold uppercase tracking-wide">
                Monday – Saturday · 7:00 AM – 6:00 PM
              </p>
              <p className="mt-2 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ember-2">
                <span className="pulse-dot h-2 w-2 rounded-full bg-ember" />
                24/7 Emergency Storm Response
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="corner-ticks bg-card p-7 text-ink shadow-[0_40px_90px_-30px_rgba(9,18,24,0.9)] sm:p-9">
            <div className="mb-7 flex items-center justify-between gap-4 border-b-2 border-ember pb-5">
              <div>
                <p className="font-display text-[26px] font-bold uppercase leading-none">
                  Request Your Inspection
                </p>
                <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel">
                  Free · Itemized report · Zero pressure
                </p>
              </div>
              <PeakDivider className="h-6 w-14 shrink-0 text-ember" />
            </div>
            <InspectionForm variant="contact" preset={preset} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

export function Footer() {
  return (
    <footer className="bg-abyss text-steel-2">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="group flex items-center gap-3">
              <LogoMark className="h-11 w-11 text-paper transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="leading-none">
                <span className="block font-display text-[28px] font-bold uppercase tracking-[0.04em] text-paper">
                  Peak<span className="text-ember-2">Line</span>
                </span>
                <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.3em] text-steel">
                  Roofing · Denver, CO
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed">
              Residential roofing and exterior remodeling built to withstand Colorado weather —
              honest inspections, itemized pricing, and crews that leave your yard cleaner than they
              found it.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-3 font-display text-2xl font-extrabold tracking-tight text-paper transition-colors hover:text-ember-2"
            >
              <IconPhone className="h-5 w-5 text-ember" />
              {PHONE}
            </a>
          </div>

          <nav aria-label="Services">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-steel">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Full Roof Replacement",
                "Storm & Hail Restoration",
                "Roof Repairs & Leak Detection",
                "Siding & Seamless Gutters",
                "Free Roof Inspections",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="link-underline text-[14.5px] text-steel-2 transition-colors hover:text-paper"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-steel">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Why PeakLine", "#why"],
                ["Project Gallery", "#gallery"],
                ["Google Reviews", "#reviews"],
                ["About Us", "#about"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="link-underline text-[14.5px] text-steel-2 transition-colors hover:text-paper"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-steel">
              Service Areas
            </p>
            <p className="mt-4 text-[14.5px] leading-loose">
              {AREAS.join(" · ")} — and surrounding Front Range communities.
            </p>
            <p className="mt-4 border-t border-linedark pt-4 font-mono text-[10px] uppercase tracking-[0.18em] leading-relaxed">
              {ADDRESS}
              <br />
              {EMAIL}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-linedark pt-7 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
            © 2026 PeakLine Roofing LLC · Licensed &amp; Insured in Colorado · Lic. #PL-248163
          </p>
          <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em]">
            Built for Colorado weather
            <PeakDivider className="h-2.5 w-10 text-ember" />
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center border border-linedark text-steel-2 transition-all hover:border-ember hover:text-ember-2"
            >
              ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
