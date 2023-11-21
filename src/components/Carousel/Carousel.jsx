import {
  ButtonWrap,
  ArrowBtn,
  ItemWrap,
  ArrowIcon,
  CarouselContainer,
  SlideContainer,
} from "./Carousel.styled.js";

import { useState } from "react";

const WIDTH_SLIDE = 1200;

export default function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const maxSlide = -(Math.floor((children.length - 1) / 4) * WIDTH_SLIDE);

  const handleLeft = () => {
    setCurrentSlide((e) => {
      const newSlide = e + WIDTH_SLIDE;
      return Math.min(newSlide, 0);
    });
  };

  const handleRight = () => {
    setCurrentSlide((e) => {
      const newSlide = e - WIDTH_SLIDE;
      return Math.max(newSlide, maxSlide);
    });
  };

  return (
    <CarouselContainer>
      <ButtonWrap>
        <ArrowBtn $left onClick={handleLeft} disabled={currentSlide === 0}>
          <ArrowIcon />
        </ArrowBtn>
        <ArrowBtn onClick={handleRight} disabled={currentSlide === maxSlide}>
          <ArrowIcon />
        </ArrowBtn>
      </ButtonWrap>
      <SlideContainer>
        <ItemWrap
          style={{
            transform: `translateX(${currentSlide}px)`,
          }}
        >
          {children}
        </ItemWrap>
      </SlideContainer>
    </CarouselContainer>
  );
}
