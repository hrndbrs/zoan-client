import { Card, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  imageUrl?: string;
  icon?: string;
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
  contentClass?: string;
}

export default function CustomCard({
  children,
  title,
  description,
  imageUrl,
  icon,
  className,
  contentClass,
  titleClass,
  descriptionClass,
  ...props
}: CustomCardProps) {
  return (
    <Card className={cn("category-card", className)} {...props}>
      {imageUrl ? (
        <div className="w-full relative aspect-[600/396] overflow-hidden">
          <Image src={imageUrl} fill alt={title} />
        </div>
      ) : (
        ""
      )}
      <CardContent className={cn("flex flex-col gap-6 p-8", contentClass)}>
        {icon ? <img src={icon} className="h-8" alt={title} /> : ""}
        <CardTitle className={cn("uppercase font-bold", titleClass)}>{title}</CardTitle>
        <CardDescription className={cn("text-base", descriptionClass)}>
          {description}
        </CardDescription>
        {children}
      </CardContent>
    </Card>
  );
}
