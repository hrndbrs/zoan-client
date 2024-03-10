import Link from "next/link";
import { CustomCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { detailedCategories } from "@/lib/mockData";

type RouteParamsType = {
  slug: string;
};

export default function CategoryProducts({ params }: { params: RouteParamsType }) {
  const { slug } = params;
  const category = detailedCategories.find((category) => category.slug === slug);
  if (!category) return <div>no product</div>;

  const { name, products, description } = category;

  return (
    <div className="inner-container flex-col mb-[7.5rem]">
      <div className="w-full mb-8">
        <h3 className="text-h3 py-4 uppercase font-bold max-md:text-h4">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <CustomCard
            key={product.slug}
            imageUrl={product.thumbnail}
            title={product.name}
            description={product.type}
            className="max-sm:px-5"
            imageClassName="aspect-[69/76]"
            contentClassName="gap-4 mt-4 p-0"
            innerContentClassName="items-center gap-2"
            titleClassName="text-h6 normal-case"
          >
            <Link className="w-full" href={`/products/${slug}/${product.slug}`}>
              <Button className="w-full">See Details</Button>
            </Link>
          </CustomCard>
        ))}
      </div>
    </div>
  );
}
