import Link from "next/link";
import NavLinksContainer from "./NavLinksContainer";
import MobileNavigation from "./MobileNavigation";
import { Button } from "@/components/ui/button";
import LogoContainer from "../LogoContainer";

export default function NavigationMenu() {
  return (
    <nav className="relative w-full bg-natural-1 py-3 px-5 z-[1000]">
      <div className="inner-container">
        <div className="w-full grid grid-cols-4 max-md:grid-cols-2">
          <LogoContainer fileName="zoan-h-dark.svg" className="flex items-stretch" />
          <NavLinksContainer className="flex justify-center gap-8 col-span-2 max-md:hidden" />
          <div className="flex justify-end items-center max-md:hidden">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
}
