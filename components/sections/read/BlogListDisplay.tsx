import { SectionHeader } from "@/components/shared";
import BlogsContainer from "./BlogsContainer";

export default function BlogListDisplay() {
  return (
    <section className="pt-4 pb-20 px-5">
      <SectionHeader title="News & Blogs" subtitle="Read" description="Our latest news" />
      <BlogsContainer />
    </section>
  );
}
