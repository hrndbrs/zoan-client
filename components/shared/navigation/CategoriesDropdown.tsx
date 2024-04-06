"use client";

import { useContext, forwardRef } from "react";
import NavLink from "./NavLink";
import { CategoryContext } from "@/contexts/CategoryProvider";

const CategoriesDropdown = forwardRef<HTMLDivElement>((_props, ref) => {
  const { categories } = useContext(CategoryContext);
  const basePath = "/products";

  return (
    <div
      ref={ref}
      className="absolute w-44 border border-natural-9 bg-natural-1 -bottom-1 translate-y-full p-2"
    >
      <ul className="w-full  flex flex-col items-start gap-5">
        <NavLink className="nav-link" path={basePath} hoverEffect={false}>
          Browse all categories
        </NavLink>
        {categories?.map((category) => (
          <NavLink
            className="nav-link"
            key={category.id}
            path={`${basePath}/${category.attributes.title}`}
            hoverEffect={false}
          >
            {category.attributes.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
});
CategoriesDropdown.displayName = "CategoriesDropdown";

export default CategoriesDropdown;
