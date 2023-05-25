"use client";

import { styled } from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWithSearchIcon } from "./primaryInput";
import CartControl from "./cart-control";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
`;

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando por algo especifico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
