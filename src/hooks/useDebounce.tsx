/* 
  The useDebounce hook is useful for delaying the execution of functions or state updates until a specified time period has passed without any further changes to the input value. This is especially useful in scenarios such as handling user input or triggering network requests, where it effectively reduces unnecessary computations and ensures that resource-intensive operations are only performed after a pause in the input activity.
*/

import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(id);
    };
  }, [delay, value]);

  return debouncedValue;
}
