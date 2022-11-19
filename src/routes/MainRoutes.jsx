import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEvent from "../pages/front-end/create-event/CreateEvent";
import Home from "../pages/front-end/home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      {/* home */}
      <Route path="/" element={<Home />} />
      {/* create Event */}
      <Route path="/create-event" element={<CreateEvent />} />

    </Routes>
  );
};

export default MainRoutes;
