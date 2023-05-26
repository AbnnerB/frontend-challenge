"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./productCard";

export default function ProductsList() {
  const { data } = useProducts();

  console.log(data);

  return (
    <div>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))}
    </div>
  );
}
