import { Banner, CategoriesContainer } from "@/components/sections/home";
import { CallToAction, BlogViewer } from "@/components/shared";
import { blogs } from "@/lib/mockData";

export default function Home() {
  return (
    <>
      <Banner />
      <CategoriesContainer />
      <CallToAction />
      <BlogViewer blogs={blogs} header="News & Blogs" />
    </>
  );
}
