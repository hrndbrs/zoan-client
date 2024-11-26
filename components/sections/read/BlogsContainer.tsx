import Link from "next/link";
import { CustomCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { appendImageUrl, formatDate } from "@/lib/helpers";
import { BlogData } from "@/lib/types/blogs.type";

type BlogsContainerPropType = {
  blogs: BlogData[];
};

export default function BlogsContainer({ blogs }: BlogsContainerPropType) {
  return (
    <div className="inner-container">
      <div className="w-full grid gap-8 md:grid-cols-3">
        {blogs.map(({ attributes: blog }) => (
          <CustomCard
            key={blog.title}
            imageUrl={appendImageUrl(blog.banner.data.attributes.url)}
            title={blog.title}
            description={
              <>
                <p>{formatDate(new Date(blog.publishedAt))}</p>
                <div
                  className="line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </>
            }
            className="shadow-md rounded-none flex flex-col"
            contentClassName="py-3 px-4 flex-1 justify-between"
            titleClassName="text-h5 line-clamp-1"
            innerContentClassName="gap-1"
          >
            <Link className="self-end" href={`/read/${blog.title}`}>
              <Button variant="default-2">Read</Button>
            </Link>
          </CustomCard>
        ))}
      </div>
    </div>
  );
}
