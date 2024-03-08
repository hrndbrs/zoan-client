import { Card, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  icon?: string;
  title: string;
  description: React.ReactNode;
  titleClass?: string;
  descriptionClass?: string;
  contentClass?: string;
  innerContentClass?: string;
}

export default function CustomCard({
  children,
  title,
  description,
  imageUrl,
  icon,
  className,
  titleClass,
  descriptionClass,
  contentClass,
  innerContentClass,
  ...props
}: CustomCardProps) {
  return (
    <Card className={cn("category-card", className)} {...props}>
      {imageUrl ? (
        <div className="w-full relative aspect-[600/396] overflow-hidden">
          <Image src={imageUrl} fill style={{ objectFit: "cover" }} alt={title} />
        </div>
      ) : (
        ""
      )}
      <CardContent className={cn("flex flex-col gap-6 p-8", contentClass)}>
        {icon ? (
          <div className="relative w-full flex h-8">
            <Image
              src={icon}
              fill
              style={{
                objectFit: "none",
                objectPosition: "0 50%",
              }}
              alt={title}
            />
          </div>
        ) : (
          ""
        )}
        <div className={cn("flex flex-col gap-6", innerContentClass)}>
          <CardTitle className={cn("uppercase font-bold", titleClass)}>{title}</CardTitle>
          <CardDescription className={cn("text-body-16", descriptionClass)}>
            {description}
          </CardDescription>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
