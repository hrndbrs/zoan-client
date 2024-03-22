"use server";

import api from "@/config/axios";
import { WarrantyClaimFormSchemaType } from "@/lib/zod/schema";

export async function handleSubmitWarrantyForm(values: WarrantyClaimFormSchemaType) {
  try {
    await api.post("/warranties", {
      data: values,
    });
  } catch (error) {}
}
