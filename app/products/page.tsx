import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CustomCard, IconSize } from "@/components/shared";
import { detailedCategories } from "@/lib/mockData";

export default function CategoryList() {
  return (
    <>
      <div className="inner-container mt-4 mb-20">
        <div className="flex gap-20 max-md:gap-3 max-md:flex-col">
          <h3 className="flex-1 text-h3 uppercase font-bold max-md:text-h4">
            Choose
            <br />
            products
          </h3>
          <p className="flex-1 self-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla
          </p>
        </div>
      </div>
      <div className="inner-container mb-[7.5rem]">
        <div className="w-full grid gap-8 divide-natural-3 md:grid-cols-3 lg:grid-cols-5 max-md:divide-y">
          {detailedCategories.map(({ icon, name, slug, description }) => (
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
    </>
  );
}
