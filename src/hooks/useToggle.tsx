// useToggle is similar to useState which return an array [state, setState]. However, unlike useState, useToggle's state value can only be a boolean

import { useCallback, useState } from "react";

type UseToggleReturnType<T> = [boolean, React.Dispatch<T | undefined>];

export default function useToggle<T>(
  initialValue: boolean | undefined = true
): UseToggleReturnType<T> {
  const [on, setOn] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }
    return Boolean(initialValue);
  });

  const handleToggle = useCallback((value?: T) => {
    if (typeof value === "boolean") {
      setOn(value);
    } else {
      setOn((prev) => !prev);
    }
  }, []);

  return [on, handleToggle];
}
