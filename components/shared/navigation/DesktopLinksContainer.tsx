"use client";

import { useRef, useEffect, useCallback } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);

  function toggleDropdown() {
    setDropdownIsOpen((state) => !state);
  }

  const close = useCallback(() => setDropdownIsOpen(false), [setDropdownIsOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        e.target !== dropdownTriggerRef.current
      ) {
        close();
      }
    }

    if (dropdownIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownIsOpen, close]);

  useEffect(() => {
    if (!isVisible) {
      close();
    }
  }, [isVisible, close]);

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
          ref={dropdownTriggerRef}
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
        {dropdownIsOpen ? <CategoriesDropdown ref={dropdownRef} /> : undefined}
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
