import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header-2/Header";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Home } from "./pages/Home/Home";
import { HowItworks } from "./pages/HowItWorks/HowItworks";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.screenTop(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/howItWorks" element={<HowItworks />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
