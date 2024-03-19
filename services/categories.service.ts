"use server";
import api from "@/config/axios";
import { Categories, Category } from "@/lib/types/categories.type";

export async function getProductCategories() {
  try {
    const { data } = await api.get<Categories>("/categories?populate[0]=image");
    return data.data;
  } catch (error) {}
}

export async function getProductsByCategory(categorySlug: string) {
  try {
    const { data } = await api.get<Category>(`/categories/${categorySlug}`);
    return data.data.attributes;
  } catch (error) {}
}