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
`;

export const IconShopping = styled(Shopping)`
  width: 24px;
  height: 24px;
  fill: var(--clr-card);
`;
