import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Home/components/Sidebar/Sidebar";

import Article from "../Articles/Article/Article";

import ProfileImage from "./images/account.png";
import "./User.scss";

const User = () => {
  const navigate = useNavigate();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const [userArticles, setUserArticles] = useState(null);

  const setStateUserInfo = (user_id) => {
    const userInfoUrlAPI = `http://127.0.0.1:8000/api/v1/users/retrieve/fromId/${Number(
      user_id
    )}/`;

    fetch(userInfoUrlAPI, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setUserInfo(data.data);
        console.log(data.data);
      });
  };

  const setStateUserArticles = (user_id) => {
    const userInfoUrlAPI = `http://127.0.0.1:8000/api/v1/articles/list/${Number(
      user_id
    )}/`;

    fetch(userInfoUrlAPI, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserArticles(data.data);
        console.log(data);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("is_authorization") !== "true") {
      navigate("/sign-up");
    } else {
      let userId = localStorage.getItem("user_id");
      setStateUserInfo(userId);
      setStateUserArticles(userId);
    }
  }, []);

  const renderUserArticles = () => {
    if (userArticles) {
      return userArticles.map((article) => {
        let date = article.created.split("-");
        let dateString = `${date[2].slice(0, 2)} ${date[1]} ${date[0]}`;

        return (
          <Article
            article_id={article.id}
            title={article.title}
            author={article.author}
            creator={article.creator}
            created={dateString}
            text={article.text}
          />
        );
      });
    }
  };

  const renderUserInfo = () => {
    const roles = ["Пользователь", "Эксперт"];

    if (userInfo) {
      return (
        <ul>
          <li>
            <p>Username: </p>
            <span>{userInfo.username}</span>
          </li>
          <li>
            <p>Your Email: </p>
            <span>{userInfo.email}</span>
          </li>

          <li>
            <p>Роль: </p>
            <span>{userInfo.is_expert == true ? roles[1] : roles[0]}</span>
          </li>
        </ul>
      );
    }
  };

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
          <h2>Информация о вашем профиле</h2>
          <div className="profile">
            <div>
              <img src={ProfileImage} className="profile__image"></img>
            </div>
            {renderUserInfo()}
          </div>
        </div>

        <div className="user__articles">{renderUserArticles()}</div>
      </main>
    </div>
  );
};
export default User;
