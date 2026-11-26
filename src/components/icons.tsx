import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

export function LogoMark(props: P) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M3 26.5 L13 6 L19 17 L23 10.5 L29 26.5 Z" stroke="currentColor" strokeWidth="2.6" />
      <path d="M13 6 L16.1 11.7 L13 14.8 L9.9 11.7 Z" fill="#f05a0e" stroke="none" />
      <path d="M1.5 26.5 H30.5" stroke="#f05a0e" strokeWidth="2.6" />
    </svg>
  );
}

export function IconShield(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5 4.5 5.5v6.2c0 4.6 3.2 8 7.5 9.8 4.3-1.8 7.5-5.2 7.5-9.8V5.5L12 2.5Z" />
      <path d="m8.8 11.8 2.3 2.4 4.2-4.6" stroke="#f05a0e" strokeWidth="2" />
    </svg>
  );
}

export function IconStar(props: P) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 1.5 12.6 7l6 .6-4.5 4 1.3 5.9L10 14.4l-5.4 3.1L5.9 11.6l-4.5-4 6-.6L10 1.5Z" />
    </svg>
  );
}

export function IconHail(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 14.5A4 4 0 0 1 7 6.6a5 5 0 0 1 9.6 1.5 3.4 3.4 0 0 1 .4 6.4" />
      <circle cx="8" cy="18" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12.2" cy="20" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.2" cy="18" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBadge(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 14 4.6l2.7-.3 1 2.5 2.4 1.2-.6 2.6 1.5 2.2-1.9 1.9.1 2.7-2.6.8-1.5 2.3-2.6-.8-2.3 1.4-2-1.9-2.7.1-.9-2.6-2.4-1.3.7-2.6L1.4 11l1.7-2.2L3 6.1l2.6-.6L7.3 3l2.6.6 2.1-.8Z" />
      <path d="m9 12 2.1 2.2L15.3 10" stroke="#f05a0e" strokeWidth="2" />
    </svg>
  );
}

export function IconPhone(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 3.5h4l1.6 4.4-2.2 1.8a13 13 0 0 0 6 6l1.8-2.2 4.3 1.6v4a1.6 1.6 0 0 1-1.8 1.6C9.6 19.9 4.1 14.4 3.4 5.3A1.6 1.6 0 0 1 4 3.5Z" />
    </svg>
  );
}

export function IconMail(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 6.2L21 7" />
    </svg>
  );
}

export function IconPin(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5S5 14.8 5 9.7a7 7 0 0 1 14 0c0 5.1-7 11.8-7 11.8Z" />
      <path d="m9 10 2-3.4 1.8 2.6 1.2-1.7 1.6 2.5" stroke="#f05a0e" strokeWidth="1.6" />
    </svg>
  );
}

export function IconClock(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.3l3.4 2" />
    </svg>
  );
}

export function IconArrowRight(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 18 18 6M8.5 6H18v9.5" />
    </svg>
  );
}

export function IconRoof(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 11.5 12 4l9.5 7.5" />
      <path d="M5 10v9.5h14V10" />
      <path d="M9.5 19.5v-5h5v5" />
    </svg>
  );
}

export function IconBolt(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 13.5A4 4 0 0 1 7 5.6a5 5 0 0 1 9.6 1.5 3.4 3.4 0 0 1 .4 6.4" />
      <path d="M12.5 12 9.5 17h3l-2 5 5.5-7h-3.2l1.7-3h-2Z" fill="#f05a0e" stroke="none" />
    </svg>
  );
}

export function IconWrench(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 7.5a4 4 0 0 1 5-5l-2.8 2.8 1.5 3 3 1.5L24 7a4 4 0 0 1-5 5L8.5 22.5a2 2 0 0 1-3-3L16 9" transform="scale(0.92) translate(0.5 0.5)" />
    </svg>
  );
}

export function IconSiding(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5.5h18M3 10h18M3 14.5h18M3 19h18" />
      <path d="M7 5.5V10M15 10v4.5M9 14.5V19" stroke="#f05a0e" strokeWidth="1.6" />
    </svg>
  );
}

export function IconMap(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20V6.5Z" />
      <path d="M9 4v13.5M15 6.5V20" />
      <path d="m10.5 12 1.6-2.8 1.2 1.8 1-1.4 1.2 2.4" stroke="#f05a0e" strokeWidth="1.6" />
    </svg>
  );
}

export function IconCamera(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7.5h4l1.8-2.5h6.4L17 7.5h4v11H3v-11Z" />
      <circle cx="12" cy="12.8" r="3.4" />
      <circle cx="12" cy="12.8" r="1" fill="#f05a0e" stroke="none" />
    </svg>
  );
}

export function IconBroom(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M19.5 3.5 12 11" />
      <path d="M12.5 10.5c-3.5.5-6 2.5-7.5 6l-1.5 4 4-1.5c3.5-1.5 5.5-4 6-7.5l-1-1Z" />
      <path d="m8 15 2 2M10.5 13l2 2" stroke="#f05a0e" strokeWidth="1.6" />
    </svg>
  );
}

export function IconScope(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
      <path d="m7.5 11.5 2-3.2 1.5 2.2 1.2-1.6 1.3 2.6" stroke="#f05a0e" strokeWidth="1.6" />
    </svg>
  );
}

export function IconReport(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2.5h9l4 4V21.5H6V2.5Z" />
      <path d="M15 2.5v4h4" />
      <path d="M9 11h7M9 14.5h7M9 18h4" />
      <path d="m9 7.8 1.2 1.2 2-2.2" stroke="#f05a0e" strokeWidth="1.6" />
    </svg>
  );
}

export function IconClipboard(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4.5" width="14" height="17" />
      <path d="M9 4.5V2.8h6v1.7" />
      <path d="M8.5 10h7M8.5 13.5h7" />
      <path d="m9 17.2 1.8 1.8 3.4-3.6" stroke="#f05a0e" strokeWidth="1.8" />
    </svg>
  );
}

export function IconHammer(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 7.5 4 17a2 2 0 0 0 3 3l9.5-9.5" />
      <path d="M12 5.5 15 2.5l6 6-3 3c-2.5 1-5.5-.5-6-3Z" />
    </svg>
  );
}

export function IconReceipt(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 2.5h14V21l-2.3-1.5L14.4 21l-2.4-1.5L9.6 21l-2.3-1.5L5 21V2.5Z" />
      <path d="M8.5 7h7M8.5 10.5h7M8.5 14h4" />
    </svg>
  );
}

export function IconAlert(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 1.8 20.5h20.4L12 3Z" />
      <path d="M12 9.5v5" strokeWidth="2.2" />
      <path d="M12 17.6v.4" strokeWidth="2.6" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5L19.5 6.5" strokeWidth="2.4" />
    </svg>
  );
}

export function IconQuote(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 5.5h6.5V12c0 4-2 6.4-6 7.3l-.9-2c2.3-.8 3.4-2 3.6-4H4V5.5Zm9.5 0H20V12c0 4-2 6.4-6 7.3l-.9-2c2.3-.8 3.4-2 3.6-4h-3.2V5.5Z" />
    </svg>
  );
}

export function IconMenu(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h10" strokeWidth="2.2" />
    </svg>
  );
}

export function IconX(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" strokeWidth="2.2" />
    </svg>
  );
}

export function GoogleG(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function PeakDivider(props: P) {
  return (
    <svg viewBox="0 0 40 10" fill="currentColor" {...props}>
      <path d="M0 10 8 0l6 7 4-4 8 7z" opacity="0.9" />
      <path d="M22 10 28 3l4 4 3-3 5 6z" opacity="0.45" />
    </svg>
  );
}
