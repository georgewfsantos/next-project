import { GetServerSideProps } from "next";
import { useCallback } from "react";
import { Title } from "../styles/pages/Home";

import SEO from "@/components/SEO";
export interface Product {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: Product[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <div>
      <SEO
        title="DevShop: the best coding store"
        shouldExcludeTitleSuffix
        image="headset.jpeg"
      />

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recommended`
  );
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts,
    },
  };
};
