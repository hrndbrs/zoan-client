"use client";

import { CustomForm, SectionHeader, BreadCrumb } from "@/components/shared";
import { contactFormSchema } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { cities } from "@/assets/static";
import { handleSubmitContactForm } from "@/services/contact.service";

export default function ContactForm() {
  const inputFields: InputFieldProps[] = [
    { name: "name" },
    { name: "phoneNumber", label: "Telephone" },
    {
      name: "city",
      inputType: "select",
      options: cities.map((city) => ({ value: city, label: city })),
      placeholder: "Select a city",
    },
    { name: "company" },
    { name: "message", inputType: "textarea" },
  ];

  return (
    <div>
      <SectionHeader
        title="Get In Touch"
        subtitle={<BreadCrumb />}
        description="Don't worry, we are ready to help you"
        emphasizeSub={false}
      />
      <CustomForm
        schema={contactFormSchema}
        inputFields={inputFields}
        onSubmit={handleSubmitContactForm}
        buttonClassName="self-start"
      >
        Send Message
      </CustomForm>
    </div>
  );
}
