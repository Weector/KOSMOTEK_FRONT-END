import styled from "styled-components";

import { ReactComponent as Check } from "../../images/svgs/check.svg";
import { Link } from "react-router-dom";
import { Btn } from "../Button/Button.styled";

export const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  padding: 8px;
  margin-bottom: 28px;
  background-color: #e6ffdd;
`;

export const CheckIconWrap = styled.div`
  width: 24px;
  height: 24px;
`;

export const CheckIcon = styled(Check)`
  fill: #48ae26;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonLeft = styled(Btn)`
  background-color: #fff;
  color: var(--clr-main-text);
  border: 2px solid var(--clr-main-text);
  min-width: 203px;
  span {
    &::after {
      background: var(--clr-main-text);
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  padding: 14px;
  min-width: 203px;
  text-align: center;
  background-color: var(--clr-main-text);
  color: var(--clr-card);

  span {
    position: relative;
  }

  span {
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;

      width: 0px;
      height: 0.75px;

      background: var(--clr-card);
      transition: width 0.2s linear;
    }
  }

  span {
    &:hover::after {
      width: 100%;
    }
  }
`;
