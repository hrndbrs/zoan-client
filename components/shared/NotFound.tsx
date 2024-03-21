import { MdOutlineWarning } from "react-icons/md";
import { cn } from "@/lib/utils";

export default function NotFound({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 text-natural-4 items-center justify-center px-5 py-60",
        className,
      )}
      {...props}
    >
      <MdOutlineWarning size={40} />
      {children}
    </div>
  );
}
