"use client";

import FilterContextProvider from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProps {
  children: ReactNode;
}

const theme = {
  desktopBreakpoint: "968px",
  tabletBreakpoint: "768px",
};

export default function DefaultProvider({ children }: DefaultProps) {
  const client = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={client}>
        <FilterContextProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </div>
  );
}
