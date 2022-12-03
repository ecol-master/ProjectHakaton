import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/Auth/SIgnIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
