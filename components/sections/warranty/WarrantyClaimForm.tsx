"use client";

import { useState, useEffect } from "react";
import { warrantyClaimFormSchema, WarrantyClaimFormSchemaType } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { CustomForm, SectionHeader } from "@/components/shared";
import { getProductCategories } from "@/services/categories.service";
import { SelectOption } from "@/lib/types/select-option.type";

export default function WarrantyClaimForm() {
  const [categories, setCategories] = useState<SelectOption[]>([]);
  const inputFields: InputFieldProps[] = [
    { name: "name" },
    { name: "institutionName" },
    { name: "email", type: "email" },
    { name: "phone" },
    { name: "serialNumber" },
    {
      name: "categorySlug",
      label: "Product Category",
      inputType: "select",
      placeholder: "Select one...",
      options: categories,
    },
    { name: "purchaseDate", type: "date", inputType: "date" },
    { name: "address", inputType: "textarea" },
  ];

  function handleSubmit(values: WarrantyClaimFormSchemaType) {
    console.log(values);
  }

  useEffect(() => {
    getProductCategories().then((data) => {
      if (data)
        setCategories(
          data.map((category) => ({
            value: category.id,
            label: category.attributes.title,
          })),
        );
    });
  }, []);

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
          onSubmit={handleSubmit}
          buttonClassName="self-center max-md:self-start"
        />
      </div>
    </section>
  );
}
