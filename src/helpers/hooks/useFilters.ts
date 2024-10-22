import { useState } from "react";
import { IFilters } from "../../interfaces";

export function useFilters(initialFilters: IFilters) {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  function changeFilter(key: string, value: string | null | number) {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  }
  return { filters, changeFilter };
}
