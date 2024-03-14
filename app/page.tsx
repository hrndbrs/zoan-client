import { Banner, CategoriesContainer } from "@/components/sections/home";
import { CallToAction, BlogViewer } from "@/components/shared";
import { categories, blogs } from "@/lib/mockData";

export default function Home() {
  return (
    <>
      <Banner />
      <CategoriesContainer categories={categories} />
      <CallToAction />
    </>
  );
}
