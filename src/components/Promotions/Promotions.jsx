import Container from "../Container/Container";
import ItemCard from "../ItemCard/ItemCard";
import {
  Title,
  PromotionContainer,
  PromotionWrap,
  ButtonWrap,
  ArrowBtn,
  ItemWrap,
} from "./Promotions.styled";

export default function Promotions() {
  return (
    <Container>
      <PromotionContainer>
        <Title>PROMOCJE</Title>
        <PromotionWrap>
          <ButtonWrap>
            <ArrowBtn $left></ArrowBtn>
            <ArrowBtn></ArrowBtn>
          </ButtonWrap>
          <ItemWrap>
            <ItemCard />
          </ItemWrap>
        </PromotionWrap>
      </PromotionContainer>
    </Container>
  );
}
