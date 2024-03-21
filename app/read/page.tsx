import BlogsListDisplay from "@/components/sections/read/BlogListDisplay";
import { getBlogList } from "@/services/blogs.service";

type SearchParamsType = {
  page: string;
};

export default async function BlogsAndNews({ searchParams }: { searchParams: SearchParamsType }) {
  const { page } = searchParams;
  const blogs = await getBlogList(Number(page));

  return <BlogsListDisplay blogs={blogs} />;
}
