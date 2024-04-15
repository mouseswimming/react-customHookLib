import { useCallback, useState } from "react";

export default function useList<T>(initialState: T[] = []) {
  const [list, setList] = useState(initialState);

  const set = useCallback((newList: T[]) => {
    setList(newList);
  }, []);

  const push = useCallback((item: T) => {
    setList((prev) => [...prev, item]);
  }, []);

  const removeAt = useCallback((index: number) => {
    setList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }, []);

  const insertAt = useCallback((index: number, item: T) => {
    setList((prev) => [...prev.slice(0, index), item, ...prev.slice(index)]);
  }, []);

  const updateAt = useCallback((index: number, item: T) => {
    setList((prev) =>
      prev.map((e, i) => {
        if (i === index) return item;
        return e;
      })
    );
  }, []);

  const clear = useCallback(() => {
    setList([]);
  }, []);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }] as const;
}
