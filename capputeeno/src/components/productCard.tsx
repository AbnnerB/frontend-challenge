import { formattedValue } from "@/utils/format-price";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import { Divider } from "./divider";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  cursor: pointer;

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
    padding: 8px 12px;
    width: 100%;
  }
`;

export default function ProductCard(props: ProductCardProps) {
  const router = useRouter();

  function handleNavigate() {
    router.push(`/product?id=${props.id}`);
  }

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} alt="imagemFundo" />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{formattedValue(props.price)}</p>
      </div>
    </Card>
  );
}
