"use server";

import api from "@/config/axios";
import { ContactFormSchemaType } from "@/lib/zod/schema";

export async function handleSubmitContactForm(values: ContactFormSchemaType) {
  try {
    await api.post("/contacts", {
      data: values,
    });
  } catch (error) {}
}
