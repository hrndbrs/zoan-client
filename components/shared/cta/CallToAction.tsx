import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section id="cta" className="bg-gradient-to-r from-z-teal to-z-indigo py-16 px-5">
      <div className="inner-container relative text-natural-1 py-14">
        <div className="absolute w-full h-[250px] top-0 left-0 max-lg:hidden">
          <Image
            src="/images/supergraphics/5x5_(1)_1.svg"
            alt="sg"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "0 50%",
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-6xl uppercase font-bold">Need Any Help?</h2>
          <div className="flex flex-col items-center">
            <p className="text-center">Do you have any question about our products</p>
            <p className="text-center">Don&apos;t worry, we are here to help you!</p>
          </div>
          <Button>Contact Us</Button>
        </div>
        <div className="absolute w-full h-[250px] bottom-0 right-0 max-lg:hidden">
          <Image
            src="/images/supergraphics/5x5_(2)_4.svg"
            alt="sg"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "100% 50%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
