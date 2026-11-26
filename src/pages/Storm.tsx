import { business, stormSteps } from "../lib/site";
import { Link } from "../lib/router";
import { Icon } from "../components/Icon";
import { Cta, PageHero, Reveal, SectionHeading } from "../components/ui";
import { InspectionForm } from "../components/InspectionForm";

const reassurances = [
  { icon: "mapPin" as const, title: "Local, not storm chasers", body: "We live and work in the Denver Metro — and we'll be here after the claim closes." },
  { icon: "camera" as const, title: "Documented, not exaggerated", body: "Clear photo and video proof of legitimate damage. No inflated claims." },
  { icon: "badge" as const, title: "We meet your adjuster", body: "On-site with your insurance adjuster so nothing is under-scoped." },
];

export default function Storm() {
  return (
    <>
      <PageHero
        breadcrumb="Storm Damage"
        eyebrow="Storm & hail damage restoration"
        title={
          <>
            Denver storm &amp; hail damage restoration — fast, honest &amp;{" "}
            <span className="italic-accent">hassle-free.</span>
          </>
        }
        subtitle="Hit by a recent Front Range storm? We document every detail and guide you through the insurance claim process from start to finish."
        image="/images/storm-damage.jpg"
        imageAlt="Hail-damaged shingles being inspected on a roof after a Front Range storm"
        actions={
          <>
            <Cta to="/contact" variant="clay">
              Request emergency tarping
            </Cta>
            <Cta href={business.phoneHref} variant="outline" leadingIcon="phone" arrow={false}>
              {business.phoneDisplay}
            </Cta>
          </>
        }
      >
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] font-medium text-pine-950/55">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-clay-500" />
            </span>
            Active leaks answered 24/7
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="check" className="h-3.5 w-3.5 text-pine-700" /> Free inspection
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="check" className="h-3.5 w-3.5 text-pine-700" /> Insurance claim support
          </span>
        </div>
      </PageHero>

      <section className="border-b border-pine-950/10 bg-white">
        <div className="shell grid gap-0 py-2 sm:grid-cols-3 sm:divide-x sm:divide-pine-950/10">
          {reassurances.map((item) => (
            <div key={item.title} className="flex gap-3.5 py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sage-100 text-pine-700">
                <Icon name={item.icon} className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[0.82rem] font-semibold text-pine-950">{item.title}</p>
                <p className="mt-1 text-[0.75rem] leading-relaxed text-pine-950/55">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our 4-step storm process"
            title="From first inspection to final nail sweep."
            body="A storm claim can feel like a second storm. We take it one documented, no-surprise step at a time."
            action={
              <Cta href={business.phoneHref} variant="outline" leadingIcon="phone" arrow={false}>
                {business.phoneDisplay}
              </Cta>
            }
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stormSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-pine-950/10 bg-white p-6 transition-shadow hover:shadow-[0_26px_50px_-34px_rgba(14,31,25,0.55)] sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage-100 text-pine-800">
                      <Icon
                        name={(["search", "receipt", "badge", "roof"] as const)[index] ?? "check"}
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </span>
                    <span className="font-display text-[2.4rem] leading-none text-pine-950/[0.09]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-[1.35rem] leading-snug text-pine-950">{step.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-pine-950/60">{step.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-clay-600">
                    Step {index + 1} of 4
                    <span className="h-px w-8 bg-clay-500/50" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-100">
        <div className="shell py-12 sm:py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-clay-500 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="flex gap-4">
                  <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15 sm:grid">
                    <Icon name="alert" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/65">
                      Emergency tarping
                    </p>
                    <h2 className="font-display mt-2 text-balance text-[1.7rem] leading-tight sm:text-[2.1rem]">
                      Active leak after a storm?
                    </h2>
                    <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-white/80">
                      We offer rapid emergency tarping across the Denver Metro area to prevent interior water
                      damage while your claim is processed. Call now — we answer 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                  <Cta href={business.phoneHref} variant="light" leadingIcon="phone" arrow={false}>
                    {business.phoneDisplay}
                  </Cta>
                  <Cta to="/contact" variant="ghost" className="border-white/40">
                    Request tarping
                  </Cta>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                Insurance claim support
              </div>
              <h2 className="display mt-4 text-balance text-[clamp(1.9rem,3.3vw,2.8rem)] text-pine-950">
                We make sure legitimate damage is <span className="italic-accent">properly scoped.</span>
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-pine-950/65">
                Hail doesn&apos;t always look dramatic from the ground. Bruised shingles, granule loss, and
                dented soft metals can quietly shorten the life of your roof — and get missed in a quick
                drive-by inspection.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-6">
              <ul className="grid gap-3">
                {[
                  "Free comprehensive inspection with photo & video proof",
                  "Itemized damage report you can hand to your insurer",
                  "On-site meeting with your insurance adjuster",
                  "Full restoration, cleanup, and final warranty walkthrough",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pine-900/[0.07] text-pine-700">
                      <Icon name="check" className="h-3 w-3" strokeWidth={2.2} />
                    </span>
                    <span className="text-[0.9rem] leading-relaxed text-pine-950/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-7 rounded-xl border border-pine-950/10 bg-white p-5">
                <p className="text-[0.82rem] leading-relaxed text-pine-950/65">
                  <strong className="font-semibold text-pine-950">A note on honesty:</strong> we do not inflate
                  claims or pressure you to replace a roof that can be repaired. If our inspection finds no
                  damage, we&apos;ll tell you that too.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Cta to="/contact">Get your free inspection</Cta>
                <Link
                  to="/projects"
                  className="link-underline self-center text-pine-950 transition-colors hover:text-clay-600"
                >
                  See storm restorations
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/project-littleton.jpg"
                  alt="Restored Littleton roof with new skylight flashing after storm damage"
                  loading="lazy"
                  className="h-[24rem] w-full object-cover sm:h-[30rem]"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-pine-950/10 bg-bone-50 px-4 py-3 shadow-lg sm:left-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-pine-900 text-bone-50">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[0.76rem] font-semibold text-pine-950">Claim-approved restoration</p>
                  <p className="text-[0.66rem] text-pine-950/50">Completed in one day · Littleton, CO</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-pine-950/10 bg-bone-100">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="After the storm"
            title="A simple checklist for the first 48 hours."
            body="Protect your home and your claim before the door-knockers show up."
          />
          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-pine-950/10 bg-bone-50 p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-pine-900 text-bone-50">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[1.3rem] text-pine-950">Do this first</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {[
                    "Photograph any interior leaks, stains, or damaged items.",
                    "Note the date and approximate time of the storm.",
                    "Keep receipts for any emergency repairs or tarping.",
                    "Call for a free, documented roof inspection.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.87rem] leading-relaxed text-pine-950/65">
                      <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-pine-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-pine-950/10 bg-bone-50 p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-clay-500 text-white">
                    <Icon name="close" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[1.3rem] text-pine-950">Please don&apos;t</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {[
                    "Climb onto a wet, steep, or damaged roof yourself.",
                    "Sign anything from a door-to-door storm chaser.",
                    "Accept a verbal scope with no written itemization.",
                    "Wait on an active leak — call for emergency tarping.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.87rem] leading-relaxed text-pine-950/65">
                      <Icon name="close" className="mt-1 h-3.5 w-3.5 shrink-0 text-clay-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 text-bone-50 grain">
        <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-25" />
        <div className="shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="eyebrow eyebrow-dark">
              <span className="eyebrow-rule" />
              Storm response
            </div>
            <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2rem,3.8vw,3.2rem)]">
              Don&apos;t let a small leak become a <span className="italic-accent">big bill.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-bone-100/65">
              Send us the details and we&apos;ll get an inspector out — usually within one business day. If
              your roof is actively leaking, call us and tell us it&apos;s an emergency.
            </p>
            <div className="mt-8 space-y-4 border-t border-bone-50/15 pt-6">
              <a href={business.phoneHref} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-bone-50/15 bg-bone-50/[0.06] text-clay-300">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-bone-100/45">
                    24/7 storm line
                  </span>
                  <span className="font-display text-[1.25rem]">{business.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-bone-50/15 bg-bone-50/[0.06] text-clay-300">
                  <Icon name="clock" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-bone-100/45">
                    Regular hours
                  </span>
                  <span className="text-[0.88rem] text-bone-100/75">
                    {business.hours} · {business.hoursTime}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <InspectionForm defaultService="Hail / Storm Damage" />
        </div>
      </section>
    </>
  );
}
