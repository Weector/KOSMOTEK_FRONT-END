import React, { useEffect, useRef, useState } from "react";
import {
  HeroContainer,
  Point,
  PointWrap,
  Slide,
  SlideButton,
  SlideImg,
  SlideWrap,
} from "./Hero.styled";
import Container from "../Container/Container";
import dataSlide from "./dataSlide";

export default function Hero() {
  const timeRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? dataSlide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRight = () => {
    const lastSlide = currentIndex === dataSlide.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      handleRight();
    }, 5000);
  });

  return (
    <HeroContainer>
      <Container>
        <SlideWrap>
          <SlideButton $left onClick={handleLeft}></SlideButton>
          <Slide>
            {dataSlide.map((slide, index) => {
              return (
                <SlideImg
                  key={slide.id}
                  src={`${dataSlide[currentIndex].url}`}
                  alt={slide.title}
                />
              );
            })}
          </Slide>
          <SlideButton $right onClick={handleRight}></SlideButton>
        </SlideWrap>
        <PointWrap>
          {dataSlide.map((slide, index) => (
            <Point
              key={slide.id}
              style={
                currentIndex === index
                  ? { backgroundColor: "var(--clr-focus)" }
                  : { backgroundColor: "#d9d9d9" }
              }
              onClick={() => goToSlide(index)}
            ></Point>
          ))}
        </PointWrap>
      </Container>
    </HeroContainer>
  );
}
