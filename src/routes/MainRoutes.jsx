import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/front-end/home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      {/* home */}
      <Route path="/" element={<Home />} />

    </Routes>
  );
};

export default MainRoutes;
