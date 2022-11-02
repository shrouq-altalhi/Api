import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Api from "./Api";
import Home from "./Home";
import HomePage from "./HomePage";
import React from "react";

function Outlet() {
  return (
    <div>
      <HomePage />
      <Routes>
        <Route path="/Api" element={<Api />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default Outlet;
