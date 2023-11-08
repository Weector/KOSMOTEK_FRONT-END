import styled from "styled-components";

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 204px;
`;

export const FilterItem = styled.li`
  border-top: 0.75px solid var(--clr-stroke);
  border-bottom: 0.75px solid var(--clr-stroke);
  padding: 16px 0px;

  font-size: 16px;
  letter-spacing: 0.64px;
`;
