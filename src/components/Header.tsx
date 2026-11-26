import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { PHONE, PHONE_HREF } from "../data";
import { IconMenu, IconPhone, IconX, LogoMark } from "./icons";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Storm Damage", href: "#storm" },
  { label: "Projects", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function TopBar() {
  return (
    <div className="hidden bg-abyss text-steel-2 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 font-mono text-[10.5px] uppercase tracking-[0.18em]">
        <p className="flex items-center gap-2">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ember" />
          Licensed &amp; Insured in Colorado — Lic. #PL-248163
        </p>
        <div className="flex items-center gap-6">
          <span className="text-steel">Mon–Sat 7am–6pm · 24/7 Storm Response</span>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-paper transition-colors hover:text-ember-2"
          >
            <IconPhone className="h-3.5 w-3.5 text-ember" />
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-linedark bg-ink/95 shadow-[0_12px_40px_-12px_rgba(9,18,24,0.7)] backdrop-blur-sm"
          : "border-transparent bg-ink",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
        <a href="#top" className="group flex items-center gap-3" aria-label="PeakLine Roofing — home">
          <LogoMark className="h-10 w-10 text-paper transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="leading-none">
            <span className="block font-display text-[26px] font-bold uppercase tracking-[0.04em] text-paper">
              Peak<span className="text-ember-2">Line</span>
            </span>
            <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.3em] text-steel-2">
              Roofing · Denver, CO
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline font-display text-[15.5px] font-semibold uppercase tracking-[0.1em] text-steel-2 transition-colors hover:text-paper"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2.5 border border-linedark px-4 py-2.5 font-display text-[15px] font-bold uppercase tracking-[0.08em] text-paper transition-all hover:border-ember hover:text-ember-2 md:inline-flex"
          >
            <IconPhone className="h-4 w-4 text-ember" />
            {PHONE}
          </a>
          <a
            href="#contact"
            className="hidden bg-ember px-5 py-3 font-display text-[15px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_28px_-8px_rgba(240,90,14,0.6)] transition-all hover:-translate-y-0.5 hover:bg-ember-2 sm:inline-block"
          >
            Free Inspection
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-linedark text-paper lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden border-linedark bg-ink transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-linedark py-3.5 font-display text-xl font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:text-ember-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 bg-ember px-5 py-3.5 text-center font-display text-lg font-bold uppercase tracking-[0.08em] text-white"
            >
              Get Your Free Inspection
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

/** Sticky mobile call-to-action bar (per spec) */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-linedark bg-abyss/95 backdrop-blur-sm md:hidden">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2.5 py-4 font-display text-[16px] font-bold uppercase tracking-[0.08em] text-paper"
      >
        <IconPhone className="h-4.5 w-4.5 text-ember-2" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center bg-ember py-4 font-display text-[16px] font-bold uppercase tracking-[0.08em] text-white"
      >
        Free Inspection
      </a>
    </div>
  );
}
