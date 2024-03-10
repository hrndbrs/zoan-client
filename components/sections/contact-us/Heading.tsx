import { BreadCrumb } from "@/components/shared";

export default function Heading() {
  return (
    <div className="flex flex-col mb-8 gap-4">
      <BreadCrumb />
      <div className="flex flex-col gap-6">
        <h3 className="text-h3 uppercase font-bold max-md:text-h4">Get In Touch</h3>
        <p className="text-body-16">Don&apos;t worry, we are ready to help you</p>
      </div>
    </div>
  );
}
