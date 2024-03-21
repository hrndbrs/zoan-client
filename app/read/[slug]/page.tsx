import { BlogDetailContainer } from "@/components/sections/blog-detail";
import { BlogViewer, NotFound } from "@/components/shared";
import { getBlogDetail } from "@/services/blogs.service";

type RouteParamsType = {
  slug: string;
};

export default async function BlogDetail({ params }: { params: RouteParamsType }) {
  const { slug } = params;
  const blog = await getBlogDetail(slug);

  return (
    <>
      {blog ? (
        <BlogDetailContainer blog={blog} />
      ) : (
        <NotFound>
          <p>Blog is unavailable</p>
        </NotFound>
      )}
      <BlogViewer header="Another" />
    </>
  );
}
