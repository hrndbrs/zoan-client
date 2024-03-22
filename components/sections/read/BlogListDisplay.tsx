import { SectionHeader, NotFound, CustPagination } from "@/components/shared";
import BlogsContainer from "./BlogsContainer";
import { BlogData, Pagination } from "@/lib/types/blogs.type";

type BlogListDisplayPropType = {
  blogs?: BlogData[];
  pagination: Pagination;
};

export default async function BlogListDisplay({ blogs, pagination }: BlogListDisplayPropType) {
  const { page, pageCount } = pagination;

  return (
    <section className="pt-4 pb-20 px-5">
      <SectionHeader
        title="News & Blogs"
        subtitle="Read"
        description="Our latest news"
        className="md:items-center"
      />
      {blogs ? (
        <>
          <BlogsContainer blogs={blogs} />
          <div className="mt-6">
            <CustPagination page={page} pageCount={pageCount} />
          </div>
        </>
      ) : (
        <NotFound>
          <p>No blogs to display</p>
        </NotFound>
      )}
    </section>
  );
}
