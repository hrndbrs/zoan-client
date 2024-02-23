"use client";
import { useState } from "react";
import Image from "next/image";
import NavLinksContainer from "./NavLinksContainer";

export default function MobileNavigation() {
	const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
	const burgerWidth = 36;
	const burgerHeight = (burgerWidth * 634) / 600;
	const burgerIcon = `/icons/burger-${menuExpanded ? "on" : "off"}.svg`;

	function toggleNavLinks() {
		setMenuExpanded((state) => !state);
	}

	return (
		<>
			<button
				onClick={toggleNavLinks}
				className="sm:hidden flex items-center justify-end"
			>
				<Image
					src={burgerIcon}
					width={burgerWidth}
					height={burgerHeight}
					alt="burger"
				/>
			</button>
			<div className={"sm:hidden col-span-2" + (menuExpanded ? "" : " hidden")}>
				<NavLinksContainer />
			</div>
		</>
	);
}
