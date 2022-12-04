import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = (props) => {
  const sidebar = useRef();
  const closeBtn = useRef();
  const [search, setSearch] = useState("");

  function closeBtnClick() {
    sidebar.current.classList.toggle("open");
    menuBtnChange();
  }
  function searchClick() {
    sidebar.current.classList.toggle("open");
    menuBtnChange();
  }
  function menuBtnChange() {
    if (props.isOpenSideBar) {
      props.setIsOpenSideBar(false);
    } else {
      props.setIsOpenSideBar(true);
    }
    if (sidebar.current.classList.contains("open")) {
      closeBtn.current.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.current.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  const renderUserProfile = () => {
    if (localStorage.getItem("is_authorization") == "true") {
      return (
        <li className="profile">
          <div className="profile-details">
            <div className="name_job">
              <div className="name">{localStorage.getItem("user_name")}</div>
              {/* <div class="job">Web designer</div> */}
            </div>
          </div>
          <i
            className="bx bx-log-out"
            id="log_out"
            ref={closeBtn}
            onClick={closeBtnClick}
          ></i>
        </li>
      );
    }

    return (
      <li className="profile">
        <Link to="/sign-in">
          <i class="bx bx-log-in"></i>
          <span class="links_name">Sign In</span>
        </Link>
        <span class="tooltip">Sign In</span>
      </li>
    );
  };

  return (
    <>
      <div className="sidebar" ref={sidebar}>
        <div className="logo-details">
          <a href="https://icons8.com/icon/111049/t"></a>
          <div className="logo_name">Telegramma</div>
          <i className="bx bx-menu" id="btn" onClick={closeBtnClick}></i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Articles</span>
            </a>
            <span className="tooltip">Articles</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li
            className={
              localStorage.getItem("is_authorization")
                ? ""
                : "hidden__list_item"
            }
          >
            <Link to="/create_article">
              <i class="bx bx-edit"></i>
              <span className="links_name">Create Article</span>
            </Link>
            <span className="tooltip">Create Article</span>
          </li>
          {/* <li>
            <a href="#">
              <i class="bx bx-chat"></i>
              <span class="links_name">Messages</span>
            </a>
            <span class="tooltip">Messages</span>
          </li> */}
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li>
          {/* <li>
            <a href="#">
              <i class="bx bx-folder"></i>
              <span class="links_name">File Manager</span>
            </a>
            <span class="tooltip">Files</span>
          </li> */}
          {/* <li>
            <a href="#">
              <i class="bx bx-cart-alt"></i>
              <span class="links_name">Order</span>
            </a>
            <span class="tooltip">Order</span>
          </li> */}
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          {/* <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="links_name">Setting</span>
            </a>
            <span class="tooltip">Setting</span>
          </li> */}
          {renderUserProfile()}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
