import styled, { css } from "styled-components";

export const HeroContainer = styled.div`
  padding-bottom: 40px;
`;

export const SlideWrap = styled.div`
  position: relative;

  max-width: 1200px;
  aspect-ratio: 3/1;

  overflow: hidden;
`;

export const SlideButton = styled.button`
  position: absolute;
  top: 50%;

  width: 34px;
  height: 34px;

  background-color: rgba(255, 255, 255, 0.75);
  border: none;
  background-image: url("../../icons/angle.svg");
  background-repeat: no-repeat;
  background-size: cover;
  color: black;

  ${(props) =>
    props.$left &&
    css`
      left: 30px;
      transform: translate(0, -50%) rotate(-180deg);
      z-index: 1;
    `}

  ${(props) =>
    props.$right &&
    css`
      right: 30px;
      transform: translate(0, -50%);
      z-index: 1;
    `}

    opacity: 0;

  ${SlideWrap}:hover & {
    opacity: 1;
  }
`;

export const Slide = styled.div`
  display: flex;
  position: absolute;

  width: 100%;
  height: 100%;

  /* opacity: 0;
  transition: opacity ease-in-out 0.4s; */
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PointWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;

  margin-top: 10px;
`;

export const Point = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
