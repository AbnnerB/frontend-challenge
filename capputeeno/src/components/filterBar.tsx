"use client";

import { styled } from "styled-components";
import FilterByType from "./FilterByType";
import FilterByPriority from "./FilterByPriority";

interface FilterBarProps {}

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export default function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
