import { CategoriesContainer, Heading } from "@/components/sections/products";
import { generateSeo } from "@/lib/helpers";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {  
  return generateSeo("Products");
}

export default function Categories() {
  return (
    <section className="px-5">
      <Heading />
      <CategoriesContainer />
    </section>
  );
}
