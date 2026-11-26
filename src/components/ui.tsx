import { useEffect, useState, type ReactNode } from "react";
import { GoogleMark, Icon, type IconName } from "./Icon";
import { Link } from "../lib/router";

type Variant = "primary" | "outline" | "light" | "ghost" | "clay";

const variantClasses: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-light",
  ghost: "btn-ghost",
  clay: "btn-clay",
};

const sizeClasses = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

interface CtaProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizeClasses;
  className?: string;
  leadingIcon?: IconName;
  arrow?: boolean;
  onNavigate?: () => void;
  ariaLabel?: string;
}

export function Cta({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  leadingIcon,
  arrow = true,
  onNavigate,
  ariaLabel,
}: CtaProps) {
  const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    <>
      {leadingIcon ? <Icon name={leadingIcon} className="h-4 w-4" strokeWidth={1.8} /> : null}
      <span>{children}</span>
      {arrow ? <Icon name="arrowRight" className="h-4 w-4" strokeWidth={1.8} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onNavigate={onNavigate}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </a>
  );
}

export function Stars({
  count = 5,
  className = "h-3.5 w-3.5",
  color = "text-clay-500",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${color}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.6Z" />
        </svg>
      ))}
    </span>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setShown(true);
      return;
    }
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setShown(true);
      return;
    }
    let frame = 0;
    const timer = window.setTimeout(() => {
      frame = window.requestAnimationFrame(() => setShown(true));
    }, 40);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${Math.min(delay, 220)}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  className = "",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  dark?: boolean;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
          <span className="eyebrow-rule" />
          {eyebrow}
        </div>
        <h2
          className={`display mt-5 text-balance text-[clamp(2rem,3.6vw,3.15rem)] ${
            dark ? "text-bone-50" : "text-pine-950"
          }`}
        >
          {title}
        </h2>
        {body ? (
          <p
            className={`mt-5 max-w-xl text-[0.98rem] leading-relaxed ${
              dark ? "text-bone-100/65" : "text-pine-950/62"
            }`}
          >
            {body}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function CheckList({
  items,
  dark = false,
  columns = 1,
}: {
  items: string[];
  dark?: boolean;
  columns?: 1 | 2;
}) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
              dark ? "bg-bone-50/10 text-clay-300" : "bg-pine-900/[0.07] text-pine-700"
            }`}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={2.2} />
          </span>
          <span
            className={`text-[0.9rem] leading-relaxed ${dark ? "text-bone-100/75" : "text-pine-950/70"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function GoogleRating({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        dark ? "border-bone-50/15 bg-bone-50/[0.06]" : "border-pine-950/10 bg-white"
      }`}
    >
      <GoogleMark className="h-4 w-4" />
      <Stars className="h-3 w-3" />
      <span className={`text-[0.72rem] font-medium ${dark ? "text-bone-100/80" : "text-pine-950/70"}`}>
        5.0 · 47 Google reviews
      </span>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  actions,
  breadcrumb,
  children,
  align = "split",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
  breadcrumb: string;
  children?: ReactNode;
  align?: "split" | "center";
}) {
  return (
    <section className="relative overflow-hidden border-b border-pine-950/10 bg-bone-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sage-200/40 blur-3xl"
      />
      <div className="shell relative py-10 sm:py-14">
        <div className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-pine-950/45">
          <Link to="/" className="transition-colors hover:text-pine-950">
            Home
          </Link>
          <Icon name="chevronRight" className="h-3 w-3" />
          <span className="text-clay-600">{breadcrumb}</span>
        </div>

        <div
          className={
            image && align === "split"
              ? "mt-8 grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14"
              : "mt-8 max-w-3xl"
          }
        >
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              {eyebrow}
            </div>
            <h1 className="display mt-5 text-balance text-[clamp(2.35rem,4.6vw,4rem)] text-pine-950">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-6 max-w-xl text-[1.01rem] leading-relaxed text-pine-950/65">{subtitle}</p>
            ) : null}
            {actions ? <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div> : null}
            {children}
          </div>

          {image ? (
            <div className="relative">
              <div className="overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-35px_rgba(14,31,25,0.45)]">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  loading="eager"
                  className="h-[22rem] w-full object-cover sm:h-[27rem] lg:h-[31rem]"
                />
              </div>
              <div className="absolute -bottom-4 left-5 flex items-center gap-2 rounded-full bg-pine-950/90 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-bone-50 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-clay-400" />
                Owner-led · Denver, CO
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  eyebrow = "Free, no-obligation inspection",
  title,
  body,
}: {
  eyebrow?: string;
  title?: ReactNode;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-pine-950 text-bone-50 grain">
      <div
        aria-hidden="true"
        className="dotgrid pointer-events-none absolute inset-0 opacity-[0.35]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-clay-500/15 blur-3xl"
      />
      <div className="shell relative py-16 sm:py-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="eyebrow eyebrow-dark">
              <span className="eyebrow-rule" />
              {eyebrow}
            </div>
            <h2 className="display mt-5 max-w-2xl text-balance text-[clamp(2.1rem,4.2vw,3.6rem)]">
              {title ?? (
                <>
                  Your roof has a story.
                  <br />
                  Let&apos;s make it a <span className="italic-accent">good one.</span>
                </>
              )}
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-bone-100/65">
              {body ??
                "Schedule your free, no-obligation roof inspection today. We'll document exactly what's happening up there — and give you a clear, honest next step."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Cta to="/contact" variant="light" size="lg" className="justify-center">
              Get your free inspection
            </Cta>
            <Cta
              href="tel:+13035550194"
              variant="ghost"
              size="lg"
              leadingIcon="phone"
              arrow={false}
              className="justify-center"
            >
              (303) 555-0194
            </Cta>
            <p className="mt-1 text-center text-[0.7rem] uppercase tracking-[0.14em] text-bone-100/40 lg:text-left">
              We respond within 1 business hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
