import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateArticle from "./pages/Articles/CreateArticle/CreateArticle";

import SignIn from "./pages/Auth/SIgnIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Home from "./pages/Home/Home";


import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create_article" element={<CreateArticle />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
