import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselStepperIndicator,
} from "@/components/ui/carousel";

export default function Banner({ bannerImages }: { bannerImages: string[] }) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="group w-full"
    >
      <CarouselContent>
        {bannerImages.map((bannerImage, idx) => (
          <CarouselItem className="w-full pl-0" key={idx}>
            <div className="relative aspect-[9/5]">
              <Image src={bannerImage} fill alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrow-prev opacity-0 group-hover:opacity-[0.32]" />
      <CarouselNext className="carousel-arrow-next opacity-0 group-hover:opacity-[0.32]" />
      <CarouselStepperIndicator
        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
        length={bannerImages.length}
      />
    </Carousel>
  );
}
