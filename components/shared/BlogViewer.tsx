import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CustomCard } from ".";
import { Button } from "@/components/ui/button";
import { BlogType } from "@/lib/mockData";
import { formatDate } from "@/lib/helpers";

export default function BlogViewer({ blogs }: { blogs: BlogType[] }) {
  return (
    <section className="px-5">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="max-w-[75rem] mx-auto flex mb-8 space-x-6 max-md:space-x-3">
          {blogs.map((blog) => (
            <CustomCard
              key={blog.slug}
              imageUrl={blog.thumbnail}
              title={blog.title}
              description={
                <>
                  <p>{formatDate(blog.publishedDate)}</p>
                  <p className="line-clamp-4">{blog.content}</p>
                </>
              }
              className="shadow-md max-w-sm rounded-none"
              contentClassName="py-3 px-4"
              titleClassName="text-h5"
              innerContentClassName="gap-1"
            >
              <Link className="self-end" href={`/read/${blog.slug}`}>
                <Button variant="default-2">Read</Button>
              </Link>
            </CustomCard>
          ))}
        </div>
        <ScrollBar className="max-w-[75rem] mx-auto" orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
