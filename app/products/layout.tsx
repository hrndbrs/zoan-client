import { CallToAction } from "@/components/shared";
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CallToAction />
    </>
  );
}
