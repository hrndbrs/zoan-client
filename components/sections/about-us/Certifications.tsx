import Image from "next/image";
import { SplitContentWrapper } from "@/components/shared";

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-[7.5rem] max-md:py-16">
      <SplitContentWrapper
        left={
          <div className="flex flex-col gap-6">
            <h3 className="text-5xl font-bold max-md:text-h4">We are TKD and PDN Certified</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        }
        right={
          <div className="relative max-md:h-56">
            <Image
              src="/images/company-profile/tkd-pdn-certified.png"
              alt="certifications"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        }
      />
    </section>
  );
}
