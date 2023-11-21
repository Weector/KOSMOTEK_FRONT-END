import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../images/svgs/arrow.svg";

export const CarouselContainer = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
`;

export const ArrowBtn = styled.button`
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;

  ${(props) =>
    props.$left &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const ArrowIcon = styled(Arrow)`
  width: 100%;
  height: 100%;
`;

export const SlideContainer = styled.div`
  overflow: hidden;
`;

export const ItemWrap = styled.ul`
  display: flex;
  column-gap: 24px;
  justify-content: space-between;
  margin-top: 24px;

  transition: transform;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
`;
