import { useState } from "react";

export default function usePrevious(value: string) {
  const [currentState, setCurrentState] = useState(value);
  const [previousState, setPreviousState] = useState<null | string>(null);

  if (currentState !== value) {
    setPreviousState(currentState);
    setCurrentState(value);
  }

  return previousState;
}
