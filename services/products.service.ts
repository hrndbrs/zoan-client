"use server";

import api from "@/config/axios";
import { Product } from "@/lib/types/products.type";

export async function getProductDetail(productSlug: string) {
  try {
    const { data } = await api.get<Product>(`/products/${productSlug}?populate=deep`);
    return data.data.attributes;
  } catch (error) {}
}
