import { Link } from "../lib/router";

export function PeakMark({ className = "h-11 w-11", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const isLight = tone === "light";
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-[11px] ${
        isLight ? "bg-pine-900" : "bg-bone-50"
      } ${className}`}
    >
      <svg viewBox="0 0 32 32" fill="none" className="h-[55%] w-[55%]" aria-hidden="true">
        <path
          d="M4 19.2 16 7l12 12.2"
          stroke={isLight ? "#FBF8F1" : "#14291F"}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.3 19.5V26h13.4v-6.5"
          stroke="#BD6740"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 7v4.4" stroke="#BD6740" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Logo({
  onNavigate,
  tone = "dark",
  compact = false,
}: {
  onNavigate?: () => void;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      onNavigate={onNavigate}
      aria-label="PeakLine Roofing — home"
      className="group flex items-center gap-3"
    >
      <PeakMark className={compact ? "h-10 w-10" : "h-11 w-11"} />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.42rem] tracking-[-0.03em] ${
            tone === "light" ? "text-bone-50" : "text-pine-950"
          }`}
          style={{ fontVariationSettings: '"SOFT" 30, "WONK" 0' }}
        >
          PeakLine
        </span>
        <span
          className={`mt-1.5 block text-[0.52rem] font-semibold uppercase tracking-[0.3em] ${
            tone === "light" ? "text-bone-100/50" : "text-pine-900/50"
          }`}
        >
          Roofing · Denver
        </span>
      </span>
    </Link>
  );
}
