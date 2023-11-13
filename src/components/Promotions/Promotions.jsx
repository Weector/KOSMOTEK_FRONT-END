import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product.json";
import Carousel from "../Carousel/Carousel";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";

export default function Promotions() {
  const { t } = useTranslation();
  return (
    <Container>
      <Carousel title={t("actions")} action>
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Carousel>
    </Container>
  );
}
