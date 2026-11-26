import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "shield"
  | "star"
  | "storm"
  | "warranty"
  | "roof"
  | "tools"
  | "siding"
  | "mapPin"
  | "camera"
  | "sparkle"
  | "badge"
  | "receipt"
  | "phone"
  | "arrowRight"
  | "arrowUpRight"
  | "check"
  | "mail"
  | "clock"
  | "menu"
  | "close"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "quote"
  | "send"
  | "alert"
  | "calendar"
  | "plus"
  | "minus"
  | "search";

const paths: Record<IconName, ReactNode> = {
  shield: (
    <>
      <path d="M12 3 5 6v5.2c0 4.4 2.9 8.1 7 9.8 4.1-1.7 7-5.4 7-9.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  star: (
    <path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.6Z" />
  ),
  storm: (
    <>
      <path d="M7 16a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17.2 9.2 3.5 3.5 0 0 1 17 16" />
      <path d="m12.5 11-3 5h3l-1 5 4-6h-3l1.5-4" />
    </>
  ),
  warranty: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <path d="m9.6 9 1.7 1.7 3.2-3.2" />
      <path d="m8.7 13.6-1.5 7 4.8-2.4 4.8 2.4-1.5-7" />
    </>
  ),
  roof: (
    <>
      <path d="M3 11.2 12 4l9 7.2" />
      <path d="M5.5 9.7V20h13V9.7" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a3.6 3.6 0 0 0 4.8 4.8l-8.4 8.4a2.6 2.6 0 0 1-3.7-3.7l8.4-8.4Z" />
      <path d="m6.4 5.2 3.2 3.2-1.5 1.5L4.9 6.7l1.5-1.5Z" />
    </>
  ),
  siding: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.4" />
      <path d="M3.5 9.3h17M3.5 14.1h17M9 4.5v4.8M15 9.3v4.8M9 14.1v5.4" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 8.5h3l1.4-2h8.2l1.4 2h3v11h-17v-11Z" />
      <circle cx="12" cy="13.6" r="3.4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 16.5 19.3 19l2.5.8-2.5.8-.8 2.5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8v-17Z" />
      <path d="M9 8.5h6M9 12h6M9 15.5h3" />
    </>
  ),
  phone: (
    <path d="M6.4 3.8h3l1.5 3.8-2.1 1.4a12.8 12.8 0 0 0 6.2 6.2l1.4-2.1 3.8 1.5v3a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.4 6a2 2 0 0 1 2-2.2Z" />
  ),
  arrowRight: (
    <>
      <path d="M4 12h15.5" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6.5L20.5 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronLeft: <path d="m14.5 6-6 6 6 6" />,
  chevronRight: <path d="m9.5 6 6 6-6 6" />,
  quote: (
    <path d="M9.5 6.5c-3.3 1-5.2 3.6-5.2 7.3V19h5.4v-5.6H6.8c.1-2 1.1-3.4 3.2-4.2l-.5-2.7Zm10 0c-3.3 1-5.2 3.6-5.2 7.3V19h5.4v-5.6h-2.9c.1-2 1.1-3.4 3.2-4.2l-.5-2.7Z" />
  ),
  send: (
    <>
      <path d="m3.5 12 17-8-5.5 17-3.2-7-8.3-2Z" />
      <path d="m11.8 14 4-4" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 21 20H3l9-16.5Z" />
      <path d="M12 9v5M12 17.2v.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3.5v4M16 3.5v4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.6, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export function GoogleMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.32 2.98-7.35Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.13H3.06v2.59A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.4 13.9a6 6 0 0 1 0-3.8V7.51H3.06a10 10 0 0 0 0 8.98L6.4 13.9Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.97c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.94 5.51L6.4 10.1C7.19 7.73 9.4 5.97 12 5.97Z"
      />
    </svg>
  );
}
