import Image from "next/image";
import { SplitContentWrapper } from "@/components/shared";
import ContactForm from "@/components/sections/contact-us/ContactForm";

export default function ContactUs() {
  return (
    <section id="contact-form" className="py-28 px-5 max-md:py-16">
      <SplitContentWrapper
        left={<ContactForm />}
        right={
          <div className="relative max-md:hidden">
            <Image
              src="/images/company-profile/company-img.avif"
              alt="certifications"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        }
      />
    </section>
  );
}
