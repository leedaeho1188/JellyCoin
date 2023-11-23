import { useCallback, useRef } from "react";

export default function useDebounce<T> (callback: Function, delay: number, dependency?: Array<any>) {
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback((...arg: Array<T>) => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }
    debounce.current = setTimeout(() => {
      callback(...arg);
    }, delay);
  }, [callback, delay, dependency]);
}