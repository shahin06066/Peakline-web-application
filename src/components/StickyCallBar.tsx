import { Cta } from "./ui";
import { business } from "../lib/site";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-bone-50/10 bg-pine-950/97 px-3 pb-[max(0.55rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Cta
          href={business.phoneHref}
          variant="ghost"
          size="sm"
          leadingIcon="phone"
          arrow={false}
          className="w-full px-2 tracking-[0.08em]"
        >
          {business.phoneDisplay}
        </Cta>
        <Cta to="/contact" variant="clay" size="sm" className="w-full">
          Free inspection
        </Cta>
      </div>
    </div>
  );
}
