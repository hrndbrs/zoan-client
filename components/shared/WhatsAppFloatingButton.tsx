import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { WhatsAppIconSVG } from "./SVG";

export default function WhatsAppFloatingButton() {
  return (
    <a
      className="fixed z-[1000] p-5 bottom-0 right-0 xl:right-[110.5px] transition-[opacity] opacity-[0.24] hover:opacity-100"
      href="https://api.whatsapp.com/send?phone=62817888822"
      target="_blank"
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <WhatsAppIconSVG />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              Contact us via <span className="font-bold">WhatsApp</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </a>
  );
}
