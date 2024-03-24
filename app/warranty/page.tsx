import WarrantyClaimForm from "@/components/sections/warranty/WarrantyClaimForm";
import { CallToAction } from "@/components/shared";
import { generateSeo } from "@/lib/helpers";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {  
  return generateSeo("Warranty");
}

export default function Warranty() {
  return (
    <>
      <WarrantyClaimForm />
      <CallToAction className="max-md:hidden" />
    </>
  );
}
