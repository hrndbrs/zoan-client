import { CallToAction } from "@/components/shared";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CallToAction />
    </>
  );
}
