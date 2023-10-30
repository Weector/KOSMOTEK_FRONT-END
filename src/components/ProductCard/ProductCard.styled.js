import styled from "styled-components";
import { ReactComponent as Star } from "../../images/svgs/star.svg";

export const ItemContainer = styled.li`
  max-width: 282px;
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 360px;
  padding: 22px 0px;
  background-color: var(--clr-card);

  ${ItemContainer}:hover & {
    box-shadow: 0px 1px 4px 0px rgba(26, 26, 26, 0.2);
  }
`;

export const Inform = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 78px;
  height: 31px;
  padding: 6px;
  color: #fff;
  text-align: center;

  background-color: var(--clr-actoin);
`;

export const ImgItem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 16px;
`;

export const InformTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.64px;

  ${ItemContainer}:hover & {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  color: var(--clr-secondary-text);

  ${ItemContainer}:hover & {
    text-decoration: underline;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 10px;
  padding: 2px 0px;
  margin-bottom: 10px;

  color: var(--clr-secondary-text);
`;

export const StarBox = styled.ul`
  display: flex;
  column-gap: 2px;
  padding: 4px 0px;
`;

export const StarWrap = styled.li`
  width: 10px;
  height: 10px;
`;

export const StarIcon = styled(Star)`
  width: 100%;
  height: 100%;
  display: block;
  /* stroke: black; */
  fill: black;
`;

export const PriceContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const PriceAction = styled.p`
  color: var(--clr-actoin);
`;

export const PricePrevious = styled.p`
  color: var(--clr-secondary-text);
  text-decoration: line-through;
`;

export const ButtonWrap = styled.div`
  opacity: 0;
  transition: opacity 0.5s linear;

  ${ItemContainer}:hover & {
    opacity: 1;
    transition: opacity 0.5s linear;
  }
`;