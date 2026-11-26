import { useEffect, useState } from "react";
import { Link, useRoute } from "../lib/router";
import { business, navLinks } from "../lib/site";
import { Icon } from "./Icon";
import { Cta } from "./ui";
import { Logo } from "./Brand";

export function Header() {
  const path = useRoute();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="relative z-30 hidden bg-pine-950 text-bone-100/70 sm:block">
        <div className="shell flex items-center justify-between gap-6 py-2.5 text-[0.66rem] font-medium tracking-[0.04em]">
          <p className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-clay-400" />
            </span>
            <span className="text-bone-100/85">Denver Metro&apos;s owner-led roofing & exterior team</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-1.5 md:flex">
              <Icon name="clock" className="h-3.5 w-3.5 text-bone-100/45" />
              {business.emergency}
            </span>
            <a
              href={business.phoneHref}
              className="flex items-center gap-1.5 text-bone-50 transition-colors hover:text-clay-300"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-pine-950/10 bg-bone-50/92 backdrop-blur-md">
        <div className="shell flex h-[4.6rem] items-center justify-between gap-4">
          <Logo onNavigate={() => setOpen(false)} />

          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const active = path === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[0.79rem] font-medium tracking-[0.01em] transition-colors ${
                    active ? "text-pine-950" : "text-pine-950/60 hover:text-pine-950"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full bg-clay-500 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2.5 border-l border-pine-950/10 pl-5 pr-1 xl:flex"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-pine-900/[0.06] text-pine-800">
                <Icon name="phone" className="h-3.5 w-3.5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-pine-950/45">
                  Call us
                </span>
                <span className="block text-[0.82rem] font-semibold text-pine-950">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <Cta to="/contact" size="sm" className="hidden sm:inline-flex" arrow={false}>
              Free Inspection
            </Cta>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-pine-950/15 text-pine-950 transition-colors hover:bg-pine-950/[0.04] lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-4.6rem)] overflow-y-auto border-b border-pine-950/10 bg-bone-50 shadow-[0_30px_50px_-24px_rgba(14,31,25,0.35)] lg:hidden"
          >
            <div className="shell pb-28 pt-5">
              <nav aria-label="Mobile navigation" className="divide-y divide-pine-950/[0.08]">
                {navLinks.map((link) => {
                  const active = path === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onNavigate={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-3.5 text-[0.95rem] ${
                        active ? "text-clay-600" : "text-pine-950/80"
                      }`}
                    >
                      <span>{link.label}</span>
                      <Icon name="arrowUpRight" className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-5 grid gap-3">
                <Cta to="/contact" size="lg" onNavigate={() => setOpen(false)} className="w-full">
                  Get your free inspection
                </Cta>
                <Cta
                  href={business.phoneHref}
                  variant="outline"
                  size="lg"
                  leadingIcon="phone"
                  arrow={false}
                  className="w-full"
                >
                  Call {business.phoneDisplay}
                </Cta>
              </div>
              <p className="mt-4 flex items-center gap-2 text-[0.7rem] text-pine-950/50">
                <Icon name="clock" className="h-3.5 w-3.5" />
                {business.hours}, {business.hoursTime}
              </p>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
