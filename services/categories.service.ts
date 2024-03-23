"use server";

import api from "@/config/axios";
import { Categories } from "@/lib/types/categories.type";
import { unstable_noStore as noStore } from 'next/cache';

export async function getProductCategories() {
  noStore();
  try {
    const { data } = await api.get<Categories>("/categories?populate[0]=image");
    return data.data;
  } catch (error) { }
}
