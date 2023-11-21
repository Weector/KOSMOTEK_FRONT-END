import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product.json";
import Carousel from "../Carousel/Carousel";

import Container from "../Container/Container";
import { PromotionsContainer } from "./Promotions.styled";

export default function Promotions() {
  return (
    <PromotionsContainer>
      <Container>
        <Carousel>
          {products.map((product, index) => {
            return <ProductCard key={product.id} product={product} action />;
          })}
        </Carousel>
      </Container>
    </PromotionsContainer>
  );
}
