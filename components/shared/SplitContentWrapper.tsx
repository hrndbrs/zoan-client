import { cn } from "@/lib/utils";

interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function SplitContentWrapper({
  left,
  right,
  className,
  ...props
}: ContentWrapperProps) {
  return (
    <div className="inner-container" {...props}>
      <div className={cn("grid gap-20 w-full md:grid-cols-2", className)}>
        {left}
        {right}
      </div>
    </div>
  );
}
