import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrap = styled.div`
  padding-top: 1px;

  &::after {
    content: "";
    width: 100%;
    height: 0.75px;
    background-color: var(--clr-stroke);
    display: block;
    margin-top: 10px;
  }
`;

export const NavigationStyle = styled.ul`
  position: relative;
  display: flex;
  column-gap: 55px;
  justify-content: center;
`;

export const NavItem = styled.li`
  display: flex;
`;

export const LinkStyle = styled(NavLink)`
  &.active {
    color: var(--clr-focus);
  }

  &:hover,
  &:focus {
    color: var(--clr-focus);
  }
`;

export const DropdownWrap = styled.div`
  padding-top: 10px;
  width: 100%;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 2;

  visibility: hidden;
  opacity: 0;

  transition: all 0.5s ease-in-out;

  ${NavItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
