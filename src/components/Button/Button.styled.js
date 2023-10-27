import styled from "styled-components";

import { ReactComponent as Shopping } from "../../images/svgs/shopping-cart.svg";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;

  padding: 13px;
  height: 48px;

  font-size: 16px;
  letter-spacing: 0.64px;

  color: var(--clr-card);
  background-color: var(--clr-main-text);

  width: ${(props) => props.$size};

  span {
    position: relative;
  }

  span {
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 0px;
      height: 0.75px;
      background: var(--clr-card);
      transition: width 0.3s linear;
    }
  }

  span {
    &:hover::after {
      width: 100%;
    }
  }
`;

export const IconShopping = styled(Shopping)`
  width: 24px;
  height: 24px;
  fill: var(--clr-card);
`;
