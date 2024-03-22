"use client";

import { useState, useEffect } from "react";
import { warrantyClaimFormSchema } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { CustomForm, SectionHeader } from "@/components/shared";
import { getProductCategories } from "@/services/categories.service";
import { SelectOption } from "@/lib/types/select-option.type";
import { handleSubmitWarrantyForm } from "@/services/warranty.service";

export default function WarrantyClaimForm() {
  const [categories, setCategories] = useState<SelectOption[]>([]);
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
      options: categories,
    },
    { name: "purchaseDate", type: "date", inputType: "date" },
    { name: "address", inputType: "textarea" },
  ];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getProductCategories(signal).then((data) => {
      if (data)
        setCategories(
          data.map((category) => {
            const { title } = category.attributes;
            return {
              value: title,
              label: title,
            };
          }),
        );
    });

    return () => controller.abort();
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
          onSubmit={handleSubmitWarrantyForm}
          buttonClassName="self-center max-md:self-start"
        />
      </div>
    </section>
  );
}
