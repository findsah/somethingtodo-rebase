import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../pages/front-end/blog/Blog";
import CreateEvent from "../pages/front-end/create-event/CreateEvent";
import Home from "../pages/front-end/home/Home";
import VanueDetail from "../pages/front-end/vanue-detail/VanueDetail";

const MainRoutes = () => {
  return (
    <Routes>
      {/* home */}
      <Route path="/" element={<Home />} />
      {/* create Event */}
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/vanue-detail" element={<VanueDetail />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default MainRoutes;
