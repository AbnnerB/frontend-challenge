"use client";

import { FilterType } from "@/types/filterTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export default function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{ search, setSearch, page, setPage, type, setType }}
    >
      {children}
    </FilterContext.Provider>
  );
}
