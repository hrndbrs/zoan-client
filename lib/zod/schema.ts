import { z } from "zod";
import { cities } from "@/assets/static";

export const contactFormSchema = z
  .object({
    name: z.string(),
    phoneNumber: z.string(),
    city: z.enum(cities),
    message: z.string(),
    company: z.string(),
  })
  .required();

export const warrantyClaimFormSchema = z
  .object({
    name: z.string(),
    institutionName: z.string(),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    serialNumber: z.string(),
    productCategory: z.string(),
    purchaseDate: z.date().max(new Date()),
    address: z.string(),
  })
  .required();

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
export type WarrantyClaimFormSchemaType = z.infer<typeof warrantyClaimFormSchema>;
