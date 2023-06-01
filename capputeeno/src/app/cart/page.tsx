"use client";

import { BackButton } from "@/components/backButton";
import CartItem from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { Divider } from "@/components/divider";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formattedValue } from "@/utils/format-price";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  h3 {
    margin-top: 24px;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`;

const CartlList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  min-width: 352px;
  padding: 16px 24px;
  max-height: 340px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;

  font-weight: ${(props) => (props.isBold ? "600" : "400")};
  line-height: 150%;

  margin-bottom: 12px;
`;

const ShoBtn = styled.button`
  color: white;
  border-radius: 4px;
  background-color: var(--sucess-color);
  border: none;
  padding: 12px;
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
`;

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = formattedValue(calculateTotal(value));
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formattedValue(
    calculateTotal(value) + deliveryFee
  );

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });

    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });

    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} Produtos
            <span>{cartTotal}</span>
          </p>
          <CartlList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            ))}
          </CartlList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formattedValue(deliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShoBtn>Finalizar Compra</ShoBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
