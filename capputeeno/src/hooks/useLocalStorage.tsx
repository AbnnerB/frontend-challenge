import { useEffect, useState } from "react";

export default function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    let valueLocal = localStorage.getItem(item);
    if (valueLocal) setValue(JSON.parse(valueLocal));
  }, []);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}
