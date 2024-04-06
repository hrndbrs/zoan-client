"use client";

import { useContext } from "react";
import NavLink from "./NavLink";
import { CategoryContext } from "@/contexts/CategoryProvider";

export default function CategoriesDropdown() {
  const { categories } = useContext(CategoryContext);
  const basePath = "/products";

  return (
    <ul className="absolute w-44 flex flex-col items-start border border-natural-9 gap-5 bg-natural-1 -bottom-1 translate-y-full p-2">
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
  );
}
