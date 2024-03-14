"use client";

import { CustomForm, SectionHeader, BreadCrumb } from "@/components/shared";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";

export default function ContactForm() {
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
        onSubmit={handleSubmit}
        buttonClassName="self-start"
      >
        Send Message
      </CustomForm>
    </div>
  );
}
