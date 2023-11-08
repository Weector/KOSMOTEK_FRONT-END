import React from "react";
import {
  InformContainer,
  StarContainer,
  PriceWrap,
  StarBox,
  StarWrap,
  StarIcon,
  PriceContainer,
  ButtonWrap,
  InformTitle,
  Description,
  PriceAction,
  PricePrevious,
} from "./RandomProduct.styled";
import Button from "../../Button/Button";

export default function RandomProduct({ product }) {
  return (
    <InformContainer>
      <InformTitle>{product.name}</InformTitle>
      <Description>{product.description}</Description>
      <PriceWrap>
        <StarContainer>
          <StarBox>
            <StarWrap>
              <StarIcon />
            </StarWrap>
            <StarWrap>
              <StarIcon />
            </StarWrap>
            <StarWrap>
              <StarIcon />
            </StarWrap>
          </StarBox>
          <p>{product.coments}</p>
        </StarContainer>
        <PriceContainer>
          <PricePrevious>{product.price}₴</PricePrevious>
          <PriceAction>{product.action}₴</PriceAction>
        </PriceContainer>
      </PriceWrap>
      <ButtonWrap>
        <Button text="Do kosza" width="294px" isShopping></Button>
      </ButtonWrap>
    </InformContainer>
  );
}
