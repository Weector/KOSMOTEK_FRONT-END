import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrap = styled.div`
  padding: 1px 15px 10px 15px;
`;

export const NavigationStyle = styled.nav`
  display: flex;
  column-gap: 55px;
  justify-content: center;
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
