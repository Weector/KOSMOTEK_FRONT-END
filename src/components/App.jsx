// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

import Brands from "./Brands/Brands";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";
import Promotions from "./Promotions/Promotions";

// const Layout = lazy(() => import('./Layout'));

export const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <Brands />
      <Promotions />
      <Footer />
    </>
  );
};
