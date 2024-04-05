import Image from "next/image";
import { SplitContentWrapper } from "@/components/shared";

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-[7.5rem] max-md:py-16">
      <SplitContentWrapper
        left={
          <div className="flex flex-col gap-6">
            <h3 className="text-5xl font-bold max-md:text-h4">ZOAN is TKDN and ISO Certified!</h3>
            <p>
              Our products are all TKDN + BMP Certified and ISO Certified. ZOAN was certified for
              ISO 45001:2018 and 14001:2015 by Lembaga Kebijakan Pengadaan Barang / Jasa Pemerintah
              (LKPP). <br /> #BanggaBuatanIndonesia
            </p>
          </div>
        }
        right={
          <div className="relative max-md:h-56">
            <Image
              src="/images/company-profile/tkd-pdn-certified.png"
              alt="certifications"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        }
      />
    </section>
  );
}
