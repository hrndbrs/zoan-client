"use server";

import api from "@/config/axios";
import { Product } from "@/lib/types/products.type";
import { Category } from "@/lib/types/categories.type";

export async function getProductDetail(productSlug: string) {
  try {
    const { data } = await api.get<Product>(`/products/${productSlug}?populate=deep`);
    return data.data.attributes;
  } catch (error) {}
}

export async function getProductsByCategory(categorySlug: string) {
  try {
    const { data } = await api.get<Category>(`/categories/${categorySlug}`);
    return data.data.attributes;
  } catch (error) {}
}
