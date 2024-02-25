import { Banner } from "@/components/shared";

const banners = [
  "/images/banners/jumbotron-1.png",
  "/images/banners/jumbotron-2.png",
  "/images/banners/jumbotron-3.png",
];

export default function Home() {
  return (
    <div>
      <Banner bannerImages={banners} />
    </div>
  );
}
