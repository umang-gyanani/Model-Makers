import React from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import Talents from "./pages/Talents";
import Blogs from "./pages/Blogs";
import BlogDeltailes from "./pages/BlogDeltailes";
import Button from "./components/common/button";
import { Link, Route, Routes } from "react-router-dom";
import { LogoIcon } from "./components/common/Icon";
import Referrel from "./pages/Referrel";
import Layout from "./Layout/Layout";
function App() {
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
