import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(cb: TimerHandler, ms: number | undefined) {
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleClearCallback = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(cb, ms);

    return handleClearCallback;
  }, [cb, handleClearCallback, ms]);

  return handleClearCallback;
}
