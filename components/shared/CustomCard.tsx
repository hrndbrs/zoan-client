import { Card, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CustomCardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  innerContentClassName?: string;
}

export enum IconSize {
  SM = "h-8",
  MD = "h-[2.625rem]",
}

type CustomCardProps = CustomCardBaseProps &
  (
    | {
        icon: string;
        iconsize?: IconSize;
        iconClassName?: string;
      }
    | { icon?: undefined }
  ) &
  (
    | {
        imageUrl: string;
        imageClassName?: string;
      }
    | {
        imageUrl?: undefined;
      }
  );

export default function CustomCard({
  children,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  contentClassName,
  innerContentClassName,
  ...props
}: CustomCardProps) {
  return (
    <Card className={className}>
      {props.imageUrl ? (
        <div
          className={cn("w-full relative aspect-[600/396] overflow-hidden", props.imageClassName)}
        >
          <Image src={props.imageUrl} fill style={{ objectFit: "cover" }} alt={title} />
        </div>
      ) : undefined}
      <CardContent className={cn("flex flex-col gap-6 p-8", contentClassName)}>
        {props.icon ? (
          <div
            className={cn(
              "relative w-full flex",
              props.iconsize ? props.iconsize : IconSize.SM,
              props.iconClassName,
            )}
          >
            <Image
              src={props.icon}
              fill
              style={{
                objectFit: "none",
                objectPosition: "0 50%",
              }}
              alt={title}
            />
          </div>
        ) : undefined}
        <div className={cn("flex flex-col gap-6", innerContentClassName)}>
          <CardTitle className={cn("uppercase font-bold", titleClassName)}>{title}</CardTitle>
          {description ? (
            <CardDescription className={cn("text-body-16", descriptionClassName)}>
              {description}
            </CardDescription>
          ) : undefined}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
