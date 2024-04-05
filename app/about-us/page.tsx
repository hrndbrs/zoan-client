import {
  CompanyProfile,
  Certifications,
  // GradientBackground,
} from "@/components/sections/about-us";
import { CallToAction } from "@/components/shared";
import { generateSeo } from "@/lib/helpers";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeo("About Us");
}

export default function AboutUs() {
  return (
    <>
      {/* <GradientBackground /> */}
      <CompanyProfile />
      <Certifications />
      <CallToAction className="max-md:hidden" />
    </>
  );
}
