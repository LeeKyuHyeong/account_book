/* eslint-disable */

import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import './styles/common/App.css';
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">
      <Nav />

      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;