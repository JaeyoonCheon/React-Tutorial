import React, { useState, useCallback } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage></NewsPage>}></Route>
      <Route path="/:category" element={<NewsPage></NewsPage>}></Route>
    </Routes>
  );
};

export default App;
