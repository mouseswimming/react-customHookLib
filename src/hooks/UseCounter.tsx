import { useCallback, useState } from "react";

type ReturnType = [
  number,
  {
    increment: () => void;
    decrement: () => void;
    set: (value: number) => void;
    reset: () => void;
  }
];

export default function useCounter(
  startNum: number,
  option: { min?: number; max?: number }
): ReturnType {
  const { min, max } = option;

  if (typeof min === "number" && startNum < min) {
    throw new Error(
      `your starting value of ${startNum} can't be less than its min ${min}`
    );
  }

  if (typeof max === "number" && startNum > max) {
    throw new Error(
      `your starting value of ${startNum} can't be less than its min ${max}`
    );
  }

  const [count, setCount] = useState(startNum);

  const increment = useCallback(() => {
    setCount((prev) => {
      if (typeof max === "number" && prev < max) {
        return prev + 1;
      }

      return prev;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((prev) => {
      if (typeof min === "number" && prev > min) {
        return prev - 1;
      }
      return prev;
    });
  }, [min]);

  const set = useCallback(
    (value: number) => {
      setCount((prev) => {
        if (typeof min === "number" && value < min) {
          return prev;
        }
        if (typeof max === "number" && value > max) {
          return prev;
        }

        return value;
      });
    },
    [min, max]
  );

  const reset = useCallback(() => {
    setCount(startNum);
  }, [startNum]);

  return [count, { increment, decrement, set, reset }];
}
