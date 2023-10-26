import {
  Inform,
  StarIcon,
  ImgContainer,
  ItemContainer,
  ImgItem,
  InformContainer,
  InformTitle,
  StarContainer,
  StarWrap,
  StarBox,
  PriceContainer,
  PriceAction,
  PricePrevious,
  Description,
  PriceWrap,
  ButtonWrap,
} from "./ItemCard.styled";

import Button from "../Button/Button";

export default function ItemCard() {
  return (
    <ItemContainer>
      <ImgContainer>
        <Inform>
          <p>Działanie</p>
        </Inform>
        <ImgItem src="img/image.png" alt="Brasmatik" />
      </ImgContainer>
      <InformContainer>
        <InformTitle>Brasmatik do rzęs jest czarny</InformTitle>
        <Description>
          Tusz do rzęs zapewniający elegancką objętość i wydłużenie rzęs
        </Description>
        <PriceWrap>
          <div>
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
              <p>2</p>
            </StarContainer>
            <PriceContainer>
              <PriceAction>369 ₴</PriceAction>
              <PricePrevious>420 ₴</PricePrevious>
            </PriceContainer>
          </div>
          <ButtonWrap>
            <Button text="Do kosza" width="148px" isShopping></Button>
          </ButtonWrap>
        </PriceWrap>
      </InformContainer>
    </ItemContainer>
  );
}
