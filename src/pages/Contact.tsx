import { business, serviceAreas } from "../lib/site";
import { Icon } from "../components/Icon";
import { Cta, PageHero, Reveal, Stars } from "../components/ui";
import { InspectionForm } from "../components/InspectionForm";

const steps = [
  { number: "01", title: "We call you back", body: "A real member of the Denver team responds within 1 business hour." },
  { number: "02", title: "Free inspection", body: "We inspect shingles, flashings, soft metals, and drainage — with photos." },
  { number: "03", title: "Clear next step", body: "You get an itemized written scope. Repair or replace, the choice is yours." },
];

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Free roof inspection"
        title={
          <>
            Get your free roof inspection <span className="italic-accent">today.</span>
          </>
        }
        subtitle="Have a question, need a repair quote, or want us to check for hail damage? Reach out — we respond within 1 business hour."
        actions={
          <>
            <Cta href={business.phoneHref} leadingIcon="phone" arrow={false}>
              Call {business.phoneDisplay}
            </Cta>
            <Cta href={business.emailHref} variant="outline" leadingIcon="mail">
              Email estimates
            </Cta>
          </>
        }
      >
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.7rem] font-medium text-pine-950/55">
          <span className="flex items-center gap-1.5">
            <Icon name="clock" className="h-3.5 w-3.5 text-pine-700" /> Reply within 1 business hour
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="shield" className="h-3.5 w-3.5 text-pine-700" /> Licensed &amp; insured in Colorado
          </span>
          <span className="flex items-center gap-2">
            <Stars className="h-3 w-3" /> 5.0 Google rated
          </span>
        </div>
      </PageHero>

      <section className="border-b border-pine-950/10 bg-bone-100">
        <div className="shell grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-pine-950/10 bg-bone-50 p-6 sm:p-7">
                <p className="eyebrow">
                  <span className="eyebrow-rule" />
                  Contact details
                </p>
                <div className="mt-5 space-y-5">
                  <a href={business.phoneHref} className="group flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage-100 text-pine-700">
                      <Icon name="phone" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-pine-950/40">
                        Phone · click to call
                      </span>
                      <span className="mt-0.5 block text-[1.02rem] font-semibold text-pine-950 transition-colors group-hover:text-clay-600">
                        {business.phoneDisplay}
                      </span>
                    </span>
                  </a>

                  <a href={business.emailHref} className="group flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage-100 text-pine-700">
                      <Icon name="mail" className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-pine-950/40">
                        Email
                      </span>
                      <span className="mt-0.5 block break-all text-[0.84rem] font-medium text-pine-950 transition-colors group-hover:text-clay-600">
                        {business.email}
                      </span>
                    </span>
                  </a>

                  <a
                    href={business.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3.5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage-100 text-pine-700">
                      <Icon name="mapPin" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-pine-950/40">
                        Office location
                      </span>
                      <span className="mt-0.5 block text-[0.86rem] font-medium text-pine-950 transition-colors group-hover:text-clay-600">
                        {business.addressLine1}
                        <br />
                        {business.addressLine2}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage-100 text-pine-700">
                      <Icon name="clock" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-pine-950/40">
                        Business hours
                      </span>
                      <span className="mt-0.5 block text-[0.86rem] font-medium text-pine-950">
                        {business.hours}: {business.hoursTime}
                      </span>
                      <span className="mt-0.5 block text-[0.76rem] text-pine-950/50">
                        {business.emergency}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl border border-pine-950/10 bg-pine-950 p-6 text-bone-50 sm:p-7">
                <div className="flex items-center gap-2 text-clay-300">
                  <Icon name="alert" className="h-4 w-4" />
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em]">
                    Storm emergency
                  </span>
                </div>
                <p className="font-display mt-3 text-[1.35rem] leading-snug">
                  Active leak? Don&apos;t wait for the claim.
                </p>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-bone-100/60">
                  Rapid emergency tarping across the Denver Metro to prevent interior water damage.
                </p>
                <Cta
                  href={business.phoneHref}
                  variant="clay"
                  size="sm"
                  leadingIcon="phone"
                  arrow={false}
                  className="mt-4 w-full justify-center"
                >
                  24/7 storm line
                </Cta>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-pine-950/10 bg-bone-50 p-6">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-pine-950/40">
                  Service area
                </p>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-pine-950/65">
                  Denver, Lakewood, Aurora, Littleton, Arvada, Westminster, Thornton, Centennial, Highlands
                  Ranch, and the surrounding Front Range.
                </p>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {serviceAreas.slice(0, 8).map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-pine-950/12 bg-white px-2.5 py-1 text-[0.66rem] text-pine-950/60"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60} className="scroll-mt-32" >
            <div id="inspection-form">
              <InspectionForm variant="full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="shell py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-rule" />
                What happens next
              </p>
              <h2 className="display mt-4 max-w-sm text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-pine-950">
                Three easy steps. Zero pressure.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 70}>
                  <div className="h-full border-t border-pine-950/15 pt-4">
                    <span className="font-display text-[0.9rem] tabular-nums text-clay-600">{step.number}</span>
                    <h3 className="mt-2 font-display text-[1.15rem] leading-snug text-pine-950">{step.title}</h3>
                    <p className="mt-1.5 text-[0.8rem] leading-relaxed text-pine-950/55">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 text-bone-50 grain">
        <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-20" />
        <div className="shell relative flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span className="eyebrow-rule" />
              Prefer to talk it through?
            </p>
            <h2 className="display mt-3 max-w-xl text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
              A real person. A local crew. A clear answer.
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Cta href={business.phoneHref} variant="light" leadingIcon="phone" arrow={false}>
              {business.phoneDisplay}
            </Cta>
            <Cta href={business.emailHref} variant="ghost" leadingIcon="mail">
              Email us
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
