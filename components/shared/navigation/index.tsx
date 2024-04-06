"use client";

import useVisibilityChecker from "@/hooks/useVisibilityChecker";
import NavigationMenu from "./NavigationMenu";

export default function Navigation() {
  const [menuRef, isMenuVisible] = useVisibilityChecker({ yOffset: 80 });
  const [fixedMenuRef, isFixedMenuVisible] = useVisibilityChecker();

  return (
    <>
      <NavigationMenu ref={menuRef} isVisible={isMenuVisible} />
      {!isMenuVisible ? (
        <NavigationMenu ref={fixedMenuRef} isVisible={isFixedMenuVisible} fixed />
      ) : undefined}
    </>
  );
}
