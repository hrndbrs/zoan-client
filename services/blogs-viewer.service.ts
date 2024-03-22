"use server";

import api from "@/config/axios";
import { Blogs } from "@/lib/types/blogs.type";

export async function getLatestBlogs() {
  try {
    const { data } = await api.get<Blogs>(
      "/blogs?populate=*&sort[0]=publishedAt:desc&pagination[pageSize]=5",
    );

    return data.data;
  } catch (error) {}
}
