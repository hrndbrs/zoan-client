import { MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import { companyProfile } from "@/lib/mockData";

export default function LabelTop() {
  return (
    <div className="bg-natural-9 text-white px-5 py-2 max-md:hidden">
      <div className="inner-container md:justify-between text-body-12">
        <div className="flex gap-6">
          <div className="flex items-center gap-1">
            <MdLocalPhone size={16} />
            <p>{companyProfile.phoneNumber}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdLocationPin size={16} />
            <p>{companyProfile.address}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <p>Follow us on</p>
          <Link href={companyProfile.facebook}>
            <RiFacebookCircleFill size={20} />
          </Link>
          <Link href={companyProfile.instagram}>
            <RiInstagramFill size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
