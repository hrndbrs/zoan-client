import { Button } from "@/components/ui/button";
import NavLink, { NavLinkProps } from "./NavLink";

interface NavLinksContainerProps
	extends React.HTMLAttributes<HTMLUListElement> {
	navLinkProps?: Omit<NavLinkProps, "path">;
}

const routes = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About Us",
		path: "/about-us",
	},
	{
		name: "Products",
		path: "/products",
	},
	{
		name: "Warranty",
		path: "/warranty",
	},
	{
		name: "News & Blogs",
		path: "/news",
	},
];

export default function NavLinksContainer({
	className,
	navLinkProps,
	...props
}: NavLinksContainerProps) {
	return (
		<ul className={`${className}`} {...props}>
			{routes.map((route, idx) => (
				<NavLink {...navLinkProps!} path={route.path} key={idx}>
					{route.name}
				</NavLink>
			))}
			<li className="flex items-center sm:hidden">
				<Button className="bg-black text-white font-bold">Contact Us</Button>
			</li>
		</ul>
	);
}
