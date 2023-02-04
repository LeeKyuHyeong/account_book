/* eslint-disable */

import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Counter from './pages/Counter';
import './styles/common/App.css';
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";
import Logo from "./components/Logo";


function App() {
  const [isOpen, setOpen] = useState("false");

  const acitveToggle = () => {
    setOpen(!isOpen);
  }

  return (
    <div className="App">
      <nav className={isOpen ? "active" : ""}>
        <Logo />
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/counter">Counter</Link>
        </div>
        <div className="toggle" onClick={acitveToggle}></div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
      {/* <Home />
      <Counter />
      <Input /> */}
    </div>
  );
}

export default App;