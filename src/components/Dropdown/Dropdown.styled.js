import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 80px;
  width: 100%;
  /* height: auto; */
  min-height: 410px;

  background-color: var(--clr-card);
`;

export const DropdownListWrap = styled.div`
  padding-right: 56px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 0.75px;
    height: calc(100% - 56px);

    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;

    background-color: var(--clr-stroke);
  }
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DropdownItem = styled.li`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: -10px;

    width: 2px;
    height: 2px;

    border-radius: 50%;
    background-color: var(--clr-main-text);
  }

  &:hover::before {
    background-color: var(--clr-focus);
  }

  &:hover,
  &:focus {
    color: var(--clr-focus);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 360px;
  width: 282px;

  background-color: var(--clr-card);

  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s linear;

  &:hover {
    box-shadow: 0px 1px 4px 0px rgba(26, 26, 26, 0.2);
    background-image: url(${(props) => props.$img2});
    transition: background-image 0.3s linear;
  }
`;
