import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import Navigate from "./Navigate";

const App = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
          <li>
            <Link to="/navigate">네비게이션</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profiles/*" element={<Profiles />}></Route>
        <Route path="/navigate" element={<Navigate />}></Route>
      </Routes>
    </div>
  );
};

export default App;
