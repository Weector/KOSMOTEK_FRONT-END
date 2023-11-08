import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product.json";
import Carousel from "../Carousel/Carousel";
import { useTranslation } from "react-i18next";

export default function Promotions() {
  const { t } = useTranslation();
  return (
    <Carousel title={t("actions")}>
      {products.map((product, index) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Carousel>
  );
}
