import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft } from "react-icons/md";
import { SectionHeader } from "@/components/shared";
import ShareIconsContainer from "./ShareIconsContainer";
import { formatDate, appendImageUrl } from "@/lib/helpers";
import { BlogData } from "@/lib/types/blogs.type";

const BASE_URL = process.env.NEXT_APP_BASE_URL!;

export default function BlogDetailContainer({ blog }: { blog: BlogData }) {
  const { author, content, publishedAt, title, banner } = blog.attributes;
  const { url } = banner.data.attributes;
  return (
    <section className="pt-6 px-5 pb-20">
      <div className="inner-container flex-col !items-start gap-6">
        <Link href="/read" className="text-body-12 flex items-center gap-2 mb-12">
          <MdChevronLeft size={20} /> All Posts
        </Link>
        <SectionHeader subtitle="News or Blogs" title={title} className="mb-0" />
        <div className="relative w-full aspect-[16/9]">
          <Image src={appendImageUrl(url)} fill style={{ objectFit: "cover" }} alt={title} />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-12">
            <div>
              <p className="mb-2">Written by</p>
              <p className="font-bold">{author || "Anonymous"}</p>
            </div>
            <div>
              <p className="mb-2">Published on</p>
              <p className="font-bold">
                {formatDate(new Date(publishedAt), {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <ShareIconsContainer baseUrl={BASE_URL} />
        </div>
        <div
          className="whitespace-pre-line text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
