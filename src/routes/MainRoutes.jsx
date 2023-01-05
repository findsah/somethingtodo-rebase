import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EditVenue from "../pages/adminDashboard/dashboard/editVenue/EditVenue";
import SideBarLayout from "../pages/adminDashboard/layouts/SideBarLayout";
import Blog from "../pages/front-end/blog/Blog";
import BlogPost from "../pages/front-end/blog/components/BlogPost";
import CreateEvent from "../pages/front-end/create-event/CreateEvent";
import Faq from "../pages/front-end/faq/Faq";
import Home from "../pages/front-end/home/Home";
import Login from "../pages/front-end/user-registeration/Login";
import SignUp from "../pages/front-end/user-registeration/SignUp";
import VanueDetail from "../pages/front-end/vanue-detail/VanueDetail";
import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";

const MainRoutes = () => {

  return (
    <Routes>
      {/* main App routing */}
      <Route path="/" element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/vanue-detail" element={<VanueDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
      {/* layout for Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* sub routing */}
        <Route path="edit-venue" element={<EditVenue />} />
        {/* 
      <Route path='/claim-venue' element={<Comonponet Name />} />
      <Route path='/promotions' element={<Comonponet Name />} />
      <Route path='/on-going-promotions' element={<Comonponet Name />} />
      <Route path='/promotion-details' element={<Comonponet Name />} />
      <Route path='/event-create' element={<Comonponet Name />} />
      <Route path='/account' element={<Comonponet Name />} />
      <Route path='/my-event' element={<Comonponet Name />} />  */}
      </Route>
      {/* public routing */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default MainRoutes;
