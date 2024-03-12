import Link from "next/link";
import { CustomCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { blogs } from "@/lib/mockData";
import { formatDate } from "@/lib/helpers";

export default function BlogsContainer() {
  return (
    <div className="inner-container">
      <div className="w-full grid gap-8 md:grid-cols-3">
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
            className="shadow-md rounded-none"
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
    </div>
  );
}
