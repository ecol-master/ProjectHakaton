import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Home/components/Sidebar/Sidebar";

import Article from "../Articles/Article/Article";

import "./Analytics.scss";

const Analytics = () => {
  const navigate = useNavigate();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const [articles, setArticles] = useState(null);

  const setStateArticles = () => {
    const userInfoUrlAPI =
      "http://127.0.0.1:8000/api/v1/articles/list/popular/";

    fetch(userInfoUrlAPI, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.data);
        console.log(data);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("is_authorization") !== "true") {
      navigate("/sign-up");
    } else {
      //   let userId = localStorage.getItem("user_id");
      setStateArticles();
    }
  }, []);

  const renderUserArticles = () => {
    if (articles) {
      return articles.map((article) => {
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
        <div className="user__articles">{renderUserArticles()}</div>
      </main>
    </div>
  );
};
export default Analytics;
