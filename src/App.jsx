import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

let App = ()=> {
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App