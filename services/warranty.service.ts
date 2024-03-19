"use server";

import api from "@/config/axios";
import { WarrantyClaimFormSchemaType } from "@/lib/zod/schema";

export async function handleSubmitWarrantyForm(values: WarrantyClaimFormSchemaType) {
  try {
    const { data } = await api.post("/service-center", {
      data: values,
    });
    console.log(data);
  } catch (error) {}
}
