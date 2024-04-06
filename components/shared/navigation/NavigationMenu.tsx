"use client";

import { forwardRef } from "react";
import Link from "next/link";
import DesktopLinksContainer from "./DesktopLinksContainer";
import MobileNavigation from "./MobileNavigation";
import { Button } from "@/components/ui/button";
import LogoContainer from "../LogoContainer";
import { cn } from "@/lib/utils";

interface NavigationMenuPropType {
  className?: string;
  fixed?: boolean;
  isVisible?: boolean;
}

const NavigationMenu = forwardRef<HTMLElement, NavigationMenuPropType>(
  ({ className, fixed = false, isVisible = true }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "w-full bg-natural-1 py-3 px-5 z-[1000]",
          fixed ? "navmenu-fixed" : "relative",
          className,
        )}
      >
        <div className="inner-container">
          <div className="w-full grid grid-cols-4 max-md:grid-cols-2">
            <LogoContainer fileName="zoan-h-dark.svg" className="flex items-stretch" />
            <DesktopLinksContainer
              className="flex justify-center gap-8 col-span-2 max-md:hidden"
              navLinkProps={{ className: "nav-link" }}
              isVisible={isVisible}
            />
            <div className="flex justify-end items-center max-md:hidden">
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
            </div>
            <MobileNavigation isVisible={isVisible} />
          </div>
        </div>
      </nav>
    );
  },
);
NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;

// export default function NavigationMenu({ className, fixed = false }: NavigationMenuPropType) {
//   return (
//     <nav
//       className={cn(
//         "w-full bg-natural-1 py-3 px-5 z-[1000]",
//         fixed ? "navmenu-fixed" : "relative",
//         className,
//       )}
//     >
//       <div className="inner-container">
//         <div className="w-full grid grid-cols-4 max-md:grid-cols-2">
//           <LogoContainer fileName="zoan-h-dark.svg" className="flex items-stretch" />
//           <DesktopLinksContainer
//             className="flex justify-center gap-8 col-span-2 max-md:hidden"
//             navLinkProps={{ className: "nav-link" }}
//             fixed={fixed}
//           />
//           <div className="flex justify-end items-center max-md:hidden">
//             <Link href="/contact-us">
//               <Button>Contact Us</Button>
//             </Link>
//           </div>
//           <MobileNavigation />
//         </div>
//       </div>
//     </nav>
//   );
// }
