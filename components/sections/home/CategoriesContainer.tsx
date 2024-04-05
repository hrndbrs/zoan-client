import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CustomCard, IconSize, NotFound } from "@/components/shared";
import { getProductCategories } from "@/services/categories.service";
import { formatCategoryList } from "@/lib/helpers";

export default async function CategoriesContainer() {
  const res = await getProductCategories();
  if (res) {
    const categories = formatCategoryList(res);

    return (
      <section id="categories" className="px-5 py-16 md:py-[7.5rem]">
        <div className="inner-container flex-col gap-8">
          <div className="w-full flex flex-col gap-6 py-6">
            <h3 className="text-h3 max-sm:text-h4 font-bold uppercase">Our Products</h3>
            <p>From Servers, IOT Devices, Notebook, Desktop & Workstation to All-in-one PC.</p>
            <Link href="/products">
              <Button className="self-start" variant="default-2">
                Explore
              </Button>
            </Link>
          </div>
          <div className="w-full grid gap-y-8 gap-x-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CustomCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                iconsize={IconSize.SM}
                imageUrl={category.imageUrl}
                className="category-card"
                titleClassName="text-h4 max-md:text-h5"
                contentClassName="flex-1 items-start"
                innerContentClassName="flex-1 !gap-1 max-md:font-bold"
              >
                <Link href={`/products/${category.title}`}>
                  <Button variant="default-2">See More</Button>
                </Link>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return <NotFound>Unable to load data</NotFound>;
  }
}
