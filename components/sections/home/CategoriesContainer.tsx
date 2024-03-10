import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CategoryType } from "@/lib/mockData";
import { CustomCard, IconSize } from "@/components/shared";

export default function CategoriesContainer({ categories }: { categories: CategoryType[] }) {
  return (
    <section id="categories" className="px-5 py-[7.5rem] xl:h-[110rem] md:h-[144rem]">
      <div className="inner-container flex-col !justify-start flex-wrap h-full gap-8">
        <CustomCard
          title="Our products"
          description="From Servers, IOT Devices, Notebook, Desktop & Workstation to All-in-one PC"
          className="category-card border-none shadow-none"
          titleClassName="text-h3 max-md:text-h4"
        >
          <Link href="/products">
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
            iconSize={IconSize.SM}
            imageUrl={category.imageUrl}
            className="category-card"
            titleClassName="text-h4 max-md:text-h5"
            contentClassName="items-start"
            innerContentClassName="!gap-1 max-md:font-bold"
          >
            <Link href={`/products/${category.slug}`}>
              <Button variant="default-2">See More</Button>
            </Link>
          </CustomCard>
        ))}
        <CustomCard
          title="For more info"
          description="Lorem ipsum dolor sit amet, consectur adipiscing elit."
          className="category-card"
          titleClassName="text-h4 max-md:text-h5"
          innerContentClassName="!gap-1"
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
