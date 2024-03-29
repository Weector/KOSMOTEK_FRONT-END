import styled from "styled-components";

export const ListBrand = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 0px;
`;

export const ItemBrand = styled.li`
  &:hover {
    color: var(--clr-focus);
  }
`;
