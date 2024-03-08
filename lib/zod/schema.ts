import { z } from "zod";

export const contactFormSchema = z
  .object({
    name: z.string(),
    phone: z.string(),
    city: z.string(),
    messsage: z.string(),
  })
  .required();

export const warrantyClaimFormSchema = z
  .object({
    name: z.string(),
    institutionName: z.string(),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    serialNumber: z.string(),
    categorySlug: z.string(),
    purchaseDate: z.date().max(new Date()),
    address: z.string(),
  })
  .required();

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
export type WarrantyClaimFormSchemaType = z.infer<typeof warrantyClaimFormSchema>;
