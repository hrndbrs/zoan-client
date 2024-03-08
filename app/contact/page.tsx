"use client";

import Image from "next/image";
import { SplitContentWrapper, CustomForm } from "@/components/shared";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/zod/schema";

export default function ContactUs() {
  const inputFields: InputFieldProps[] = [
    { name: "name" },
    { name: "phone", label: "Telephone" },
    {
      name: "city",
      inputType: "select",
      options: [
        { value: "Jakarta", label: "Jakarta" },
        { value: "Bandung", label: "Bandung" },
        { value: "Surabaya", label: "Surabaya" },
      ],
      placeholder: "Select a city",
    },
    { name: "message", inputType: "textarea" },
  ];

  function handleSubmit(values: ContactFormSchemaType) {
    console.log(values);
  }

  return (
    <section id="contact-form" className="py-28 px-5 max-md:py-16">
      <SplitContentWrapper
        left={
          <div>
            <div className="flex flex-col mb-8 gap-4">
              <p className="text-body-12 underline">Contact us</p>
              <h3 className="text-h3 uppercase font-bold max-md:text-h4">Get In Touch</h3>
              <p className="text-body-16">Don&apos;t worry, we are ready to help you</p>
            </div>
            <CustomForm
              schema={contactFormSchema}
              inputFields={inputFields}
              onSubmit={handleSubmit}
              buttonClassName="self-start"
            >
              Send Message
            </CustomForm>
          </div>
        }
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
