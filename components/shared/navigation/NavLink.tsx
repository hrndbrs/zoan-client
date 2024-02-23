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
			className={`flex items-center ` + (className ? className : "")}
			{...props}
		>
			<Link href={path} className="max-md:pb-8">
				{children}
			</Link>
		</li>
	);
}
