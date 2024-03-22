"use server";

import api from "@/config/axios";
import { Blogs } from "@/lib/types/blogs.type";

export async function getBlogList(page?: number) {
  const endpoint =
    "/blogs?pagination[pageSize]=6&populate=deep" + (page ? `&pagination[page]=${page}` : "");

  try {
    const { data } = await api.get<Blogs>(endpoint);

    return { blogs: data.data, pagination: data.meta.pagination };
  } catch (error) {}
}

export async function getBlogDetail(slug: string) {
  try {
    const { data } = await api.get<Blogs>(`/blogs?populate=*&filters[title][$eq]=${slug}`);
    if (!data.data[0]) throw new Error("Blog doesn't exist");

    return data.data[0];
  } catch (error) {}
}
