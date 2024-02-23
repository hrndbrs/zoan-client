import NavLinksContainer from "./NavLinksContainer";
import MobileNavigation from "./MobileNavigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NavigationMenu() {
	const logoWidth = 132;
	const logoHeight = (logoWidth * 65) / 425;

	return (
		<nav className="w-full py-3 px-5">
			<div className="inner-container items-stretch sm:justify-between gap-4 max-sm:grid max-sm:grid-cols-2">
				<div className="flex items-center">
					<Image
						src="/icons/zoan-h-dark.svg"
						height={logoHeight}
						width={logoWidth}
						alt="nav-logo"
					/>
				</div>
				<NavLinksContainer className="max-sm:hidden flex gap-8" />
				<Button className="max-sm:hidden bg-black text-white font-bold">
					Contact Us
				</Button>
				<MobileNavigation />
			</div>
		</nav>
	);
}
