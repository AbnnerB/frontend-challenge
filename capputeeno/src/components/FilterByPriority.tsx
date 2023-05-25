import { styled } from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priorityTypes";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background: transparent;
    border: none;

    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 16px;
  }
`;

const PriorityFilter = styled.ul`
  width: 178px;

  position: absolute;
  top: 130%;

  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0.1);
  background-color: #ffffff;
  padding: 12px 16px;

  list-style: none;

  li {
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export default function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);

  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdate = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>

      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdate(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdate(PriorityTypes.BIGGEST_PRICE)}>
            Preco: Maior - menor
          </li>
          <li onClick={() => handleUpdate(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdate(PriorityTypes.POPOULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
