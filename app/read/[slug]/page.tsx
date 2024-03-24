import { BlogDetailContainer } from "@/components/sections/blog-detail";
import { BlogViewer, NotFound } from "@/components/shared";
import { getBlogDetail } from "@/services/blogs.service";
import { Metadata } from "next";

type RouteParamsType = {
  slug: string;
};

export async function generateMetadata({ params }: { params: RouteParamsType }): Promise<Metadata> {
  const { slug } = params;
  const blog = await getBlogDetail(slug);
 
  return {
    title: `${blog?.attributes.title} - Zoan`,
    description: blog?.attributes.seo? blog?.attributes.seo.metaDescription : ""
  }
}

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
