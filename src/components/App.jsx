// import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import Navigation from "./Navigation/Navigation";
import LoginPage from "../pages/AuthPage/LoginPage/LoginPage";
import RegistrationPage from "../pages/AuthPage/RegistrationPage/RegistrationPage";
import RecoveringPage from "../pages/AuthPage/RecoveringPage/RecoveringPage";
import HomePage from "../pages/HomePage/HomePage";
import { Suspense } from "react";
import ProductGroupPage from "../pages/ProductGroupPage/ProductGroupPage";

// const Layout = lazy(() => import('./Layout'));

export const App = () => {
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

          <Route path="categorys/:group" element={<ProductGroupPage />} />
        </Route>
        <Route path="*" element={<HomePage to="/" />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};
