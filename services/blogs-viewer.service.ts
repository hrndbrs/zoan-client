import api from "@/config/axios";
import { Blogs } from "@/lib/types/blogs.type";

export async function getLatestBlogs(signal?: AbortSignal) {
  try {
    const { data } = await api.get<Blogs>(
      "/blogs?populate=*&sort[0]=publishedAt:desc&pagination[pageSize]=5",
      { signal },
    );

    return data.data;
  } catch (error) {}
}
