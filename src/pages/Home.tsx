import { Link } from "../lib/router";
import {
  business,
  projects,
  reviews,
  services,
  stats,
  stormSteps,
  trustBadges,
  whyPeakLine,
} from "../lib/site";
import { GoogleMark, Icon } from "../components/Icon";
import {
  CheckList,
  Cta,
  FinalCta,
  GoogleRating,
  Reveal,
  SectionHeading,
  Stars,
} from "../components/ui";
import { InspectionForm } from "../components/InspectionForm";
import { ProjectCard } from "../components/ProjectCard";
import { ServiceAreaSection } from "../components/ServiceArea";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bone-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-32 h-[26rem] w-[26rem] rounded-full bg-sage-200/35 blur-3xl"
        />
        <div className="shell relative grid items-center gap-12 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-16">
          <div className="page-enter">
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Residential roofing & exterior remodeling
            </div>
            <h1 className="display mt-5 text-balance text-[clamp(2.55rem,5.2vw,4.35rem)] text-pine-950">
              Trusted residential roofing &amp; <span className="italic-accent">exterior remodeling</span> in
              Denver, CO.
            </h1>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-pine-950/65">
              Fast, reliable roof repairs, full replacements, and storm damage restoration — built to
              withstand Colorado weather.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta to="/contact" size="lg">
                Get your free roof inspection
              </Cta>
              <Cta
                href={business.phoneHref}
                variant="outline"
                size="lg"
                leadingIcon="phone"
                arrow={false}
              >
                {business.phoneDisplay}
              </Cta>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <GoogleRating />
              <p className="flex items-center gap-2 text-[0.72rem] font-medium text-pine-950/55">
                <Icon name="roof" className="h-4 w-4 text-pine-700" />
                200+ Denver Metro roofs restored
              </p>
            </div>
          </div>

          <div className="relative lg:pb-6">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-40 w-40 rounded-2xl border border-pine-950/12 lg:block"
            />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-pine-900 shadow-[0_40px_80px_-40px_rgba(14,31,25,0.55)]">
              <img
                src="/images/hero-roof.jpg"
                alt="Colorado craftsman home with a new charcoal architectural shingle roof and the Front Range in the distance"
                fetchPriority="high"
                className="h-[23rem] w-full object-cover sm:h-[30rem] lg:h-[36rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-pine-950/10" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-bone-50/92 px-3.5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-pine-900 backdrop-blur">
                <Icon name="shield" className="h-3.5 w-3.5 text-clay-600" />
                Licensed · Insured · Local
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-pine-950/70 px-3.5 py-2 text-[0.6rem] font-medium uppercase tracking-[0.13em] text-bone-50 backdrop-blur">
                Denver, CO
              </div>
            </div>

            <div className="relative z-10 mt-4 flex items-center gap-3 rounded-xl border border-pine-950/10 bg-white px-4 py-3.5 shadow-[0_20px_40px_-24px_rgba(14,31,25,0.4)] sm:absolute sm:-bottom-1 sm:left-5 sm:mt-0 sm:w-[15.5rem] sm:flex-col sm:items-start sm:gap-2 sm:px-5 sm:py-4">
              <div className="flex items-center gap-2">
                <GoogleMark className="h-4 w-4" />
                <Stars className="h-3 w-3" />
                <span className="text-[0.8rem] font-semibold text-pine-950">5.0</span>
              </div>
              <p className="text-[0.68rem] leading-relaxed text-pine-950/55">
                Rated 5.0 by Front Range homeowners on Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-pine-950/10 bg-white">
        <div className="shell grid grid-cols-1 divide-y divide-pine-950/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.label}
              className={`flex items-center gap-3.5 py-5 lg:px-6 ${
                index !== 0 ? "sm:border-l sm:border-pine-950/10" : ""
              } ${index === 2 ? "sm:border-l-0 lg:border-l" : ""} ${index === 0 ? "lg:pl-0" : ""} ${
                index === trustBadges.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-100 text-pine-700">
                <Icon name={badge.icon} className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-[0.8rem] font-semibold text-pine-950">{badge.label}</span>
                <span className="block text-[0.7rem] text-pine-950/50">{badge.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick quote */}
      <section id="quote" className="relative overflow-hidden bg-pine-950 text-bone-50 grain">
        <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-clay-500/10 blur-3xl"
        />
        <div className="shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="eyebrow eyebrow-dark">
              <span className="eyebrow-rule" />
              Start here
            </div>
            <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2.1rem,4vw,3.3rem)]">
              A free inspection.
              <br />
              A <span className="italic-accent">clear answer.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[0.96rem] leading-relaxed text-bone-100/65">
              Whether it&apos;s a leak you can&apos;t find, hail you can&apos;t see, or a roof that&apos;s simply
              lived a good life — we&apos;ll document exactly what&apos;s happening and tell you what it actually
              needs. No pressure, ever.
            </p>

            <div className="mt-7 max-w-md">
              <CheckList
                dark
                items={[
                  "Free, no-obligation roof inspection",
                  "Clear photo & video documentation",
                  "Honest repair-vs-replace guidance",
                ]}
              />
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-bone-50/12 pt-6">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-bone-50/15 bg-bone-50/[0.06] text-clay-300">
                <Icon name="phone" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-bone-100/45">
                  Prefer to talk it through?
                </p>
                <a
                  href={business.phoneHref}
                  className="font-display text-[1.3rem] text-bone-50 transition-colors hover:text-clay-300"
                >
                  {business.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <InspectionForm />
          </Reveal>
        </div>
      </section>

      {/* Positioning + stats */}
      <section className="bg-bone-50">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                Roofing, the honest way
              </div>
              <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2rem,3.6vw,3.1rem)] text-pine-950">
                Roofing that respects your home, your time, and your <span className="italic-accent">budget.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-[0.98rem] leading-relaxed text-pine-950/65 lg:pt-10">
                PeakLine Roofing was founded in Denver with a simple mission: to give local homeowners a
                roofing and exterior contractor they can actually trust. After seeing too many neighbors
                deal with slow communication, messy job sites, and high-pressure storm chasers, we set out
                to raise the standard for residential roofing across the Denver Metro area.
              </p>
              <Link
                to="/about"
                className="link-underline mt-5 text-pine-950 transition-colors hover:text-clay-600"
              >
                Meet PeakLine
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-pine-950/10 bg-pine-950/10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-bone-50 px-6 py-7 text-center sm:py-8">
                <p className="font-display text-[2.6rem] leading-none tracking-[-0.03em] text-pine-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-pine-950/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-pine-950/10 bg-bone-100">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Complete roofing &amp; exterior solutions for the Front Range.
              </>
            }
            body="From a single missing shingle to a full exterior transformation — one accountable local crew, start to finish."
            action={
              <Cta to="/services" variant="outline">
                Explore all services
              </Cta>
            }
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col rounded-2xl border border-pine-950/12 bg-bone-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-pine-900 hover:bg-pine-900 hover:shadow-[0_30px_50px_-30px_rgba(14,31,25,0.55)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage-200/70 text-pine-800 transition-colors duration-500 group-hover:bg-clay-500 group-hover:text-white">
                      <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-[0.95rem] tabular-nums text-pine-950/25 transition-colors duration-500 group-hover:text-bone-50/35">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-[1.5rem] leading-snug text-pine-950 transition-colors duration-500 group-hover:text-bone-50">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 max-w-md flex-1 text-[0.87rem] leading-relaxed text-pine-950/60 transition-colors duration-500 group-hover:text-bone-100/65">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-pine-800 transition-colors duration-500 group-hover:text-clay-300">
                    Learn more
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why PeakLine */}
      <section className="bg-bone-50">
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/crew-work.jpg"
                alt="A PeakLine roofing craftsman nailing architectural shingles on a Colorado roof"
                loading="lazy"
                className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
              />
            </div>
            <div className="relative z-10 -mt-10 ml-4 w-[calc(100%-2rem)] max-w-xs rounded-xl border border-pine-950/10 bg-bone-50 p-5 shadow-[0_24px_44px_-26px_rgba(14,31,25,0.45)] sm:absolute sm:-bottom-6 sm:right-5 sm:ml-0 sm:mt-0 sm:w-[16rem]">
              <div className="flex items-center gap-2 text-clay-600">
                <Icon name="badge" className="h-4 w-4" />
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em]">Owner-led, always</span>
              </div>
              <p className="mt-2.5 text-[0.8rem] leading-relaxed text-pine-950/60">
                Every project is quality-checked from the first inspection to the final walkthrough — by
                someone whose name is on the company.
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                The PeakLine difference
              </div>
              <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2rem,3.6vw,3.1rem)] text-pine-950">
                Why homeowners choose PeakLine Roofing.
              </h2>
            </Reveal>

            <div className="mt-9 divide-y divide-pine-950/10 border-y border-pine-950/10">
              {whyPeakLine.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="flex gap-4 py-5 sm:gap-5">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-pine-950/12 bg-white text-pine-700">
                      <Icon name={item.icon} className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[0.6rem] font-semibold tabular-nums tracking-[0.1em] text-clay-600">
                          {item.number}
                        </span>
                        <h3 className="font-display text-[1.2rem] leading-snug text-pine-950">{item.title}</h3>
                      </div>
                      <p className="mt-1.5 text-[0.87rem] leading-relaxed text-pine-950/60">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Cta to="/about" variant="outline">
                  Our approach
                </Cta>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-pine-950/70 transition-colors hover:text-pine-950"
                >
                  <Icon name="phone" className="h-3.5 w-3.5 text-clay-600" />
                  {business.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Storm feature */}
      <section className="relative overflow-hidden bg-pine-900 text-bone-50 grain">
        <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-20" />
        <div className="shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/storm-damage.jpg"
                alt="Hail damage inspection on a Colorado asphalt shingle roof under a clearing storm"
                loading="lazy"
                className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[32rem]"
              />
            </div>
            <div className="relative z-10 -mt-10 mr-4 ml-auto w-[calc(100%-2rem)] max-w-[17rem] rounded-xl border border-clay-300/25 bg-clay-500 p-5 text-white shadow-xl sm:absolute sm:-bottom-6 sm:left-5 sm:ml-0 sm:mt-0">
              <div className="flex items-center gap-2">
                <Icon name="alert" className="h-4 w-4" />
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em]">Storm emergency?</span>
              </div>
              <p className="mt-2 text-[0.86rem] leading-snug font-medium">
                Active leak? We offer rapid emergency tarping across the Denver Metro.
              </p>
              <a
                href={business.phoneHref}
                className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Call {business.phoneDisplay}
                <Icon name="arrowRight" className="h-3 w-3" />
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-rule" />
                Storm &amp; hail restoration
              </div>
              <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2rem,3.8vw,3.25rem)]">
                After the hail, we handle the <span className="italic-accent">hard part.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[0.96rem] leading-relaxed text-bone-100/65">
                We document every detail and guide you through the insurance claim process from start to
                finish. No storm chasers, no inflated claims — just a local crew that shows up.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {stormSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 70}>
                  <div className="flex gap-3.5 border-t border-bone-50/15 pt-4">
                    <span className="font-display text-[1.05rem] tabular-nums text-clay-300">{step.number}</span>
                    <div>
                      <h3 className="text-[0.88rem] leading-snug font-semibold text-bone-50">{step.title}</h3>
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-bone-100/55">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta to="/storm-damage" variant="light">
                  See our storm process
                </Cta>
                <Cta
                  href={business.phoneHref}
                  variant="ghost"
                  leadingIcon="phone"
                  arrow={false}
                >
                  Request emergency tarping
                </Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="bg-bone-50">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="Recent work"
            title="Real homes. Real craftsmanship."
            body="Browse a few recent roof replacements, hail restorations, and exterior upgrades across the Denver Metro."
            action={
              <Cta to="/projects" variant="outline">
                View project gallery
              </Cta>
            }
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-pine-950/10 pt-6 text-[0.72rem] text-pine-950/55">
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-3.5 w-3.5 text-pine-700" /> Magnetic nail sweep
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-3.5 w-3.5 text-pine-700" /> Daily site cleanup
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-3.5 w-3.5 text-pine-700" /> Workmanship warranty
            </span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-pine-950/10 bg-bone-100">
        <div className="shell py-16 sm:py-20">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                Google reviews
              </div>
              <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2rem,3.6vw,3.1rem)] text-pine-950">
                What Denver homeowners are saying.
              </h2>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-pine-950/10 bg-bone-50 px-5 py-4">
              <p className="font-display text-[2.4rem] leading-none text-pine-950">5.0</p>
              <div>
                <Stars className="h-3.5 w-3.5" />
                <p className="mt-1.5 flex items-center gap-1.5 text-[0.68rem] text-pine-950/55">
                  <GoogleMark className="h-3.5 w-3.5" />
                  47 Google reviews
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={index * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-pine-950/10 bg-bone-50 p-6">
                  <div className="flex items-center justify-between">
                    <Stars className="h-3.5 w-3.5" />
                    <GoogleMark className="h-4 w-4 opacity-80" />
                  </div>
                  <blockquote className="font-display mt-5 flex-1 text-[1.06rem] leading-[1.55] text-pine-950/85">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-pine-950/10 pt-4">
                    <p className="text-[0.82rem] font-semibold text-pine-950">{review.name}</p>
                    <p className="mt-0.5 text-[0.72rem] text-pine-950/50">
                      {review.city} · {review.project}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-[0.7rem] text-pine-950/45">
            Sample testimonials shown for layout and design purposes.
          </p>
        </div>
      </section>

      <ServiceAreaSection />
      <FinalCta />
    </>
  );
}
