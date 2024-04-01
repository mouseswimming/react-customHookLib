// the useDefault hook behaves similar to useState but with one difference - if the state of the hook in undefined or null, useDefault will default the state back to a provided default value.

import { useState } from "react";

type UseDefaultReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export default function useDefault<T>(
  initialValue: T,
  defaultValue: T
): UseDefaultReturnType<T> {
  const [state, setState] = useState(initialValue);

  if (state === null || typeof state === "undefined") {
    return [defaultValue, setState];
  }

  return [state, setState];
}
