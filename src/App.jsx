import React from "react";
import { Route, Routes } from "react-router-dom";
import "./input.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
