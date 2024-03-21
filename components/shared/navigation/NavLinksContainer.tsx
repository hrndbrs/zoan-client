import { Button } from "@/components/ui/button";
import NavLink, { NavLinkProps } from "./NavLink";
import { routes } from "@/assets/static";

interface NavLinksContainerProps extends React.HTMLAttributes<HTMLUListElement> {
  navLinkProps?: Omit<NavLinkProps, "path">;
  showButton?: boolean;
}

export default function NavLinksContainer({
  className,
  navLinkProps,
  showButton = true,
  ...props
}: NavLinksContainerProps) {
  return (
    <ul className={className} {...props}>
      {routes.map((route, idx) => (
        <NavLink {...navLinkProps} path={route.path} key={idx}>
          {route.name}
        </NavLink>
      ))}
      {showButton ? (
        <NavLink liClassName="md:hidden" path="/contact-us">
          <Button>Contact Us</Button>
        </NavLink>
      ) : (
        <NavLink {...navLinkProps} path="/contact-us">
          Contact
        </NavLink>
      )}
    </ul>
  );
}
