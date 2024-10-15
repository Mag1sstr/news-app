import { useState } from "react";

export function useFilters(initialFilters) {
  const [filters, setFilters] = useState(initialFilters);

  function changeFilter(key, value) {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  }
  return { filters, changeFilter };
}
