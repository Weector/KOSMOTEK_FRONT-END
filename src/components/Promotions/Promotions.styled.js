import styled, { css } from "styled-components";

export const PromotionContainer = styled.div`
  padding-top: 57px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;

  color: var(--clr-actoin);
`;

export const PromotionWrap = styled.div`
  margin-top: 15px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
`;

export const ArrowBtn = styled.button`
  width: 24px;
  height: 24px;

  background-color: transparent;
  background-image: url("icons/arrow.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border: none;

  ${(props) =>
    props.$left &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const ItemWrap = styled.ul`
  margin-top: 24px;
`;
