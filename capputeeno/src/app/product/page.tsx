"use client";

import { styled } from "styled-components";

import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { BackButton } from "@/components/backButton";
import { useProduct } from "@/hooks/useProduct";
import { formattedValue } from "@/utils/format-price";
import { ShopBagIcon } from "@/components/icons/shopping-bag-icon";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        background-color: #115d8c;
        color: white;
        border-radius: 4px;
        border: none;
        padding: 10px 0px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }

  @media screen and (max-width: 750px) {
    section {
      flex-direction: column;
      img {
        width: 100%;
      }
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }
  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  .priceProduct {
    color: var(--shapes-dark);
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark-2);
  }

  div {
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: var(--text-dark);
    }
  }
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  function handleAddToCart() {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: String }) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id });
      }

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...data, id: searchParams.id, quantity: 1 }];

      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} alt="imagem" />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span className="priceProduct">
                {formattedValue(data?.price_in_cents ?? 0)}
              </span>
              <p>
                Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$200,00
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>

            <button onClick={handleAddToCart}>
              <ShopBagIcon />
              Adicionar ao Carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}
