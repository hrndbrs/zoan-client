"use client";

import { useEffect } from "react";
import { BiSolidChevronUp } from "react-icons/bi";
import useOnRouteChange from "@/hooks/useOnRouteChange";
import CategoriesDropdown from "./CategoriesDropdown";
import NavLink, { NavLinkProps } from "./NavLink";
import { cn } from "@/lib/utils";

interface NavLinksContainerProps extends React.HTMLAttributes<HTMLUListElement> {
  isVisible: boolean;
  navLinkProps?: Omit<NavLinkProps, "path">;
}

export default function DesktopLinksContainer({
  isVisible,
  className,
  navLinkProps,
  ...props
}: NavLinksContainerProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useOnRouteChange<boolean>(false);

  function toggleDropdown() {
    setDropdownIsOpen((state) => !state);
  }

  useEffect(() => {
    if (!isVisible) {
      setDropdownIsOpen(false);
    }
  }, [isVisible, setDropdownIsOpen]);

  return (
    <ul className={className} {...props}>
      <NavLink {...navLinkProps} path="/">
        Home
      </NavLink>
      <NavLink {...navLinkProps} path="/about-us">
        About us
      </NavLink>
      <li className="flex items-center">
        <button
          className={cn(
            "nav-link flex gap-1 items-center",
            dropdownIsOpen ? "after:w-full" : undefined,
          )}
          onClick={toggleDropdown}
        >
          Products
          <BiSolidChevronUp
            className={cn("transition-all", dropdownIsOpen ? "rotate-0" : "rotate-180")}
          />
        </button>
        {dropdownIsOpen ? <CategoriesDropdown /> : undefined}
      </li>
      <NavLink {...navLinkProps} path="/warranty">
        Warranty
      </NavLink>
      <NavLink {...navLinkProps} path="/read">
        News & Blogs
      </NavLink>
    </ul>
  );
}
