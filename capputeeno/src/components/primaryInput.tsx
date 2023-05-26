import { FormEvent, InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";

const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);

  background-color: var(--bg-secondary);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWithSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event: any) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}
