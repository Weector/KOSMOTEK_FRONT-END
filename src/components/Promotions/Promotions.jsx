import { useTranslation } from "react-i18next";
import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import {
  Title,
  PromotionContainer,
  PromotionWrap,
  ButtonWrap,
  ArrowBtn,
  ItemWrap,
} from "./Promotions.styled";

export default function Promotions() {
  const { t } = useTranslation();
  return (
    <Container>
      <PromotionContainer>
        <Title>{t("actions")}</Title>
        <PromotionWrap>
          <ButtonWrap>
            <ArrowBtn $left></ArrowBtn>
            <ArrowBtn></ArrowBtn>
          </ButtonWrap>
          <ItemWrap>
            <ProductCard />
          </ItemWrap>
        </PromotionWrap>
      </PromotionContainer>
    </Container>
  );
}
