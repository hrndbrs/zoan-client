"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductMediaPropType = {
  images: string[];
};

export default function ProductMedia({ images }: ProductMediaPropType) {
  const [displayedImage, setDisplayedImage] = useState<{ index: number; imageUrl: string }>({
    index: 0,
    imageUrl: images[0],
  });

  function handleImageSwap(index: number) {
    setDisplayedImage({ index: index, imageUrl: images[index] });
  }

  return (
    <section id="product-media" className="px-5">
      <div className="inner-container flex-col gap-4">
        <div className="relative w-full h-[35rem] max-md:hidden">
          <Image
            src={displayedImage.imageUrl}
            alt="displayed-image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full flex gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageSwap(index)}
              className={cn(
                "relative flex-1 cursor-pointer h-[10.875rem] transition-all duration-75",
                index === displayedImage.index ? "border-solid border-black border-2" : "",
              )}
            >
              <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 md:py-16">
          <div className="flex flex-col items-center gap-[0.375rem]">
            <h4 className="uppercase font-bold text-h4">Tagline</h4>
            <p className="max-w-[43.875rem] text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum
              tristique. Duis curs
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {new Array(4)
              .fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
              .map((list, index) => (
                <li key={index} className="list-disc list-inside">
                  {list}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
