/* 
The useQueue hook is a useful tool for managing a queue of elements within a functional component. It allows you to easily add, remove, and clear elements from the queue while maintaining the necessary state updates. The hook returns an object that includes the functions for manipulating the queue (add, remove, and clear), as well as additional properties such as first, last, size, and queue.
*/

import { useCallback, useState } from "react";

export default function useQueue<T>(initialValue: T[] = []) {
  const [queue, setQueue] = useState(initialValue);

  const add = useCallback((value: T) => {
    setQueue((prev) => [...prev, value]);
  }, []);

  const remove = useCallback(() => {
    setQueue((prev) => {
      if (prev.length > 0) return prev.slice(1);
      return prev;
    });
  }, []);

  const clear = useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
}
