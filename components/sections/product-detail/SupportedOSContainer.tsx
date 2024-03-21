import Image from "next/image";
import { SplitContentWrapper } from "@/components/shared";
import { SupportedOS } from "@/lib/types/products.type";

type SupportedOSContainerPropType = {
  os: SupportedOS[];
};

export default function SupportedOSContainer({ os }: SupportedOSContainerPropType) {
  return (
    <section className="py-16 px-5">
      <SplitContentWrapper
        left={
          <div className="flex flex-col gap-6">
            <h4 className="text-h4 uppercase font-bold w-full cust-underline after:w-[7.5rem] pb-3">
              Supported Operating System
            </h4>
            <div>
              {os.map((supportedOs) => {
                return (
                  <>
                    <p className="font-bold mb-3">{supportedOs.name}</p>
                    {supportedOs.type.map((osType) => (
                      <p key={osType.id}>{osType.type}</p>
                    ))}
                  </>
                );
              })}
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
