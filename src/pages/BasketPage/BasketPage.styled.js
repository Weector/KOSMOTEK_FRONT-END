import { Link } from "react-router-dom";
import styled from "styled-components";

export const BacketPageWrap = styled.div`
  padding: 32px 0px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: "";
    background-image: url("/icons/angle.svg");
    background-repeat: no-repeat;
    background-size: cover;
    color: black;
    display: block;
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }
`;

export const BacketPageTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
`;

export const EmptyBasketWrap = styled.div`
  margin: 40px 0px 80px 0px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
