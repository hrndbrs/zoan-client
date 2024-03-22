"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CustomCard } from ".";
import { Button } from "@/components/ui/button";
import useOnClickScroll from "@/hooks/useOnClickScroll";
import { appendImageUrl, formatDate } from "@/lib/helpers";
import { BlogData } from "@/lib/types/blogs.type";
import { getLatestBlogs } from "@/services/blogs-viewer.service";

type BlogViewerPropType = {
  header?: string;
  showScrollButton?: boolean;
};

export default function BlogViewer({ header, showScrollButton = true }: BlogViewerPropType) {
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  const { scrollAreaRef, scrollLeft, scrollRight } = useOnClickScroll();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getLatestBlogs(signal).then((data) => {
      if (data) setBlogs(data);
    });

    return () => controller.abort();
  }, []);

  return (
    <section className="px-5 py-16 bg-natural-1">
      {header || showScrollButton ? (
        <div className="flex justify-between items-center mx-auto max-w-[75rem] mb-8">
          {header ? (
            <h4 className="uppercase font-bold text-h4 max-md:text-h5">{header}</h4>
          ) : undefined}
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
          ) : undefined}
        </div>
      ) : (
        ""
      )}
      <ScrollArea ref={scrollAreaRef} className="w-full whitespace-nowrap">
        <div className="max-w-[75rem] mx-auto flex mb-8 space-x-6 max-md:space-x-3">
          {blogs.map(({ id, attributes: blog }) => (
            <CustomCard
              key={id}
              imageUrl={appendImageUrl(blog.banner.data.attributes.url)}
              title={blog.title}
              description={
                <>
                  <p>{formatDate(new Date(blog.publishedAt))}</p>
                  <div
                    className="line-clamp-4 whitespace-normal text-justify max-md:line-clamp-6"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </>
              }
              className="viewer-card"
              contentClassName="py-3 px-4"
              titleClassName="text-h5 whitespace-normal line-clamp-1"
              innerContentClassName="gap-1"
              descriptionClassName="max-md:font-bold"
            >
              <Link className="self-end" href={`/read/${blog.title}`}>
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
