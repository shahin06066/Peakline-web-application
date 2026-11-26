import { business, promises, stats, values } from "../lib/site";
import { Icon } from "../components/Icon";
import { CheckList, Cta, FinalCta, PageHero, Reveal, SectionHeading } from "../components/ui";
import { ServiceAreaSection } from "../components/ServiceArea";

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Our story"
        title={
          <>
            Built on honesty, craftsmanship, and <span className="italic-accent">Colorado grit.</span>
          </>
        }
        subtitle="PeakLine Roofing was founded in Denver with a simple mission: to give local homeowners a roofing and exterior contractor they can actually trust."
        image="/images/project-highlandsranch.jpg"
        imageAlt="A Highlands Ranch home with new siding, stone-coated steel roofing, and clean gutters"
        actions={
          <>
            <Cta to="/contact">Schedule your free inspection</Cta>
            <Cta href={business.phoneHref} variant="outline" leadingIcon="phone" arrow={false}>
              {business.phoneDisplay}
            </Cta>
          </>
        }
      />

      <section className="bg-bone-50">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Why we started
            </div>
            <h2 className="display mt-5 text-balance text-[clamp(2rem,3.5vw,2.9rem)] text-pine-950">
              A local contractor you can actually trust.
            </h2>
            <div className="mt-7 rounded-2xl border border-pine-950/10 bg-white p-5">
              <div className="flex items-center gap-2 text-clay-600">
                <Icon name="badge" className="h-4 w-4" />
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em]">At a glance</span>
              </div>
              <dl className="mt-4 space-y-3 text-[0.8rem]">
                {[
                  ["Based in", "Denver, Colorado"],
                  ["Focus", "Residential roofing & exteriors"],
                  ["Materials", "Class 4 impact-resistant systems"],
                  ["Warranty", "Workmanship warranty on installs"],
                  ["Response", "Within 1 business hour"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 border-b border-pine-950/[0.07] pb-3 last:border-0 last:pb-0">
                    <dt className="text-pine-950/45">{label}</dt>
                    <dd className="text-right font-medium text-pine-950/80">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-[1rem] leading-[1.85] text-pine-950/70">
              <p className="first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:text-pine-900">
                PeakLine Roofing was founded in Denver with a simple mission: to give local homeowners a
                roofing and exterior contractor they can actually trust.
              </p>
              <p>
                After seeing too many neighbors deal with slow communication, messy job sites, and
                high-pressure storm chasers, we set out to raise the standard for residential roofing across
                the Denver Metro area. That meant doing a few things differently — and refusing to cut the
                corners that matter.
              </p>
              <p>
                Every project is owner-led. Every quote is itemized. Every crew is trained on the same
                standard we would want on our own homes. And every job ends with a magnetic nail sweep and a
                final walkthrough, not a handshake in the driveway and a disappearing act.
              </p>
              <p className="font-medium text-pine-950">
                One accountable local crew. From the first inspection to the final nail sweep.
              </p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-pine-950/10 bg-pine-950/10 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-bone-50 px-4 py-5">
                  <p className="font-display text-[1.7rem] leading-none text-pine-950">{stat.value}</p>
                  <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-pine-950/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-900 text-bone-50 grain">
        <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-20" />
        <div className="shell relative py-14 sm:py-16">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Icon name="quote" className="mx-auto h-8 w-8 text-clay-400" strokeWidth={0} fill="currentColor" />
            <blockquote className="font-display mt-6 text-balance text-[clamp(1.5rem,3vw,2.35rem)] leading-[1.3]">
              &ldquo;We set out to raise the standard for residential roofing across the Denver Metro area
              — with honest inspections, clean job sites, and work we&apos;re proud to put our name
              on.&rdquo;
            </blockquote>
            <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-bone-100/45">
              The PeakLine team · Denver, Colorado
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone-100">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="What sets us apart"
            title="The difference is in the details."
            body="Good roofing isn't a sales pitch. It's materials, process, and follow-through — the parts you can't always see until years later."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-pine-950/10 bg-bone-50 p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage-200/70 text-pine-800">
                      <Icon name={value.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-[0.95rem] tabular-nums text-pine-950/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-[1.35rem] leading-snug text-pine-950">{value.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-pine-950/60">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/crew-work.jpg"
                  alt="A PeakLine roofer installing architectural shingles by hand"
                  loading="lazy"
                  className="h-[24rem] w-full object-cover sm:h-[31rem]"
                />
              </div>
              <div className="absolute -bottom-5 right-4 w-44 rounded-xl border border-pine-950/10 bg-bone-50 p-4 shadow-lg sm:-right-5 sm:w-52">
                <div className="flex items-center gap-2">
                  <Icon name="warranty" className="h-4 w-4 text-clay-600" />
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-pine-950/55">
                    Built to last
                  </span>
                </div>
                <p className="mt-2 font-display text-[1.1rem] leading-snug text-pine-950">
                  Class 4 impact-resistant systems
                </p>
                <p className="mt-1 text-[0.68rem] leading-relaxed text-pine-950/50">
                  Engineered for Front Range hail and high winds.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                Our promise
              </div>
              <h2 className="display mt-5 text-balance text-[clamp(2rem,3.5vw,2.9rem)] text-pine-950">
                What every PeakLine homeowner gets.
              </h2>
              <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-pine-950/62">
                No fine print, no surprise add-ons. Just a written scope, a clean site, and a crew that
                treats your property like their own.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-7">
              <CheckList items={promises} />
            </Reveal>
            <Reveal delay={160} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Cta to="/contact">Schedule your inspection</Cta>
                <Cta to="/services" variant="outline">
                  Explore our services
                </Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceAreaSection />

      <FinalCta
        title={
          <>
            Ready to protect your home?
          </>
        }
        body="Schedule your free, no-obligation roof inspection today. Clear documentation, honest answers, and a local crew that stands behind the work."
      />
    </>
  );
}
