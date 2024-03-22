import { cn } from "@/lib/utils";

interface SectionHeaderPropType extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string | React.ReactNode;
  description?: string;
  emphasizeSub?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className,
  emphasizeSub = true,
  ...props
}: SectionHeaderPropType) {
  return (
    <div className={cn("flex flex-col mb-12 gap-4", className)} {...props}>
      <p className={cn(emphasizeSub ? "uppercase font-bold" : undefined)}>{subtitle}</p>
      <div className={cn("flex flex-col gap-6", className)}>
        <h3 className="text-h3 uppercase font-bold max-md:text-h4">{title}</h3>
        {description ? <p>{description}</p> : undefined}
      </div>
    </div>
  );
}
