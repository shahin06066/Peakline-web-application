import { useCallback, useState } from "react";
import { Header, MobileCallBar, TopBar } from "./components/Header";
import { Hero, StatsBand } from "./components/Hero";
import { Gallery, MaterialsStrip, Services, Storm, Why } from "./components/Sections";
import { About, Contact, Faq, Footer, Reviews } from "./components/Sections2";

export default function App() {
  // Service picked from any CTA flows into the inspection form's dropdown.
  const [preset, setPreset] = useState<string | undefined>(undefined);
  const pick = useCallback((option: string) => setPreset(option), []);

  return (
    <div className="pb-[68px] md:pb-0">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <MaterialsStrip />
        <Services onPick={pick} />
        <Storm onPick={pick} />
        <Why />
        <Gallery />
        <Reviews />
        <About />
        <Faq />
        <Contact preset={preset} />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
