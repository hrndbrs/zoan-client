"use client";

import { usePathname } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type CustPaginationPropType = {
  page: number;
  pageCount: number;
};

export default function CustPagination({ page, pageCount }: CustPaginationPropType) {
  const pathname = usePathname();
  function generatePath(idx: number) {
    return `${pathname}?page=${idx + 1}`;
  }

  function generatePaginationItem<T = any>(
    cb: (value: T, index: number, arr: T[]) => JSX.Element,
    size: number = pageCount,
  ) {
    return new Array(size).fill("").map(cb);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${pathname}?page=${page - 1}`}
            aria-disabled={page <= 1}
            className={page <= 1 ? "pointer-events-none opacity-50" : undefined}
          />
        </PaginationItem>
        {pageCount < 7 ? (
          generatePaginationItem((_, idx) => {
            const isActive = page === idx + 1;
            return (
              <PaginationItem key={idx}>
                <PaginationLink
                  href={generatePath(idx)}
                  isActive={isActive}
                  aria-disabled={isActive}
                  className={isActive ? "pointer-events-none" : undefined}
                >
                  {String(idx + 1).padStart(2, "0")}
                </PaginationLink>
              </PaginationItem>
            );
          })
        ) : page <= 4 ? (
          <>
            {generatePaginationItem((_, idx) => {
              const isActive = page === idx + 1;
              return (
                <PaginationItem>
                  <PaginationLink
                    href={generatePath(idx)}
                    isActive={isActive}
                    aria-disabled={isActive}
                    className={isActive ? "pointer-events-none" : undefined}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </PaginationLink>
                </PaginationItem>
              );
            }, 5)}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={generatePath(pageCount)}>
                {String(pageCount).padStart(2, "0")}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : page >= pageCount - 2 ? (
          <>
            <PaginationItem>
              <PaginationLink href={generatePath(0)}>01</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            {generatePaginationItem((_, idx) => {
              const pageIndex = pageCount - 3 + idx;
              const isActive = page === pageIndex;
              return (
                <PaginationItem key={pageIndex}>
                  <PaginationLink
                    href={generatePath(pageIndex - 1)}
                    isActive={isActive}
                    aria-disabled={isActive}
                    className={isActive ? "pointer-events-none" : undefined}
                  >
                    {String(pageIndex).padStart(2, "0")}
                  </PaginationLink>
                </PaginationItem>
              );
            }, 4)}
          </>
        ) : (
          <>
            <PaginationItem>
              <PaginationLink href={generatePath(0)}>01</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            {generatePaginationItem((_, idx) => {
              const pageIndex = page - 1 + idx;
              const isActive = page === pageIndex;
              return (
                <PaginationItem key={pageIndex}>
                  <PaginationLink
                    href={generatePath(pageIndex - 1)}
                    isActive={isActive}
                    aria-disabled={isActive}
                    className={isActive ? "pointer-events-none" : undefined}
                  >
                    {String(pageIndex).padStart(2, "0")}
                  </PaginationLink>
                </PaginationItem>
              );
            }, 3)}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={generatePath(pageCount - 1)}>
                {String(pageCount).padStart(2, "0")}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href={`${pathname}?page=${page + 1}`}
            aria-disabled={page >= pageCount}
            className={page >= pageCount ? "pointer-events-none opacity-50" : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
