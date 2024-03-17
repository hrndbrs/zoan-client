"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CustomCard } from ".";
import { Button } from "@/components/ui/button";
import useOnClickScroll from "@/hooks/useOnClickScroll";
import { BlogType } from "@/lib/mockData";
import { formatDate } from "@/lib/helpers";

type BlogViewerPropType = {
  blogs: BlogType[];
  header?: string;
  showScrollButton?: boolean;
};

export default function BlogViewer({ blogs, header, showScrollButton = true }: BlogViewerPropType) {
  const { scrollAreaRef, scrollLeft, scrollRight } = useOnClickScroll();
  return (
    <section className="px-5 py-16 bg-natural-1">
      {header || showScrollButton ? (
        <div className="flex justify-between items-center mx-auto max-w-[75rem] mb-8">
          {header ? <h4 className="uppercase font-bold text-h4 max-md:text-h5">{header}</h4> : ""}
          {showScrollButton ? (
            <div>
              <Button onClick={scrollLeft} variant="transparent">
                <Image
                  src="/icons/arrow-left-dark.svg"
                  alt="arrow-left"
                  width={30.82}
                  height={20}
                  className="opacity-15 hover:opacity-50 transition-all duration-300"
                />
              </Button>
              <Button onClick={scrollRight} variant="transparent">
                <Image
                  src="/icons/arrow-right-dark.svg"
                  alt="arrow-right"
                  width={30.82}
                  height={20}
                  className="opacity-15 hover:opacity-50 transition-all duration-300"
                />
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <ScrollArea ref={scrollAreaRef} className="w-full whitespace-nowrap">
        <div className="max-w-[75rem] mx-auto flex mb-8 space-x-6 max-md:space-x-3">
          {blogs.map((blog) => (
            <CustomCard
              key={blog.slug}
              imageUrl={blog.thumbnail}
              title={blog.title}
              description={
                <>
                  <p>{formatDate(blog.publishedDate)}</p>
                  <p className="line-clamp-4 whitespace-normal text-justify max-md:line-clamp-6">
                    {blog.content}
                  </p>
                </>
              }
              className="viewer-card"
              contentClassName="py-3 px-4"
              titleClassName="text-h5"
              innerContentClassName="gap-1"
              descriptionClassName="max-md:font-bold"
            >
              <Link className="self-end" href={`/read/${blog.slug}`}>
                <Button variant="default-2">Read</Button>
              </Link>
            </CustomCard>
          ))}
        </div>
        <ScrollBar className="max-w-[75rem] mx-auto bg-natural-2" orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
