import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CallToAction({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id="cta"
      className={cn("bg-gradient-to-r from-z-teal to-z-indigo py-16 px-5", className)}
      {...props}
    >
      <div className="inner-container relative text-natural-1 py-14">
        <div className="absolute w-[30%] h-[250px] top-0 left-0 max-lg:hidden">
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
          <h3 className="text-h3 uppercase font-bold">Need Any Help?</h3>
          <div className="flex flex-col items-center max-md:font-bold">
            <p className="text-center">Do you have any question about our products</p>
            <p className="text-center">Don&apos;t worry, we are here to help you!</p>
          </div>
          <Link href="/contact" className="pt-4">
            <Button>Contact Us</Button>
          </Link>
        </div>
        <div className="absolute w-[30%] h-[250px] bottom-0 right-0 max-lg:hidden">
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
