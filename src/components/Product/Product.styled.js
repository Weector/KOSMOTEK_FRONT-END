import styled from "styled-components";
import { ReactComponent as Star } from "../../images/svgs/star.svg";
import { ReactComponent as Heart } from "../../images/svgs/heart.svg";
import { ReactComponent as Plus } from "../../images/svgs/plus.svg";
import { ReactComponent as Minus } from "../../images/svgs/minus.svg";

export const ProductsContainer = styled.div`
  padding: 40px 0px;

  display: flex;
  justify-content: space-between;
`;

export const ProductImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 8px;

  margin-bottom: 40px;

  width: 612px;
`;

export const ProductBigImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 466px;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ProductImagesWrap = styled.div``;

export const ProductImagesList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 40px;
`;

export const ProductImagesItem = styled.li`
  padding: 5px;
  border: 1px solid var(--clr-stroke);

  &.active {
    border: 1px solid var(--clr-main-text);
  }
`;

export const ProductSmallImageContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const InformContainer = styled.div`
  position: sticky;
  top: 40px;

  width: 486px;
  height: 100%;
`;

export const TopInformWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 44px;
`;

export const ActionContainer = styled.div`
  padding: 6px;
  color: #fff;
  background-color: var(--clr-actoin);
`;

export const LikeWrap = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const HeartWrap = styled.div`
  width: 24px;
  height: 24px;

  stroke: black;
`;

export const HeartIcon = styled(Heart)`
  width: 100%;
  height: 100%;

  &:hover {
    stroke: none;
    fill: var(--clr-actoin);
  }
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.96px;

  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;

  color: var(--clr-secondary-text);
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 10px;

  margin-bottom: 10px;

  color: var(--clr-secondary-text);
`;

export const StarBox = styled.ul`
  display: flex;
  column-gap: 2px;
`;

export const StarWrap = styled.li`
  width: 10px;
  height: 10px;
`;

export const StarIcon = styled(Star)`
  width: 100%;
  height: 100%;
  display: block;

  fill: black;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding-bottom: 24px;

  margin-bottom: 24px;

  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const PriceAction = styled.p`
  font-size: 28px;
  line-height: 1.54;
  letter-spacing: 1.12px;

  color: var(--clr-actoin);
`;

export const PricePrevious = styled.p`
  color: var(--clr-secondary-text);
  text-decoration: line-through;
`;

export const VariantContainer = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const VariantName = styled.p`
  color: var(--clr-secondary-text);
  margin-bottom: 16px;
`;

export const VariantWrap = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Variant = styled.li`
  width: 28px;
  height: 28px;
`;

export const StatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const KodProduct = styled.span`
  color: var(--clr-secondary-text);
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CountWrap = styled.div`
  display: flex;
`;

export const Count = styled.div`
  height: 49px;
  width: 39px;
  padding: 14px 7px;
  text-align: center;
  line-height: 1.54;

  border-top: 1px solid var(--clr-secondary-text);
  border-bottom: 1px solid var(--clr-secondary-text);
`;

export const CountButton = styled.button`
  padding: 11px 7px;
  height: 49px;
  width: 39px;

  background-color: inherit;

  border: 1px solid var(--clr-secondary-text);
`;

export const PlusIcon = styled(Plus)``;

export const MinucIcon = styled(Minus)``;
