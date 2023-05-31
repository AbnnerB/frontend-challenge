import { FormEvent, InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";

const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--text-dark);

  background-color: var(--bg-secondary);

  @media screen and (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    line-height: 22px;
    font-size: 14px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 352px;
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
