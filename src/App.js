import "./App.css";
import React from "react";
import Todos from "./components/Todos";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Posts from "./components/Posts";
import Buttons from "./components/Buttons";
function App() {
  return (
    <>
      <Buttons />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
