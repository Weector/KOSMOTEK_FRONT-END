import styled from "styled-components";
import { ReactComponent as Logo } from "../../../images/svgs/Kosmotek.svg";
import { ReactComponent as Search } from "../../../images/svgs/search.svg";
import { ReactComponent as User } from "../../../images/svgs/user-alt.svg";
import { ReactComponent as Heart } from "../../../images/svgs/heart.svg";
import { ReactComponent as Shopping } from "../../../images/svgs/shopping-cart.svg";
import { Link } from "react-router-dom";

export const HeaderMiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  padding: 35px 0px;
`;

export const IconLogo = styled(Logo)`
  width: 168px;
  height: 50px;
`;

export const InputWrap = styled.div`
  position: relative;

  width: 384px;
  height: 40px;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  padding: 0px;

  width: 24px;
  height: 24px;

  background-color: inherit;
  border: none;

  &:hover,
  &:focus {
    width: 26px;
    height: 26px;
  }
`;

export const IconSearch = styled(Search)`
  /* position: absolute;
  top: 8px;
  right: 16px; */

  width: 100%;
  height: 100%;

  fill: var(--clr-main-text);
`;

export const Input = styled.input`
  padding: 8px 50px 8px 16px;
  width: 100%;
  height: 100%;

  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;

  border-radius: 24px;
  border: 0.75px solid var(--clr-main-text);
  outline: none;

  /* &:focus {
    border-color: var(--clr-hover);
  } */
`;

export const IconsNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
`;

export const IconLink = styled(Link)`
  height: 24px;
`;

export const Cicle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 24px;
  height: 24px;

  font-size: 16px;
  font-weight: 300;
  color: var(--clr-hover);

  border: 1px solid var(--clr-hover);
  border-radius: 50%;
`;

export const IconUser = styled(User)`
  width: 24px;
  height: 24px;

  fill: var(--clr-main-text);

  &:hover {
    fill: var(--clr-hover);
  }
`;

export const IconHeart = styled(Heart)`
  width: 24px;
  height: 24px;
  stroke: var(--clr-main-text);

  &:hover {
    stroke: var(--clr-hover);
  }
`;

export const IconShopping = styled(Shopping)`
  width: 24px;
  height: 24px;
  fill: var(--clr-main-text);

  &:hover {
    fill: var(--clr-hover);
  }
`;
