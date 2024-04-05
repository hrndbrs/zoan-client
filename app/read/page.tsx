import { redirect } from "next/navigation";
import BlogsListDisplay from "@/components/sections/read/BlogListDisplay";
import { NotFound } from "@/components/shared";
import { getBlogList } from "@/services/blogs.service";
import { Metadata } from "next";
import { generateSeo } from "@/lib/helpers";

type SearchParamsType = {
  page: string;
};

export async function generateMetadata(): Promise<Metadata> {
  return generateSeo("News & Blogs");
}

export default async function BlogsAndNews({ searchParams }: { searchParams: SearchParamsType }) {
  const { page } = searchParams;
  if (+page <= 0) return redirect("/read");

  const res = await getBlogList(+page);

  if (!res) return <NotFound>Unable to load data</NotFound>;

  const { blogs, pagination } = res;

  if (pagination.pageCount === 0) return <NotFound>There are no blogs to display</NotFound>;
  if (pagination.page > pagination.pageCount) return redirect("/read");

  return <BlogsListDisplay blogs={blogs} pagination={pagination} />;
}
