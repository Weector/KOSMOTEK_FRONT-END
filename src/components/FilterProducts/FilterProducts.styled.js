import { Link } from "react-router-dom";
import styled from "styled-components";

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 204px;
`;

export const FilterItem = styled.li`
  border-top: 0.75px solid var(--clr-stroke);
  border-bottom: 0.75px solid var(--clr-stroke);

  font-size: 16px;
  letter-spacing: 0.64px;
  padding: 16px 0px;
  width: 100%;
`;

export const FilterLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    background-image: url("/icons/angle-down-small.svg");
    width: 24px;
    height: 24px;
  }
`;
