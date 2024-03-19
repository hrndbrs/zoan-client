import { CallToAction, BreadCrumb } from "@/components/shared";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-6 px-5">
        <div className="inner-container !justify-start">
          <BreadCrumb />
        </div>
      </div>
      {children}
      <CallToAction />
    </>
  );
}
