"use client";

import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
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
  const [priority, setPriority] = useState(PriorityTypes.POPOULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        type,
        setType,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
