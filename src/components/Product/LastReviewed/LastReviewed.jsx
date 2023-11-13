import React from "react";
import Carousel from "../../Carousel/Carousel";
import ProductCard from "../../ProductCard/ProductCard";

export default function LastReviewed({ products }) {
  return (
    <Carousel title={"Ostatnio przeglądałeś"} dark>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Carousel>
  );
}
