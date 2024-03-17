import { useRef } from "react";

export default function useOnClickScroll() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  function getScrollAmount() {
    return window.innerWidth <= 400 ? 312 : 424;
  }

  function handleButtonClick(amount: number) {
    if (!scrollAreaRef.current) return;

    const newScrollPosition = scrollAreaRef.current.scrollLeft + amount;

    scrollAreaRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  }

  function scrollLeft() {
    handleButtonClick(-getScrollAmount());
  }

  function scrollRight() {
    handleButtonClick(getScrollAmount());
  }

  return {
    scrollAreaRef,
    scrollLeft,
    scrollRight,
  };
}
