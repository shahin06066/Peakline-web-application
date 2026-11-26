import { useState } from "react";
import { business, faqs, services } from "../lib/site";
import { scrollToId } from "../lib/router";
import { Icon } from "../components/Icon";
import { CheckList, Cta, FinalCta, PageHero, Reveal, SectionHeading } from "../components/ui";

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-pine-950/10 border-y border-pine-950/10">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="flex w-full items-start justify-between gap-5 py-5 text-left"
              >
                <span className="font-display text-[1.1rem] leading-snug text-pine-950 sm:text-[1.2rem]">
                  {faq.q}
                </span>
                <span
                  className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                    isOpen
                      ? "border-pine-900 bg-pine-900 text-bone-50"
                      : "border-pine-950/15 text-pine-950/60"
                  }`}
                >
                  <Icon name={isOpen ? "minus" : "plus"} className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="pb-5 pr-10 text-[0.9rem] leading-relaxed text-pine-950/62"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Roofing & exterior services"
        title={
          <>
            Complete residential roofing &amp; exterior solutions in <span className="italic-accent">Denver.</span>
          </>
        }
        subtitle="Durable materials, certified installation, and clear warranties built to protect your home year-round."
        image="/images/project-arvada.jpg"
        imageAlt="Modern Arvada home with a standing seam metal roof"
        actions={
          <>
            <Cta to="/contact">Request an estimate</Cta>
            <Cta href={business.phoneHref} variant="outline" leadingIcon="phone" arrow={false}>
              {business.phoneDisplay}
            </Cta>
          </>
        }
      />

      <div className="sticky top-[4.6rem] z-20 border-b border-pine-950/10 bg-bone-50/95 backdrop-blur">
        <div className="shell flex items-center gap-2 overflow-x-auto py-3">
          <span className="mr-2 hidden shrink-0 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-pine-950/40 sm:block">
            Jump to
          </span>
          {services.map((service) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => scrollToId(service.slug)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-pine-950/12 bg-white px-3.5 py-2 text-[0.68rem] font-medium text-pine-950/70 transition-colors hover:border-pine-950/30 hover:text-pine-950"
            >
              <span className="tabular-nums text-clay-600">{service.number}</span>
              {service.title}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-bone-50">
        <div className="shell py-12 sm:py-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`grid scroll-mt-40 gap-9 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                index !== 0 ? "border-t border-pine-950/10" : "pb-12 pt-2 sm:pb-16 sm:pt-4"
              }`}
            >
              <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="overflow-hidden rounded-[1.4rem]">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-[20rem] w-full object-cover sm:h-[26rem]"
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-bone-50/95 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-pine-900 backdrop-blur">
                    Service {service.number}
                  </span>
                  <span className="absolute -bottom-4 right-5 grid h-14 w-14 place-items-center rounded-xl bg-pine-900 text-bone-50 shadow-lg">
                    <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                </div>
              </Reveal>

              <Reveal delay={80} className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="eyebrow">
                  <span className="eyebrow-rule" />
                  {service.title}
                </div>
                <h2 className="display mt-4 text-balance text-[clamp(1.9rem,3.2vw,2.7rem)] text-pine-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-[0.96rem] leading-relaxed text-pine-950/65">{service.description}</p>

                <div className="mt-6 rounded-xl border border-pine-950/10 bg-bone-100/70 p-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-pine-950/45">
                    {service.optionsLabel}
                  </p>
                  <div className="mt-3.5">
                    <CheckList items={service.options} columns={2} />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Cta to="/contact">{service.cta}</Cta>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-2 text-[0.78rem] font-medium text-pine-950/65 transition-colors hover:text-pine-950"
                  >
                    <Icon name="phone" className="h-3.5 w-3.5 text-clay-600" />
                    Ask a question
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 text-bone-50 grain">
        <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-25" />
        <div className="shell relative py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-rule" />
                The PeakLine standard
              </div>
              <h2 className="display mt-4 max-w-md text-balance text-[clamp(1.9rem,3.2vw,2.7rem)]">
                Every install includes the details that matter.
              </h2>
              <p className="mt-4 max-w-md text-[0.92rem] leading-relaxed text-bone-100/60">
                The parts most homeowners never see are the parts we obsess over. It&apos;s how a roof
                performs in year ten, not just on install day.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {[
                ["Photo documentation", "Before, during, and after — with clear explanations."],
                ["Itemized written quote", "Materials, labor, and scope. No hidden fees."],
                ["Magnetic nail sweep", "Every job, every time. Your yard stays safe."],
                ["Workmanship warranty", "Standing behind the installation, not just the shingle."],
              ].map(([title, body], index) => (
                <Reveal key={title} delay={index * 60}>
                  <div className="flex gap-3.5 border-t border-bone-50/15 pt-4">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-bone-50/10 text-clay-300">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[0.87rem] font-semibold text-bone-50">{title}</p>
                      <p className="mt-1 text-[0.78rem] leading-relaxed text-bone-100/55">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="shell py-16 sm:py-20">
          <SectionHeading
            eyebrow="Good questions"
            title="Straight answers, before you decide."
            body="If your question isn't here, call us. A real person on the Denver team will pick up — not a call center."
            action={
              <Cta href={business.phoneHref} variant="outline" leadingIcon="phone" arrow={false}>
                {business.phoneDisplay}
              </Cta>
            }
          />
          <div className="mt-9 max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <FinalCta
        title={
          <>
            Let&apos;s spec the right system for <span className="italic-accent">your home.</span>
          </>
        }
        body="Tell us what's happening up there. We'll inspect it, document it, and give you an itemized recommendation — free."
      />
    </>
  );
}
