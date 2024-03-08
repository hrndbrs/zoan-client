"use client";

import { warrantyClaimFormSchema } from "@/lib/zod/schema";
import { InputFieldProps } from "@/components/shared/form/CustomForm";
import { CustomForm } from "@/components/shared";
import { categories } from "@/lib/mockData";

export default function WarrantyClaimForm() {
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
      options: categories.map(({ slug, name }) => {
        return { value: slug, label: name };
      }),
    },
    { name: "purchaseDate", type: "date", inputType: "date" },
    { name: "address", inputType: "textarea" },
  ];
  function handleSubmit(values: any) {
    console.log(values);
  }
  return (
    <section id="warranty-form" className="px-5 py-6">
      <div className="flex flex-col mb-12 gap-4 md:items-center">
        <p className="text-body-16 uppercase font-bold">Services</p>
        <h3 className="text-h3 uppercase font-bold max-md:text-h4">Warranty Claim</h3>
        <p className="text-body-16">
          Please fill out form below completely to make a warrayt claim for ZOAN products.
        </p>
      </div>
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
