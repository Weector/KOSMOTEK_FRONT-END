import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderTopWrap = styled.div`
  padding: 10px 0px;
  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const TopContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
`;

export const LanguageList = styled.nav`
  display: flex;
  column-gap: 16px;
`;

export const NavLanguage = styled(Link)`
  color: var(--clr-secondary-text);

  &:hover {
    color: var(--clr-hover);
  }

  &.act {
    color: var(--clr-main-text);
  }
`;
