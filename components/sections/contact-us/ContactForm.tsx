"use client";

import { CustomForm, SectionHeader, BreadCrumb } from "@/components/shared";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { cities } from "@/assets/static";

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

  function handleSubmitContactForm(formData: ContactFormSchemaType) {
    const a = document.getElementById("email");
    const mailDestination = process.env.SALES_CONTACT_EMAIL;
    const body = JSON.stringify(formData, null, 4);

    const linker = `mailto:${mailDestination}?subject=${encodeURI("Contact Form Submission")}&body=${body}`;

    a?.setAttribute("href", linker);

    a?.click();

    a?.setAttribute("href", "#");
  }

  return (
    <div>
      <a id="email" href="#" className="hidden"></a>
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
        showToast={false}
      >
        Send Message
      </CustomForm>
    </div>
  );
}
