import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../pages/front-end/blog/Blog";
import BlogPost from "../pages/front-end/blog/components/BlogPost";
import CreateEvent from "../pages/front-end/create-event/CreateEvent";
import Faq from "../pages/front-end/faq/Faq";
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
      <Route path="/blog-post" element={<BlogPost />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
};

export default MainRoutes;
