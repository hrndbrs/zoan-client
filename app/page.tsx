import { Banner, CategoriesContainer } from "@/components/sections/home";
import { CallToAction, BlogViewer } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Banner />
      <CategoriesContainer />
      <CallToAction />
      <BlogViewer header="News & Blogs" />
    </>
  );
}
