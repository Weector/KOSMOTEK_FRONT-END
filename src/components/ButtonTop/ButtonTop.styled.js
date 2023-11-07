import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/svgs/arrow.svg";

export const Btn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 15px;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: #fff;
  transform: rotate(-90deg);

  filter: drop-shadow(0px 0px 11.25px rgba(26, 26, 26, 0.2));
  color: #25314c;
  transition: background-color 0.3s linear, color 0.3s linear;

  &:hover,
  &:focus {
    background-color: #d99a9a;
    color: #fff;
    transition: background-color 0.3s linear, color 0.3s linear;
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 30px;
  height: 30px;
`;
