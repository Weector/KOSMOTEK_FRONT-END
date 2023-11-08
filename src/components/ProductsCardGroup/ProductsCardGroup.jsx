import React from "react";
import products from "../../data/product.json";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsList, ProductsWrap } from "./ProductsCardGroup.styled";

export default function ProductsCardGroup() {
  return (
    <ProductsWrap>
      <ProductsList>
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ProductsList>
    </ProductsWrap>
  );
}
