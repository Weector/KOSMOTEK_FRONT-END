import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Brands from "../../components/Brands/Brands";
import Promotions from "../../components/Promotions/Promotions";
import ButtonTop from "../../components/ButtonTop/ButtonTop";

export default function HomePage() {
  const [beckToTop, setBekToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBekToTop(true);
      } else {
        setBekToTop(false);
      }
    });
  });

  return (
    <>
      <Hero />
      <Brands />
      <Promotions />

      {beckToTop && <ButtonTop />}
    </>
  );
}
