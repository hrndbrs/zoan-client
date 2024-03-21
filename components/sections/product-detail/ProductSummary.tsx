import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SplitContentWrapper } from "@/components/shared";

type ProductSummaryPropType = {
  name: string;
  description: string;
  imageUrl: string;
  fileUrl: string;
};

export default function ProductSummary({
  name,
  description,
  imageUrl,
  fileUrl,
}: ProductSummaryPropType) {
  return (
    <section id="product-summary" className="px-5">
      <SplitContentWrapper
        className="gap-5"
        left={
          <div className="relative w-full max-md:aspect-[64/45]">
            <Image
              src={imageUrl || "/images/placeholder.png"}
              alt="product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        }
        right={
          <div className="w-full flex flex-col divide-z-indigo divide-y-2">
            <h3 className="text-h3 font-bold uppercase pb-4 max-md:text-h4">
              {decodeURIComponent(name)}
            </h3>
            <div className="flex flex-col gap-8 pt-4">
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <a href={fileUrl} className="self-start">
                <Button>Download Data Sheet</Button>
              </a>
            </div>
          </div>
        }
      />
    </section>
  );
}
