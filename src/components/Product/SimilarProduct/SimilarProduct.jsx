import ProductCard from "../../ProductCard/ProductCard";
import {
  SimilarProductContainer,
  SimilarProductList,
  SimilarProductTitle,
} from "./SimilarProduct.styled";

export default function SimilarProduct({ products }) {
  return (
    <SimilarProductContainer>
      <SimilarProductTitle>Podobne produkty</SimilarProductTitle>
      <SimilarProductList>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </SimilarProductList>
    </SimilarProductContainer>
  );
}
