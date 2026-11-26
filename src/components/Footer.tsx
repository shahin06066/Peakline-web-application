import { Link } from "../lib/router";
import { business, navLinks, serviceAreas, services } from "../lib/site";
import { Icon } from "./Icon";
import { PeakMark } from "./Brand";
import { Stars } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-pine-950 text-bone-100">
      <div aria-hidden="true" className="dotgrid pointer-events-none absolute inset-0 opacity-20" />
      <div className="shell relative">
        <div className="grid gap-10 border-b border-bone-50/10 py-14 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <PeakMark className="h-11 w-11" tone="dark" />
              <span className="leading-none">
                <span className="block font-display text-[1.45rem] tracking-[-0.03em] text-bone-50">
                  PeakLine
                </span>
                <span className="mt-1.5 block text-[0.52rem] font-semibold uppercase tracking-[0.3em] text-bone-100/45">
                  Roofing · Denver
                </span>
              </span>
            </div>
            <p className="mt-5 text-[0.87rem] leading-relaxed text-bone-100/60">
              Residential roofing and exterior remodeling built for Colorado weather. Owner-led,
              local, and honest — from the first inspection to the final nail sweep.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <Stars className="h-3 w-3" color="text-clay-300" />
              <span className="text-[0.72rem] text-bone-100/60">5.0 on Google · Denver, CO</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-bone-50/15 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-bone-100/65">
                Licensed & Insured
              </span>
              <span className="rounded-full border border-bone-50/15 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-bone-100/65">
                Class 4 Systems
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone-100/40">Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[0.85rem] text-bone-100/70 transition-colors hover:text-bone-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone-100/40">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services"
                    className="text-[0.85rem] leading-snug text-bone-100/70 transition-colors hover:text-bone-50"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/storm-damage"
                  className="text-[0.85rem] text-bone-100/70 transition-colors hover:text-bone-50"
                >
                  Emergency Tarping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone-100/40">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-[0.85rem] text-bone-100/70">
              <li>
                <a href={business.phoneHref} className="group flex items-start gap-2.5">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                  <span>
                    <span className="block text-[0.6rem] uppercase tracking-[0.14em] text-bone-100/35">Call or text</span>
                    <span className="font-medium text-bone-50 transition-colors group-hover:text-clay-300">
                      {business.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="group flex items-start gap-2.5">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                  <span className="break-all transition-colors group-hover:text-bone-50">
                    {business.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-2.5"
                >
                  <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                  <span className="transition-colors group-hover:text-bone-50">
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-clay-300" />
                <span>
                  {business.hours} · {business.hoursTime}
                  <span className="mt-0.5 block text-[0.72rem] text-bone-100/45">{business.emergency}</span>
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-bone-50 px-5 py-3 text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-pine-950 transition-colors hover:bg-clay-300"
            >
              Free inspection
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="border-b border-bone-50/10 py-5">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.73rem] leading-relaxed text-bone-100/45">
            <span className="text-bone-100/70">Proudly serving:</span>
            {serviceAreas.join(" · ")}
          </p>
        </div>

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] text-bone-100/40">
            © {year} PeakLine Roofing · Denver, Colorado. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] text-bone-100/40">
            <span className="flex items-center gap-1.5">
              <Icon name="shield" className="h-3.5 w-3.5" /> Licensed & insured in Colorado
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="transition-colors hover:text-bone-50"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
