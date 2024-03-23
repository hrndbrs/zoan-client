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
      <div className="inner-container mb-[7.5rem]">
        <div className="w-full grid gap-8 divide-natural-3 md:grid-cols-3 lg:grid-cols-5 max-md:divide-y">
          {categories.map(({ icon, title, subTitle }) => (
            <CustomCard
              key={title}
              title={title}
              icon={icon!}
              description={subTitle}
              iconsize={IconSize.MD}
              className="shadow-none rounded-none [&:not(:first-child)]:max-md:pt-8"
              contentClassName="h-full p-0 gap-4"
              innerContentClassName="flex-1 justify-between"
              titleClassName="text-h5"
              descriptionClassName="line-clamp-4"
            >
              <Link href={`/products/${title}`}>
                <Button>Browse</Button>
              </Link>
            </CustomCard>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NotFound>
        <p>Something went wrong</p>
        <p>Refresh to try again</p>
      </NotFound>
    );
  }
}
