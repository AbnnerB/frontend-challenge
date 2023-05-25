import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filterTypes";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  color: var(--text-dark);
  text-transform: uppercase;
  font-family: inherit;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};

  text-align: center;

  cursor: pointer;

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

export default function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}
