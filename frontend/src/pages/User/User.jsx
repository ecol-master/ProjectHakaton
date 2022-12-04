import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Home/components/Sidebar/Sidebar";

import "./User.scss";

const User = () => {
  const navigate = useNavigate();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("is_authorization") !== "true"){
      navigate("/sign-up")
    }
  })


  return (
    <div className="user">
      {console.log(isOpenSideBar)}
      <Sidebar
        setIsOpenSideBar={setIsOpenSideBar}
        isOpenSideBar={isOpenSideBar}
      ></Sidebar>

      <main
        className={`user__section ${isOpenSideBar == true ? "is_open" : ""}`}
      >
        <div className="user__info">
          <h2>user O-o</h2>
        </div>
      </main>
    </div>
  );
};
export default User;
