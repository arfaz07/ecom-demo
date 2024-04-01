import { Metadata } from "next";
import React from "react";
import "../../page.module.css";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await Promise.resolve(params.id);

  return {
    title: "SYU Products Demo",
    description: `SEO Desciption with ID ${res}`,
  };
}

const Product = ({ params }: Props) => {
  return (
    <div className="center">
      <h1>Product {params.id}</h1>
    </div>
  );
};

export default Product;
