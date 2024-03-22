import { redirect } from "next/navigation";
import BlogsListDisplay from "@/components/sections/read/BlogListDisplay";
import { getBlogList } from "@/services/blogs.service";

type SearchParamsType = {
  page: string;
};

export default async function BlogsAndNews({ searchParams }: { searchParams: SearchParamsType }) {
  const { page } = searchParams;
  if (+page <= 0) return redirect("/read");

  const res = await getBlogList(+page);
  if (!res) return redirect("/");

  const { blogs, pagination } = res;

  if (pagination.page > pagination.pageCount) return redirect("/read");

  return (
    <>
      <BlogsListDisplay blogs={blogs} pagination={pagination} />;
    </>
  );
}
