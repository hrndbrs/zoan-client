"use server";

import api from "@/config/axios";
import { Blogs } from "@/lib/types/blogs.type";

export async function getBlogList(page?: number) {
  const endpoint =
    "/blogs?pagination[pageSize]=6&populate=deep" + (page ? `&pagination[page]=${page}` : "");

  try {
    const { data } = await api.get<Blogs>(endpoint);
    console.log(data, "======================delete later==============");

    return data.data;
  } catch (error) {}
}

export async function getLatestBlogs() {
  try {
    const { data } = await api.get<Blogs>(
      "/blogs?populate=*&sort[0]=publishedAt:desc&pagination[pageSize]=5",
    );

    return data.data;
  } catch (error) {}
}

export async function getBlogDetail(slug: string) {
  try {
    const { data } = await api.get<Blogs>(`/blogs?populate=*&filters[title][$eq]=${slug}`);
    if (!data.data[0]) throw new Error("Blog doesn't exist");

    return data.data[0];
  } catch (error) {}
}
