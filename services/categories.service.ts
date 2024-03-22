import api from "@/config/axios";
import { Categories } from "@/lib/types/categories.type";

export async function getProductCategories(signal?: AbortSignal) {
  try {
    const { data } = await api.get<Categories>("/categories?populate[0]=image", {
      signal,
    });
    return data.data;
  } catch (error) {}
}
