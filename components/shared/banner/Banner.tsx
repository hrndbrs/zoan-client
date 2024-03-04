import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselStepperIndicator,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function Banner({ bannerImages }: { bannerImages: string[] }) {
  const opacityControl = "opacity-0 group-hover:opacity-[0.32] max-md:opacity-[0.32]";

  return (
    <section id="jumbotron">
      <Carousel
        opts={{
          align: "center",
          watchDrag: false,
        }}
        className="group"
      >
        <CarouselContent>
          {bannerImages.map((bannerImage, idx) => (
            <CarouselItem className="pl-0" key={idx}>
              <div className="relative aspect-[9/5]">
                <Image src={bannerImage} fill alt={`banner-${idx + 1}`} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn("carousel-arrow-prev", opacityControl)} />
        <CarouselNext className={cn("carousel-arrow-next", opacityControl)} />
        <CarouselStepperIndicator
          className="md:opacity-0 group-hover:opacity-100 transition-all duration-300"
          length={bannerImages.length}
        />
      </Carousel>
    </section>
  );
}
