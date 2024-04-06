import { useState, useEffect, useRef } from "react";

type Options = {
  init?: boolean;
  yOffset?: number;
  xOffset?: number;
};

export default function useVisibilityChecker({
  init = true,
  yOffset = 0,
  xOffset = 0,
}: Options = {}) {
  const [isVisible, setIsVisible] = useState<boolean>(init);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible =
          rect.top + yOffset >= 0 &&
          rect.bottom + yOffset <= (window.innerHeight || document.documentElement.clientHeight);

        setIsVisible(isVisible);
      }
    }
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [xOffset, yOffset]);

  return [ref, isVisible] as const;
}
