import styled from "styled-components";

export const ProductDiscriptionContainer = styled.div`
  /* padding-bottom: 80px; */

  /* border-bottom: 0.75px solid var(--clr-stroke); */
`;

export const ProductDiscriptionWrap = styled.div`
  width: 645px;
  /* height: 660px; */
`;

export const NameDescriptonList = styled.ul`
  display: flex;
  column-gap: 16px;
  padding-bottom: 4px;

  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const NameDescriptonItem = styled.li`
  position: relative;

  color: var(--clr-secondary-text);

  cursor: pointer;

  &.active {
    color: var(--clr-main-text);

    &::after {
      content: "";
      position: absolute;
      bottom: -4.5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--clr-main-text);
      display: block;
    }
  }
`;

export const DescriptonList = styled.ul`
  padding: 24px 0px 0px 0px;
  height: 100%;

  overflow: auto;
`;

export const DescriptonItem = styled.li``;
