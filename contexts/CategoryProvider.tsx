"use client";

import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import { CategoryData } from "@/lib/types/categories.type";
import { getProductCategories } from "@/services/categories.service";

export const CategoryContext = createContext<{
  categories: CategoryData[];
  setCategories: Dispatch<SetStateAction<CategoryData[]>>;
}>({
  categories: [],
  setCategories: () => {},
});

export default function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    getProductCategories().then((data) => {
      if (data) setCategories(data);
    });
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}
