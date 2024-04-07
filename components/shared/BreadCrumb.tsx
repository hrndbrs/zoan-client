"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { decodeURL } from "@/lib/helpers";

export default function BreadCrumb() {
  const routes = usePathname().substring(1).split("/");

  return (
    <p className="line-clamp-1">
      {routes.map((route) => {
        const isCurrentRoute = route === routes.at(-1);
        return (
          <span
            key={route}
            className={cn("text-body-12", isCurrentRoute ? "underline" : undefined)}
          >
            {decodeURL(route)} {!isCurrentRoute ? <>/&nbsp;</> : undefined}
          </span>
        );
      })}
    </p>
  );
}
