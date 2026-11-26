import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { PHONE, PHONE_HREF, SERVICE_OPTIONS } from "../data";
import { IconArrowRight, IconCheck, IconPhone, IconStar } from "./icons";

/* ---------------- Scroll reveal ---------------- */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- Count-up stat ---------------- */

export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1500,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHead({
  kicker,
  title,
  sub,
  dark,
  className,
}: {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 bg-ember" aria-hidden />
        <span
          className={cn(
            "font-mono text-[11px] font-semibold uppercase tracking-[0.22em]",
            dark ? "text-ember-2" : "text-ember",
          )}
        >
          {kicker}
        </span>
        <span className={cn("h-px flex-1", dark ? "bg-linedark" : "bg-line")} aria-hidden />
      </div>
      <h2
        className={cn(
          "mt-5 font-display font-bold uppercase leading-[0.98] tracking-tight",
          "text-[clamp(2.2rem,4.6vw,3.6rem)]",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[17px] leading-relaxed",
            dark ? "text-steel-2" : "text-steel",
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- Buttons ---------------- */

export function PrimaryBtn({
  href,
  onClick,
  children,
  className,
  type,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
}) {
  const cls = cn(
    "group/btn inline-flex items-center justify-center gap-3 bg-ember px-6 py-3.5",
    "font-display text-[17px] font-bold uppercase tracking-[0.08em] text-white",
    "shadow-[0_12px_30px_-8px_rgba(240,90,14,0.55)] transition-all duration-300",
    "hover:-translate-y-0.5 hover:bg-ember-2 active:translate-y-0",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <IconArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </>
  );
  if (type === "submit")
    return (
      <button type="submit" onClick={onClick} className={cls}>
        {inner}
      </button>
    );
  return (
    <a href={href} onClick={onClick} className={cls}>
      {inner}
    </a>
  );
}

export function GhostBtn({
  href,
  dark,
  children,
  className,
}: {
  href: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 border px-6 py-3.5",
        "font-display text-[17px] font-bold uppercase tracking-[0.08em] transition-all duration-300",
        dark
          ? "border-linedark text-paper hover:border-ember hover:text-ember-2"
          : "border-ink/25 text-ink hover:border-ember hover:text-ember",
        className,
      )}
    >
      <IconPhone className="h-4 w-4" />
      {children}
    </a>
  );
}

export function Stars({ className, size = "h-4 w-4" }: { className?: string; size?: string }) {
  return (
    <div className={cn("flex items-center gap-1 text-ember", className)} aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <IconStar key={i} className={size} />
      ))}
    </div>
  );
}

/* ---------------- Inspection / quote form ---------------- */

export function InspectionForm({
  variant,
  preset,
}: {
  variant: "hero" | "contact";
  preset?: string;
}) {
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (preset) setService(preset);
  }, [preset]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1000);
  };

  const reset = () => {
    setStatus("idle");
    setName("");
  };

  if (status === "sent") {
    const first = name.trim().split(" ")[0];
    return (
      <div className="flex flex-col items-start gap-4 py-6" role="status">
        <span className="flex h-14 w-14 items-center justify-center bg-ember text-white">
          <IconCheck className="h-7 w-7" />
        </span>
        <p className="font-display text-3xl font-bold uppercase leading-none text-ink">
          Request received{first ? `, ${first}` : ""}!
        </p>
        <p className="text-[15.5px] leading-relaxed text-steel">
          An inspector will call you <strong className="text-ink">within 1 business hour</strong> to
          schedule your <strong className="text-ink">{service}</strong>. Keep an eye on your phone —
          it'll be a (303) number.
        </p>
        <div className="mt-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
          <span className="pulse-dot h-2 w-2 rounded-full bg-ember" />
          Ticket queued — Denver crew on standby
        </div>
        <button
          type="button"
          onClick={reset}
          className="link-underline mt-1 font-mono text-[12px] uppercase tracking-[0.16em] text-steel hover:text-ink"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  const compact = variant === "hero";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <label className="flabel" htmlFor={`${variant}-name`}>
            Full Name *
          </label>
          <input
            id={`${variant}-name`}
            className="field"
            required
            placeholder="John Homeowner"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div>
          <label className="flabel" htmlFor={`${variant}-phone`}>
            Phone Number *
          </label>
          <input
            id={`${variant}-phone`}
            className="field"
            required
            type="tel"
            placeholder="(303) 555-0000"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <label className="flabel" htmlFor={`${variant}-email`}>
            E-mail Address *
          </label>
          <input
            id={`${variant}-email`}
            className="field"
            required
            type="email"
            placeholder="you@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="flabel" htmlFor={`${variant}-addr`}>
            {compact ? "Property Address / Zip Code *" : "Street Address / City *"}
          </label>
          <input
            id={`${variant}-addr`}
            className="field"
            required
            placeholder={compact ? "80202" : "1450 Blake St, Denver"}
            autoComplete="street-address"
          />
        </div>
      </div>
      <div>
        <label className="flabel" htmlFor={`${variant}-service`}>
          {compact ? "Service Needed *" : "How Can We Help? *"}
        </label>
        <select
          id={`${variant}-service`}
          className="field"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {SERVICE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      {!compact && (
        <div>
          <label className="flabel" htmlFor={`${variant}-notes`}>
            Project Details / Notes
          </label>
          <textarea
            id={`${variant}-notes`}
            className="field min-h-24 resize-y"
            placeholder="Tell us about leaks, storm dates, or the look you're after…"
          />
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "group/btn inline-flex items-center justify-center gap-3 bg-ember px-6 py-4",
          "font-display text-lg font-bold uppercase tracking-[0.08em] text-white",
          "shadow-[0_12px_30px_-8px_rgba(240,90,14,0.55)] transition-all duration-300",
          "hover:-translate-y-0.5 hover:bg-ember-2 disabled:cursor-wait disabled:opacity-70",
        )}
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            <span>{compact ? "Get My Free Inspection" : "Claim My Free Inspection"}</span>
            <IconArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </>
        )}
      </button>
      <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-steel">
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ember" />
        No obligation · Response within 1 business hour
      </p>
    </form>
  );
}

/* ---------------- Call bar helpers ---------------- */

export function CallLink({ className, label = PHONE }: { className?: string; label?: string }) {
  return (
    <a href={PHONE_HREF} className={cn("inline-flex items-center gap-2", className)}>
      <IconPhone className="h-4 w-4" />
      {label}
    </a>
  );
}
