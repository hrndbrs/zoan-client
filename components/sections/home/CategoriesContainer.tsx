import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CategoryType } from "@/lib/mockData";
import { CustomCard } from "@/components/shared";

export default function CategoriesContainer({ categories }: { categories: CategoryType[] }) {
  return (
    <section id="categories" className="px-5 py-[7.5rem] xl:h-[110rem] md:h-[144rem]">
      <div className="inner-container flex-col !justify-start flex-wrap h-full gap-8">
        <CustomCard
          className="!border-none !shadow-none"
          title="Our products"
          description="From Servers, IOT Devices, Notebook, Desktop & Workstation to All-in-one PC"
          titleClass="text-h3 max-md:text-h4"
        >
          <Link href="/categories">
            <Button className="self-start" variant="default-2">
              Explore
            </Button>
          </Link>
        </CustomCard>
        {categories.map((category) => (
          <CustomCard
            key={category.slug}
            title={category.name}
            description={category.description}
            icon={category.icon}
            imageUrl={category.imageUrl}
            titleClass="text-h4 max-md:text-h5"
            contentClass="items-start"
            innerContentClass="!gap-1 max-md:font-bold"
          >
            <Link href={`/categories/${category.slug}`}>
              <Button variant="default-2">See More</Button>
            </Link>
          </CustomCard>
        ))}
        <CustomCard
          title="For more info"
          description="Lorem ipsum dolor sit amet, consectur adipiscing elit."
          titleClass="text-3xl max-md:text-2xl"
          innerContentClass="!gap-1"
        >
          <Link href="/contact-us">
            <Button className="self-start" variant="default-1">
              Contact Us
            </Button>
          </Link>
        </CustomCard>
      </div>
    </section>
  );
}
