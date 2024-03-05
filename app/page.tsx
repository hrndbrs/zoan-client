import { Banner, CategoriesContainer } from "@/components/sections/home";
import { CallToAction } from "@/components/shared";
import { categories } from "@/lib/mockData";

const banners = [
  "/images/banners/jumbotron-1.png",
  "/images/banners/jumbotron-2.png",
  "/images/banners/jumbotron-3.png",
];

export default function Home() {
  return (
    <>
      <Banner bannerImages={banners} />
      <CategoriesContainer categories={categories} />
      <CallToAction />
    </>
  );
}
