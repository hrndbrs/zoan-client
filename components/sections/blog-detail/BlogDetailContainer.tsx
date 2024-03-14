import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft } from "react-icons/md";
import { SectionHeader } from "@/components/shared";
import { formatDate } from "@/lib/helpers";
import { BlogType } from "@/lib/mockData";

export default function BlogDetailContainer({ blog }: { blog: BlogType }) {
  return (
    <section className="pt-6 px-5 pb-20">
      <div className="inner-container flex-col !items-start gap-6">
        <Link href="/read" className="text-body-12 flex items-center gap-2 mb-12">
          <MdChevronLeft size={20} /> All Posts
        </Link>
        <SectionHeader subtitle="News or Blogs" title={blog.title} className="mb-0" />
        <div className="relative w-full aspect-[16/9]">
          <Image src={blog.thumbnail} fill style={{ objectFit: "cover" }} alt={blog.slug} />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-12">
            <div>
              <p className="mb-2">Written by</p>
              <p className="font-bold">{blog.author}</p>
            </div>
            <div>
              <p className="mb-2">Published on</p>
              <p className="font-bold">
                {formatDate(blog.publishedDate, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <div>
            <Image src="/icons/link.svg" width={18} height={18} alt="share" />
          </div>
        </div>
        <p className="whitespace-pre-line text-justify">{blog.content}</p>
      </div>
    </section>
  );
}
