"use client";

import { useEffect } from "react";
import useOnRouteChange from "@/hooks/useOnRouteChange";
import NavLinksContainer from "./NavLinksContainer";
import { BurgerSVG } from "@/components/shared/SVG";
import { cn } from "@/lib/utils";

type MobileNavigationType = {
  isVisible: boolean;
};

export default function MobileNavigation({ isVisible }: MobileNavigationType) {
  const [menuExpanded, setMenuExpanded] = useOnRouteChange<boolean>(false);

  function toggleNavLinks() {
    setMenuExpanded((state) => !state);
  }

  useEffect(() => {
    if (!isVisible) {
      setMenuExpanded(false);
    }
  }, [isVisible, setMenuExpanded]);

  return (
    <>
      <div className="flex flex-row-reverse items-center">
        <button onClick={toggleNavLinks} className="md:hidden flex items-center justify-end">
          <BurgerSVG isOpen={menuExpanded} />
        </button>
      </div>
      <div
        className={cn(
          "px-5 pb-3 md:hidden w-full absolute left-0 bottom-0 translate-y-full col-span-2 pt-8 bg-natural-1",
          menuExpanded ? "" : "hidden",
        )}
      >
        <NavLinksContainer />
      </div>
    </>
  );
}
