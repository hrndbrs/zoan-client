import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SplitContentWrapper } from "@/components/shared";

type ProductSummaryPropType = {
  productSlug: string;
};

export default function ProductSummary({ productSlug }: ProductSummaryPropType) {
  const productDescription =
    "[product desc] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.\n\nSuspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla";

  return (
    <section id="product-summary" className="px-5">
      <SplitContentWrapper
        className="gap-5"
        left={
          <div className="relative w-full max-md:aspect-[64/45]">
            <Image
              src="/images/placeholder.png"
              alt="product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        }
        right={
          <div className="w-full flex flex-col divide-z-indigo divide-y-2">
            <h3 className="text-h3 font-bold uppercase pb-4 max-md:text-h4">
              {decodeURIComponent(productSlug)}
            </h3>
            <div className="flex flex-col gap-8 pt-4">
              <p className="whitespace-pre-line">{productDescription}</p>
              <Button className="self-start">Download Data Sheet</Button>
            </div>
          </div>
        }
      />
    </section>
  );
}
