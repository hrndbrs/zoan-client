"use client";

import { useState } from "react";
import Image from "next/image";
import { TagLine } from "@/lib/types/products.type";

type ProductMediaPropType = {
  images: string[];
  tagline?: TagLine;
};

export default function ProductMedia({ images, tagline }: ProductMediaPropType) {
  const [imageIndex, setImageIndex] = useState(0);
  let displayedImage: string = "";
  const containsImage = images.length > 0;
  // const [displayedImage, setDisplayedImage] = useState<{ index: number; imageUrl: string }>({
  //   index: 0,
  //   imageUrl: images[0],
  // });

  if (containsImage) displayedImage = images[imageIndex];

  function handleImageSwap(index: number) {
    setImageIndex(index);
    // setDisplayedImage({ index: index, imageUrl: images[index] });
  }

  return (
    <section id="product-media" className="px-5">
      <div className="inner-container flex-col gap-4">
        {containsImage && displayedImage ? (
          <>
            {" "}
            <div className="relative w-full bg-natural-9 h-[35rem] max-md:hidden">
              <Image
                src={displayedImage}
                alt="displayed-image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="w-full flex gap-4 overflow-x-scroll flex-nowrap">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageSwap(index)}
                  className="relative w-56 bg-natural-9 cursor-pointer h-[10.875rem] shrink-0 transition-all duration-75 max-md:w-72 max-md:h-48"
                >
                  <Image src={image} alt={image} fill style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>{" "}
          </>
        ) : undefined}
        {tagline ? (
          <div className="flex flex-col gap-8 md:py-16">
            <div className="flex flex-col items-center gap-[0.375rem]">
              <h4 className="uppercase font-bold text-h4">{tagline.title}</h4>
              <p className="max-w-[43.875rem] text-center mx-auto">{tagline.description}</p>
            </div>
            <ul className="indented-bullet-list grid grid-cols-2 gap-2 md:grid-cols-4">
              {tagline.children.map((list) => (
                <li key={list.id}>{list.value}</li>
              ))}
            </ul>
          </div>
        ) : undefined}
      </div>
    </section>
  );
}
