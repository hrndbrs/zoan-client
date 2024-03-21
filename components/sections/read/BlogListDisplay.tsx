import { SectionHeader } from "@/components/shared";
import BlogsContainer from "./BlogsContainer";
import { BlogData } from "@/lib/types/blogs.type";

type BlogListDisplayPropType = {
  blogs?: BlogData[];
};

export default async function BlogListDisplay({ blogs }: BlogListDisplayPropType) {
  return (
    <section className="pt-4 pb-20 px-5">
      <SectionHeader
        title="News & Blogs"
        subtitle="Read"
        description="Our latest news"
        className="md:items-center"
      />
      {blogs ? <BlogsContainer blogs={blogs} /> : <div></div>}
    </section>
  );
}
