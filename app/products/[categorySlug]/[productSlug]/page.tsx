import {
  ProductSummary,
  ProductMedia,
  ProductVideoContainer,
  Specifications,
  SupprtedOSContainer,
} from "@/components/sections/product-detail";

type ProductDetailParamsType = {
  categorySlug: string;
  productSlug: string;
};

export default function ProductDetail({ params }: { params: ProductDetailParamsType }) {
  const { productSlug } = params;
  const images = new Array(5).fill("/images/placeholder.png");

  return (
    <>
      <main className="flex flex-col pt-6 pb-16 gap-12">
        <ProductSummary productSlug={productSlug} />
        <ProductMedia images={images} />
        <ProductVideoContainer videoUrl="https://www.youtube.com/embed/4E3ke9lB1Iw?si=lvI0fuLq3OloTvbv" />
      </main>
      <Specifications />
      <SupprtedOSContainer />
    </>
  );
}
