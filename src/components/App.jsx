// import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import Navigation from "./Navigation/Navigation";
import LoginPage from "../pages/AuthPage/LoginPage/LoginPage";
import RegistrationPage from "../pages/AuthPage/RegistrationPage/RegistrationPage";
import RecoveringPage from "../pages/AuthPage/RecoveringPage/RecoveringPage";
import HomePage from "../pages/HomePage/HomePage";
import { Suspense, useEffect, useState } from "react";
import ProductGroupPage from "../pages/ProductGroupPage/ProductGroupPage";
import ProductPage from "../pages/ProductGroupPage/ProductPage/ProductPage";
import ButtonTop from "./ButtonTop/ButtonTop";

// const Layout = lazy(() => import('./Layout'));

export const App = () => {
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
    <Suspense fallback={"Loading..."}>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="recovering" element={<RecoveringPage />} />
          <Route path="categorys" element={<ProductGroupPage />} />
          <Route path="categorys/:group" element={<ProductGroupPage />} />
          <Route path="categorys/:group/:id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<HomePage to="/" />} />
      </Routes>
      {beckToTop && <ButtonTop />}
      <Footer />
    </Suspense>
  );
};
