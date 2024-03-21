"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdOutlineCheck } from "react-icons/md";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

type ShareIconsContainerPropType = {
  baseUrl: string;
};

export default function ShareIconsContainer({ baseUrl }: ShareIconsContainerPropType) {
  const pathname = usePathname();
  const url = `${baseUrl}${pathname}`;

  return (
    <div className="flex gap-2">
      <ShareLinkButton url={url} />
    </div>
  );
}

function ShareLinkButton({ url }: { url: string }) {
  const [isCopied, setIsCopied] = useState(false);

  let t: NodeJS.Timeout;

  function copyBlogUrl() {
    if (t) clearTimeout(t);
    navigator.clipboard.writeText(url);
    setIsCopied(true);
  }

  function handleMouseLeave() {
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  useEffect(() => {
    return () => clearTimeout(t);
  }, []);

  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onMouseLeave={handleMouseLeave} onClick={copyBlogUrl}>
            {isCopied ? (
              <MdOutlineCheck size={20} className="inline text-green-600" />
            ) : (
              <Image src="/icons/link.svg" width={18} height={18} alt="share" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy link to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
