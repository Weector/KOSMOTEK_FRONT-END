import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrap = styled.div`
  position: relative;
`;

export const UserNavList = styled.ul`
  margin: 0px auto 0px auto;
  padding-top: 40px;

  max-width: 587px;

  display: flex;
  justify-content: space-between;

  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const WrapPage = styled.div`
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  position: absolute;
  top: 53px;
  right: 0;

  font-size: 14px;
  letter-spacing: 0.56px;

  background-color: inherit;
`;

export const UserNavItem = styled.li`
  padding: 10px 0px;

  color: var(--clr-secondary-text);
  font-size: 16px;
  letter-spacing: 0.64px;
`;

export const UserNavLink = styled(NavLink)`
  &.active {
    color: var(--clr-main-text);
  }
`;

export const Slider = styled.div`
  /* width: 150px; */
  position: absolute;
  height: 1px;
  background-color: var(--clr-main-text);
  bottom: 0;

  transition: all 0.3s ease;

  width: ${(props) => `${props.$width}px`};
  left: ${(props) => `${props.$left}px`};
`;
