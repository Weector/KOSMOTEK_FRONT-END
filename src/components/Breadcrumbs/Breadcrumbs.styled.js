import styled from "styled-components";

export const PathWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0px 8px 24px;

  background-color: var(--clr-card);
`;

export const PathList = styled.ul`
  height: 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
