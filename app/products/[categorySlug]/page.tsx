import Link from "next/link";
import { redirect } from "next/navigation";
import { CustomCard, NotFound } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { getProductsByCategory } from "@/services/products.service";
import { appendImageUrl, generateSeo } from "@/lib/helpers";
import { Metadata } from "next";

type RouteParamsType = {
  categorySlug: string;
};

export async function generateMetadata({ params }: { params: RouteParamsType }): Promise<Metadata> {
  const { categorySlug } = params;
  return generateSeo(categorySlug);
}

export default async function CategoryProducts({ params }: { params: RouteParamsType }) {
  const { categorySlug } = params;
  const category = await getProductsByCategory(categorySlug);

  if (!category) return redirect("/products");

  const { title, products, subTitle } = category;

  return (
    <section className="mx-5">
      <div className="inner-container flex-col mb-[7.5rem]">
        <div className="w-full mb-8">
          <h3 className="text-h3 py-4 uppercase font-bold max-md:text-h4">{title}</h3>
          <p>{subTitle}</p>
        </div>
        {products.data.length === 0 ? (
          <NotFound>
            <p className="text-center">No product is available currently</p>
          </NotFound>
        ) : (
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.data.map(({ attributes: product }) => (
              <CustomCard
                key={product.name}
                imageUrl={
                  product.banner?.data
                    ? appendImageUrl(product.banner.data.attributes.url)
                    : "/images/placeholder.png"
                }
                title={product.name}
                description={product.type}
                className="max-sm:px-5"
                imageClassName="aspect-[69/76]"
                contentClassName="gap-4 mt-4 p-0"
                innerContentClassName="items-center gap-2"
                titleClassName="text-h6 normal-case"
              >
                <Link
                  className="w-full"
                  href={`/products/${categorySlug}/${encodeURIComponent(product.name)}`}
                >
                  <Button className="w-full">See Details</Button>
                </Link>
              </CustomCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
