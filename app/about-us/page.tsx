import { CompanyProfile, Certifications, GradientBackground } from "@/components/sections/about-us";
import { CallToAction } from "@/components/shared";

export default function AboutUs() {
  return (
    <>
      <GradientBackground />
      <CompanyProfile />
      <Certifications />
      <CallToAction className="max-md:hidden" />
    </>
  );
}
