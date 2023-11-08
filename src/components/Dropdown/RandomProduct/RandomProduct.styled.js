import styled from "styled-components";
import { ReactComponent as Star } from "../../../images/svgs/star.svg";

export const InformContainer = styled.div`
  width: 293px;
`;

export const InformTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-bottom: 4px;

  ${InformContainer}:hover & {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin-bottom: 16px;

  color: var(--clr-secondary-text);

  ${InformContainer}:hover & {
    text-decoration: underline;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: baseline;
  align-items: center;
  column-gap: 10px;
  padding: 2px 0px;

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

  fill: black;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
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

export const ButtonWrap = styled.div`
  /* opacity: 0;
  transition: opacity 0.5s linear; */

  ${InformContainer}:hover & {
    opacity: 1;
    transition: opacity 0.5s linear;
  }
`;
