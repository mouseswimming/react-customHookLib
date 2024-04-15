import { useState, useCallback } from "react";

type StateUpdater<T> = Partial<T> | ((prevState: T) => Partial<T>);

function useObjectState<T extends Record<string, unknown>>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  const handleUpdate = useCallback((value: StateUpdater<T>) => {
    setState((prevState) => {
      return typeof value === "function"
        ? { ...prevState, ...value(prevState) }
        : { ...prevState, ...value };
    });
  }, []);

  return [state, handleUpdate] as const;
}

export default useObjectState;
