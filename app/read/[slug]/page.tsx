import { blogs } from "@/lib/mockData";
import { BlogDetailContainer } from "@/components/sections/blog-detail";
import { BlogViewer } from "@/components/shared";

type RouteParamsType = {
  slug: string;
};

export default function BlogDetail({ params }: { params: RouteParamsType }) {
  const { slug } = params;
  const blog = blogs.find((blog) => blog.slug === slug);
  if (!blog) return <div>Blog is unavailable</div>;
  return (
    <>
      <BlogDetailContainer blog={blog} />
      <BlogViewer blogs={blogs} />
    </>
  );
}
