import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/mockData";
import { CustomCard, IconSize } from "@/components/shared";

export default function CategoriesContainer() {
  return (
    <div className="inner-container mb-[7.5rem]">
      <div className="w-full grid gap-8 divide-natural-3 md:grid-cols-3 lg:grid-cols-5 max-md:divide-y">
        {categories.map(({ icon, name, slug, description }) => (
          <CustomCard
            key={slug}
            title={name}
            icon={icon}
            description={description}
            iconSize={IconSize.MD}
            className="shadow-none rounded-none [&:not(:first-child)]:max-md:pt-8"
            contentClassName="h-full p-0 gap-4"
            innerContentClassName="flex-1 justify-between"
            titleClassName="text-h5"
          >
            <Link href={`/products/${slug}`}>
              <Button>Browse</Button>
            </Link>
          </CustomCard>
        ))}
      </div>
    </div>
  );
}
