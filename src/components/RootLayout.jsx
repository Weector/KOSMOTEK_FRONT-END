import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import ButtonTop from "./ButtonTop/ButtonTop";
import Advantages from "./Advantages/Advantages";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
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
      <Header />
      <Navigation />
      <Outlet />
      {beckToTop && <ButtonTop />}
      <Advantages />
      <Footer />
    </>
  );
}
