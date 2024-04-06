import { useState, useEffect, useRef } from "react";

export default function useVisibilityChecker(yOffset: number = 0, xOffset: number = 0) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible =
          rect.top + yOffset >= 0 &&
          rect.left + xOffset >= 0 &&
          rect.bottom + yOffset <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right + xOffset <= (window.innerWidth || document.documentElement.clientWidth);
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
