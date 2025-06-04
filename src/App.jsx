import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Talents from "./pages/Talents";
import Blogs from "./pages/Blogs";
import BlogDeltailes from "./pages/BlogDeltailes";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Referrel from "./pages/Referrel";
import Layout from "./Layout/Layout";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);
  return (
    <div>
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
    </div>
  );
}

export default App;
