"use server";

import api from "@/config/axios";
import { ContactFormSchemaType } from "@/lib/zod/schema";

export async function handleSubmitContactForm(values: ContactFormSchemaType) {
  try {
    const { data } = await api.post("/contacts", {
      data: values,
    });
    console.log(data);
  } catch (error) {}
}
