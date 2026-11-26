import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

export type RoutePath =
  | "/"
  | "/about"
  | "/services"
  | "/storm-damage"
  | "/projects"
  | "/contact";

const validRoutes: RoutePath[] = [
  "/",
  "/about",
  "/services",
  "/storm-damage",
  "/projects",
  "/contact",
];

export function normalizePath(raw: string): RoutePath {
  const cleaned = (raw || "/").split("?")[0].replace(/\/+$/, "") || "/";
  return (validRoutes.includes(cleaned as RoutePath) ? cleaned : "/") as RoutePath;
}

export function currentPath(): RoutePath {
  if (typeof window === "undefined") return "/";
  return normalizePath(window.location.hash.replace(/^#/, ""));
}

export function useRoute(): RoutePath {
  const [path, setPath] = useState<RoutePath>(currentPath);

  useEffect(() => {
    const onHashChange = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return path;
}

export function navigate(to: string) {
  const next = `#${normalizePath(to)}`;
  if (window.location.hash === next) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = next;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children: ReactNode;
  onNavigate?: () => void;
}

export function Link({ to, children, onNavigate, onClick, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    onNavigate?.();
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={`#${normalizePath(to)}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
