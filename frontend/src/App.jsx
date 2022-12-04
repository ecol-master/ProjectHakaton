import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateArticle from "./pages/Articles/CreateArticle/CreateArticle";
import GradeArticle from "./pages/Articles/GradeArticle/GradeArticle";
import SignIn from "./pages/Auth/SIgnIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Analytics from "./pages/Analytics/Analytics";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grade_article" element={<GradeArticle />} />
      <Route path="/create_article" element={<CreateArticle />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/user" element={<User />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
