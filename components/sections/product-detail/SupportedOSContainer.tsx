import Image from "next/image";
import { SplitContentWrapper } from "@/components/shared";

export default function SupportedOSContainer() {
  return (
    <section className="py-16 px-5">
      <SplitContentWrapper
        left={
          <div className="flex flex-col gap-6">
            <h4 className="text-h4 uppercase font-bold w-full cust-underline after:w-[7.5rem] pb-3">
              Supported Operating System
            </h4>
            <div>
              <p className="font-bold mb-3">Windows</p>
              <p>Windows® Server 2019</p>
              <p>Windows® Server 2016</p>
              <p>Windows 10</p>
            </div>
            <div>
              <p className="font-bold mb-3">Linux</p>
              <p>RedHat® Enterprise Linux 7.5</p>
              <p>SuSE® Enterprise Linux 12 SP3</p>
              <p>CentOS 7.4</p>
            </div>
          </div>
        }
        right={
          <div className="relative w-full h-[294px] bottom-0 right-0 max-lg:hidden">
            <Image
              src="/images/supergraphics/7x5_(2)_4.svg"
              alt="sg"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "100% 50%",
              }}
            />
          </div>
        }
      />
    </section>
  );
}
