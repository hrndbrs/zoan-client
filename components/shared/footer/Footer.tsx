import Link from "next/link";
import {
	RiFacebookCircleFill,
	RiInstagramLine,
	RiLinkedinBoxFill,
} from "react-icons/ri";
import LogoContainer from "../logo-container/LogoContainer";
import NavLinksContainer from "../navigation/NavLinksContainer";
import { companyProfile } from "@/lib/mockData";

export default function Footer() {
	return (
		<footer className="bg-natural-9 px-5 py-20">
			<div className="inner-container flex-col text-natural-1 gap-20">
				<div className="w-full md:grid md:grid-cols-4">
					<LogoContainer
						fileName="zoan-h-light.svg"
						className="flex items-center max-md:mb-8 max-md:justify-center"
					/>
					<NavLinksContainer
						showButton={false}
						className="col-span-2 flex justify-center md:gap-6 max-md:flex-col max-md:items-center"
						navLinkProps={{ className: "font-bold" }}
					/>
					<div className="flex items-center gap-3 justify-end max-md:justify-center">
						<Link href={companyProfile.facebook}>
							<RiFacebookCircleFill size={24} />
						</Link>
						<Link href={companyProfile.instagram}>
							<RiInstagramLine size={24} />
						</Link>
						<Link href={companyProfile.linkedin}>
							<RiLinkedinBoxFill size={24} />
						</Link>
					</div>
				</div>
				<div className="w-full flex items-center justify-center border-t-[1px] pt-4">
					<div className="flex gap-6 text-xs max-md:grid max-md:grid-cols-2">
						<span className="text-center max-md:col-span-2">
							2024 Zoan All right reserved
						</span>
						<span className="text-center">Privacy Policy</span>
						<span className="text-center">Terms of Service</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
