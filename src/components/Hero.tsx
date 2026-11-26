import { AREAS, IMG, PHONE, PHONE_HREF, STATS, TRUST_BADGES } from "../data";
import {
  IconBadge,
  IconHail,
  IconRoof,
  IconShield,
  PeakDivider,
} from "./icons";
import { CountUp, GhostBtn, InspectionForm, PrimaryBtn, Reveal, Stars } from "./ui";

const BADGE_ICONS: Record<string, typeof IconShield> = {
  licensed: IconShield,
  stars: IconBadge,
  storm: IconHail,
  warranty: IconRoof,
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* layered background */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="PeakLine Roofing crew installing a new roof under a clear Colorado sky"
          className="h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute inset-0 bg-shingle" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          {/* left — pitch */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="pulse-dot h-2 w-2 rounded-full bg-ember" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-ember-2">
                  Denver's storm-season roofing crew
                </span>
              </div>
              <h1 className="mt-6 font-display text-[clamp(3rem,7.2vw,6rem)] font-extrabold uppercase leading-[0.94] tracking-tight">
                Trusted Residential Roofing &amp; Exterior Remodeling in{" "}
                <span className="text-outline">Denver,&nbsp;CO</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-2">
                Fast, reliable roof repairs, full replacements, and storm damage restoration built to
                withstand Colorado weather — hail, snow load, and high-UV summers included.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryBtn href="#contact">Get Your Free Roof Inspection</PrimaryBtn>
                <GhostBtn dark href={PHONE_HREF}>
                  Call Now: {PHONE}
                </GhostBtn>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-11 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-linedark pt-7 sm:grid-cols-4">
                {TRUST_BADGES.map((b) => {
                  const Ic = BADGE_ICONS[b.id];
                  return (
                    <li key={b.id} className="group flex flex-col gap-2.5">
                      <Ic className="h-7 w-7 text-steel-2 transition-colors duration-300 group-hover:text-ember-2" />
                      <span className="font-mono text-[10px] font-medium uppercase leading-snug tracking-[0.14em] text-steel-2">
                        {b.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* right — quote form */}
          <Reveal delay={180} className="lg:col-span-5">
            <div className="corner-ticks relative bg-card p-7 shadow-[0_40px_80px_-30px_rgba(9,18,24,0.8)] sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4 border-b-2 border-ember pb-5">
                <div>
                  <p className="font-display text-[26px] font-bold uppercase leading-none text-ink">
                    Free Roof Inspection
                  </p>
                  <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-steel">
                    No obligation · Photo report included
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 border border-line px-2.5 py-2">
                  <Stars size="h-3 w-3" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-steel">
                    5.0 Rated
                  </span>
                </div>
              </div>
              <InspectionForm variant="hero" />
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
              <PeakDivider className="h-2.5 w-10 text-ember" />
              Serving all 9 Front Range communities
            </p>
          </Reveal>
        </div>
      </div>

      {/* service-area marquee */}
      <div className="relative -mx-6 -rotate-1 border-y-4 border-abyss bg-ember py-3">
        <div className="marquee-hover overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex items-center">
            {[...AREAS, ...AREAS].map((a, i) => (
              <span
                key={i}
                className="inline-flex items-center font-display text-[22px] font-bold uppercase tracking-[0.12em] text-abyss"
              >
                <span className="px-5">{a}</span>
                <PeakDivider className="h-3 w-12 text-abyss/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="relative border-b border-linedark bg-ink-2 bg-shingle text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="border-l border-linedark px-7 py-9 first:border-l-0 max-lg:[&:nth-child(3)]:border-l-0 max-lg:[&:nth-child(n+3)]:border-t max-lg:[&:nth-child(n+3)]:border-t-linedark"
          >
            <p className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-extrabold leading-none text-paper">
              <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-display text-[15px] font-bold uppercase tracking-[0.14em] text-ember-2">
              {s.label}
            </p>
            <p className="mt-1 text-[13px] text-steel-2">{s.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
