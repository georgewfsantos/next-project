import { GetStaticProps } from "next";
import { Product } from ".";

interface Top4Props {
  products: Product[];
}

export default function Top4({ products }: Top4Props) {
  return (
    <div>
      <h1>Top 4</h1>

      <ul>
      {products.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Top4Props> = async (context) => {
  const response = await fetch('http://localhost:3333/products');
  const products = await response.json();

  return {
    props: {
      products
    }, 
    revalidate: 5,
  }
}