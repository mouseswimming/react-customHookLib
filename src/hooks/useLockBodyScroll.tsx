import { useLayoutEffect } from "react";

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    const orgStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = orgStyle;
    };
  }, []);
}
