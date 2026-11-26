import { business, serviceAreas } from "../lib/site";
import { Icon } from "./Icon";
import { Cta, Reveal } from "./ui";

export function ServiceAreaSection() {
  return (
    <section className="relative overflow-hidden border-y border-pine-950/10 bg-sage-100">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] text-pine-800/[0.09]"
        viewBox="0 0 200 200"
        fill="none"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <ellipse
            key={index}
            cx="100"
            cy="100"
            rx={22 + index * 10}
            ry={16 + index * 8}
            stroke="currentColor"
            strokeWidth="0.9"
          />
        ))}
      </svg>

      <div className="shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            Where we work
          </div>
          <h2 className="display mt-5 max-w-xl text-balance text-[clamp(2rem,3.6vw,3.1rem)] text-pine-950">
            Proudly serving Denver and the Front Range.
          </h2>
          <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-pine-950/62">
            From Wash Park bungalows to Highlands Ranch exteriors, we know these neighborhoods, their
            roofs, and the weather they face. Local crews, local accountability.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-pine-950/12 bg-bone-50/70 px-3.5 py-2 text-[0.76rem] font-medium text-pine-950/75"
              >
                <Icon name="mapPin" className="h-3 w-3 text-clay-500" />
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-2xl bg-pine-950 p-7 text-bone-50 grain sm:p-8">
            <div className="dotgrid pointer-events-none absolute inset-0 opacity-25" />
            <div className="relative">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-bone-100/45">
                Local office
              </p>
              <p className="display mt-3 text-[1.55rem] leading-tight">
                {business.addressLine1}
                <br />
                {business.addressLine2}
              </p>
              <div className="mt-6 space-y-3.5 border-t border-bone-50/12 pt-5 text-[0.84rem] text-bone-100/70">
                <div className="flex items-start gap-2.5">
                  <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                  <span>
                    {business.hours} · {business.hoursTime}
                    <span className="block text-[0.72rem] text-bone-100/45">{business.emergency}</span>
                  </span>
                </div>
                <a href={business.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-bone-50">
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-clay-300" />
                  {business.phoneDisplay}
                </a>
                <a
                  href={business.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-bone-50"
                >
                  <Icon name="mapPin" className="h-4 w-4 shrink-0 text-clay-300" />
                  Get directions
                </a>
              </div>
              <Cta to="/contact" variant="light" size="sm" className="mt-6 w-full justify-center">
                Schedule an inspection
              </Cta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
