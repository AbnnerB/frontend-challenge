import { ProductFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post("http://localhost:3333/", {
    query: `
        query {
            Product(id : "${productId}"){
                name
                description
                category
                price_in_cents
                image_url
            }
        }
    `,
  });
};

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ["product", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: data?.data?.data?.Product,
  };
}
