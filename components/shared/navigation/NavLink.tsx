"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps extends React.LiHTMLAttributes<{}> {
  path: string;
  hoverEffect?: boolean;
}

export default function NavLink({ className, path, children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li className="flex items-center" {...props}>
      <Link
        href={path}
        className={cn("w-full max-md:pb-8", className, isActive ? "after:w-full" : "")}
      >
        {children}
      </Link>
    </li>
  );
}
