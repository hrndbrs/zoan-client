import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps extends React.LiHTMLAttributes<{}> {
	path: string;
}

export default function NavLink({
	className,
	path,
	children,
	...props
}: NavLinkProps) {
	return (
		<li className={cn("flex", "items-center", className)} {...props}>
			<Link href={path} className="w-full max-md:pb-8">
				{children}
			</Link>
		</li>
	);
}
