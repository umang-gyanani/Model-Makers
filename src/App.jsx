import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Talents from "./pages/Talents";
import Blogs from "./pages/Blogs";
import BlogDeltailes from "./pages/BlogDeltailes";
import {  Route, Routes, useLocation } from "react-router-dom";
import Referrel from "./pages/Referrel";
const Layout = lazy(() => import("./Layout/Layout"));
import AOS from "aos";
import "aos/dist/aos.css";
import { RotateLoader } from "react-spinners";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [pathname]);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 cursor-pointer right-8 p-4 bg-gradient-to-tr from-[#00AFEF] to-[#18314F] text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out animate-bounce z-50"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <Suspense
        fallback={
          <div className=" fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 ">
            <RotateLoader color="#00AFEF" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogdeltailes" element={<BlogDeltailes />} />
            <Route path="/referrel" element={<Referrel />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
