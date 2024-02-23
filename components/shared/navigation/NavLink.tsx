import Link from "next/link";

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
		<li
			className={
				`flex items-center max-md:mb-9 ` + (className ? className : "")
			}
			{...props}
		>
			<Link href={path}>{children}</Link>
		</li>
	);
}
