"use client";

import useOnRouteChange from "@/hooks/useOnRouteChange";
import Image from "next/image";
import NavLinksContainer from "./NavLinksContainer";

export default function MobileNavigation() {
  const [menuExpanded, setMenuExpanded] = useOnRouteChange<boolean>(false);
  const burgerWidth = 36;
  const burgerHeight = (burgerWidth * 634) / 600;
  const burgerIcon = `/icons/burger-${menuExpanded ? "on" : "off"}.svg`;

  function toggleNavLinks() {
    setMenuExpanded((state) => !state);
  }

  return (
    <>
      <button onClick={toggleNavLinks} className="md:hidden flex items-center justify-end">
        <Image src={burgerIcon} width={burgerWidth} height={burgerHeight} alt="burger" />
      </button>
      <div
        className={
          "px-5 pb-3 md:hidden w-full absolute left-0 bottom-0 translate-y-full col-span-2 pt-8 bg-natural-1" +
          (menuExpanded ? "" : " hidden")
        }
      >
        <NavLinksContainer />
      </div>
    </>
  );
}
