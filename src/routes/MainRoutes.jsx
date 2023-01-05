import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/adminDashboard/dashboard/Dashboard";
import Blog from "../pages/front-end/blog/Blog";
import BlogPost from "../pages/front-end/blog/components/BlogPost";
import CreateEvent from "../pages/front-end/create-event/CreateEvent";
import Faq from "../pages/front-end/faq/Faq";
import Home from "../pages/front-end/home/Home";
import Login from "../pages/front-end/user-registeration/Login";
import SignUp from "../pages/front-end/user-registeration/SignUp";
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

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route path='/started' element={<Dashboard />}> */}
      <Route index element={<Dashboard />} />
      <Route path='/edit-venue' element={<Dashboard />} />
      <Route path='/claim-venue' element={<Dashboard />} />
      <Route path='/promotions' element={<Dashboard />} />
      <Route path='/on-going-promotions' element={<Dashboard />} />
      <Route path='/promotion-details' element={<Dashboard />} />
      <Route path='/event-create' element={<Dashboard />} />
      <Route path='/account' element={<Dashboard />} />
      <Route path='/my-event' element={<Dashboard />} />
      {/* </Route> */}
    </Routes>
  );
};

export default MainRoutes;
