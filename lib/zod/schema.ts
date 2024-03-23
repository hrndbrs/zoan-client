import { z } from "zod";
import { cities } from "@/assets/static";

export const contactFormSchema = z
  .object({
    name: z.string().min(1, "Required"),
    phoneNumber: z.string().min(1, "Required"),
    city: z.enum(cities, {
      errorMap: () => {
        return { message: "Please select a valid option" };
      },
    }),
    message: z.string().min(1, "Required"),
    company: z.string().min(1, "Required"),
  })
  .required();

export const warrantyClaimFormSchema = z
  .object({
    name: z.string().min(1, "Required"),
    institutionName: z.string().min(1, "Required"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(1, "Required"),
    serialNumber: z.string().min(1, "Required"),
    productCategory: z.string().min(1, "Required"),
    purchaseDate: z.date().max(new Date()),
    address: z.string().min(1, "Required"),
  })
  .required();

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
export type WarrantyClaimFormSchemaType = z.infer<typeof warrantyClaimFormSchema>;
