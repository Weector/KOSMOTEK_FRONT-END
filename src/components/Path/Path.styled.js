import styled from "styled-components";

export const PathWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 24px;

  background-color: var(--clr-card);
`;

export const PathList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
`;

export const PathItem = styled.li`
  &:not(:last-child) {
    color: #b8b8b8;
  }

  &::before {
    content: "/";
    display: inline;
    color: var(--clr-secondary-text);
    margin: 0px 8px;
  }

  &:first-child::before {
    content: "";
    margin: 0px;
  }
`;
