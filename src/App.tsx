import { useEffect } from "react";
import { useRoute, type RoutePath } from "./lib/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCallBar } from "./components/StickyCallBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Storm from "./pages/Storm";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const pageMeta: Record<RoutePath, { title: string; description: string }> = {
  "/": {
    title: "PeakLine Roofing | Residential Roofing & Exterior Remodeling in Denver, CO",
    description:
      "Trusted residential roofing and exterior remodeling in Denver, CO. Free roof inspections, storm and hail damage restoration, roof replacement, repairs, siding, and gutters. Licensed and insured.",
  },
  "/about": {
    title: "About PeakLine Roofing | Honest, Owner-Led Roofing in Denver",
    description:
      "Built on honesty, craftsmanship, and Colorado grit. Meet PeakLine Roofing — a local, owner-led Denver roofing and exterior contractor serving the Front Range.",
  },
  "/services": {
    title: "Roofing & Exterior Services in Denver | PeakLine Roofing",
    description:
      "Complete residential roofing and exterior solutions in Denver: full roof replacement, leak detection and repair, siding, and seamless gutters. Free estimates.",
  },
  "/storm-damage": {
    title: "Denver Storm & Hail Damage Restoration | PeakLine Roofing",
    description:
      "Fast, honest, hassle-free storm and hail damage restoration in Denver. Free inspections, insurance claim support, emergency tarping, and full roof restoration.",
  },
  "/projects": {
    title: "Project Gallery | Denver Roofing & Exterior Projects | PeakLine",
    description:
      "Browse recent roof replacements, storm and hail restorations, and siding and gutter projects completed by PeakLine Roofing across the Denver Metro.",
  },
  "/contact": {
    title: "Free Roof Inspection in Denver | Contact PeakLine Roofing",
    description:
      "Get your free roof inspection in Denver, CO. Call (303) 555-0194 or request an inspection online — we respond within 1 business hour. 24/7 emergency storm response.",
  },
};

function Page({ path }: { path: RoutePath }) {
  switch (path) {
    case "/about":
      return <About />;
    case "/services":
      return <Services />;
    case "/storm-damage":
      return <Storm />;
    case "/projects":
      return <Gallery />;
    case "/contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

export default function App() {
  const path = useRoute();

  useEffect(() => {
    const meta = pageMeta[path];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", meta.description);
  }, [path]);

  return (
    <div className="flex min-h-screen flex-col bg-bone-50">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus();
          main?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pine-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-bone-50"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} key={path} className="page-enter flex-1 outline-none">
        <Page path={path} />
      </main>

      <Footer />
      <div aria-hidden="true" className="h-[4.4rem] bg-pine-950 md:hidden" />
      <StickyCallBar />
    </div>
  );
}
