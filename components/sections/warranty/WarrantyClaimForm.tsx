"use client";

import { useContext } from "react";
import { warrantyClaimFormSchema } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { CustomForm, SectionHeader } from "@/components/shared";
import { handleSubmitWarrantyForm } from "@/services/warranty.service";
import { CategoryContext } from "@/contexts/CategoryProvider";

export default function WarrantyClaimForm() {
  const { categories } = useContext(CategoryContext);
  const categoryOptions = categories.map(({ attributes }) => ({
    value: attributes.title,
    label: attributes.title,
  }));
  const inputFields: InputFieldProps[] = [
    { name: "name" },
    { name: "institutionName" },
    { name: "email", type: "email" },
    { name: "phone" },
    { name: "serialNumber" },
    {
      name: "productCategory",
      inputType: "select",
      placeholder: "Select one...",
      options: categoryOptions,
    },
    { name: "purchaseDate", type: "date", inputType: "date" },
    { name: "address", inputType: "textarea" },
  ];

  return (
    <section id="warranty-form" className="px-5 py-6">
      <SectionHeader
        title="Warranty Claim"
        subtitle="Services"
        description="Please fill out form below completely to make a warranty claim for ZOAN products."
        className="md:items-center"
      />
      <div className="inner-container !max-w-3xl">
        <CustomForm
          schema={warrantyClaimFormSchema}
          inputFields={inputFields}
          onSubmit={handleSubmitWarrantyForm}
          buttonClassName="self-center max-md:self-start"
        />
      </div>
    </section>
  );
}
