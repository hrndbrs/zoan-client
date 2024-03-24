import { redirect } from "next/navigation";
import {
  ProductSummary,
  ProductMedia,
  ProductVideoContainer,
  Specifications,
  SupprtedOSContainer,
} from "@/components/sections/product-detail";
import { getProductDetail } from "@/services/products.service";
import { appendImageUrl, generateSeo } from "@/lib/helpers";
import { Metadata } from "next";

type ProductDetailParamsType = {
  categorySlug: string;
  productSlug: string;
};

export async function generateMetadata({ params }: { params: ProductDetailParamsType }): Promise<Metadata> {  
  const { productSlug } = params;
  const products = await getProductDetail(productSlug);
  return {
    title: `${products?.name} - Zoan`,
    description: products?.seo? products?.seo.metaDescription : ""
  }
}

export default async function ProductDetail({ params }: { params: ProductDetailParamsType }) {
  const { productSlug } = params;
  const products = await getProductDetail(productSlug);

  if (!products) return redirect("/");

  const {
    name,
    description,
    banner,
    images,
    tagline,
    specification,
    file,
    video,
    supportedOperatingSystem: os,
  } = products;

  let mediaUrls: string[] = [];

  if (images?.data) {
    mediaUrls.push(...images.data.map((image) => appendImageUrl(image.attributes.url)));
  }

  return (
    <>
      <main className="flex flex-col pt-6 pb-16 gap-12">
        <ProductSummary
          name={name}
          description={description}
          imageUrl={appendImageUrl(banner!.data.attributes.url)}
          fileUrl={file?.data ? appendImageUrl(file?.data?.attributes?.url) : undefined}
        />
        <ProductMedia images={mediaUrls} tagline={tagline} />
        <ProductVideoContainer videoUrl={video} />
      </main>
      <Specifications spec={specification!.data} />
      {os!.length > 0 ? <SupprtedOSContainer os={os!} /> : undefined}
    </>
  );
}
