import { formattedValue } from "@/utils/format-price";
import { styled } from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0px 8px 4px 4px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 256px;

  overflow: hidden;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 8px 0;
  }

  span {
    width: 228px;
    height: 1px;
    background-color: var(--shapes);
    margin: 8px 0;
  }
`;

export default function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <img src={props.image} alt="imagemFundo" />
      <div>
        <h3>{props.title}</h3>
        <span></span>
        <p>{formattedValue(props.price)}</p>
      </div>
    </Card>
  );
}
