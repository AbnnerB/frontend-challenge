import { styled } from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react";

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

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>

      {isOpen && (
        <PriorityFilter>
          <li>Novidades</li>
          <li>Preco: Maior - menor</li>
          <li>Preço: Menor - maior</li>
          <li>Mais vendidos</li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
