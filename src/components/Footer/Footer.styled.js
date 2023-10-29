import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Facebook } from "../../images/svgs/facebook.svg";
import { ReactComponent as Instagram } from "../../images/svgs/instagram.svg";
import { ReactComponent as Youtube } from "../../images/svgs/youtube.svg";
import { Field, Form } from "formik";

export const FooterContainer = styled.div`
  background-color: var(--clr-main-text);
  color: var(--clr-card);
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
  padding: 80px 0px;
  border-bottom: 0.75px solid var(--clr-card);
`;

export const FooterWrapDown = styled.div`
  padding: 40px 0px;
  text-align: center;
`;

export const FooterTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  column-gap: 50px;
  max-width: 515px;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  h2 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.64px;
  }
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const ItemLink = styled(Link)`
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0px;
    height: 0.75px;
    background: var(--clr-card);
    transition: width 0.3s linear;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const FooterRightWrap = styled.div`
  display: flex;

  flex-direction: column;
`;
// Стилізація форми

export const SubscribeWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  flex-grow: 1;
`;

export const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const Input = styled(Field)`
  padding: 11px 16px;
  max-width: 213px;
  flex-grow: 1;

  background-color: var(--clr-main-text);
  color: var(--clr-secondary-text);

  border: 0.75px solid var(--clr-card);

  outline: none;
  &:focus {
    border-color: var(--clr-secondary-text);
  }
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100px;

  font-size: 14px;
  letter-spacing: 0.56px;

  color: inherit;
  background-color: #4f4f4f;

  transition: color 0.3s linear, background-color 0.3s linear;

  span {
    position: relative;
  }

  span {
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 0px;
      height: 0.75px;
      background: var(--clr-main-text);
      transition: width 0.3s linear;
    }
  }

  span {
    &:hover::after {
      width: 100%;
    }
  }

  &:hover {
    color: var(--clr-main-text);
    background-color: var(--clr-card);
  }
`;

// Стилізація іконок
export const NetworksWrap = styled.div``;

export const NetworksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: 24px;
`;

export const NetworksItem = styled.li``;

export const NetworksLink = styled.a`
  display: block;
  width: 24px;
  height: 24px;
`;

export const FacebookIcon = styled(Facebook)`
  width: 100%;
  height: 100%;

  &:hover {
    width: 26px;
    height: 26px;
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 100%;
  height: 100%;

  &:hover {
    width: 26px;
    height: 26px;
  }
`;

export const YoutubeIcon = styled(Youtube)`
  width: 100%;
  height: 100%;

  &:hover {
    width: 26px;
    height: 26px;
  }
`;
