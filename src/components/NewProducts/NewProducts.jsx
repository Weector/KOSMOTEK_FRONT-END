import React from "react";
import Container from "../Container/Container";
import Carousel from "../Carousel/Carousel";
import products from "../../data/product.json";
import ProductCard from "../ProductCard/ProductCard";

export default function NewProducts() {
  return (
    <Container>
      <Carousel>
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} newProduct />;
        })}
      </Carousel>
    </Container>
  );
}
