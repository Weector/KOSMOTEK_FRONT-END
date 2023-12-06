import { ReactComponent as Plus } from "../../images/svgs/plus.svg";
import { ReactComponent as Minus } from "../../images/svgs/minus.svg";
import styled from "styled-components";

export const CountWrap = styled.div`
  display: flex;
`;

export const CountTotal = styled.div`
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
