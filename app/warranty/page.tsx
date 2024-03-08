import WarrantyClaimForm from "@/components/sections/warranty/WarrantyClaimForm";
import { CallToAction } from "@/components/shared";

export default function Warranty() {
  return (
    <>
      <WarrantyClaimForm />
      <CallToAction className="max-md:hidden" />
    </>
  );
}
