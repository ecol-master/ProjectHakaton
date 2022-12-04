import React from "react";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Article from "../Articles/Article/Article";

import "./Home.scss";

const Home = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const getArticlesUrlAPI = "http://127.0.0.1:8000/api/v1/articles/list/";

    fetch(getArticlesUrlAPI, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.data);
      });
  }, []);

  const renderArticles = () => {
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
    <div className="home">
      {console.log(isOpenSideBar)}
      <Sidebar
        setIsOpenSideBar={setIsOpenSideBar}
        isOpenSideBar={isOpenSideBar}
      ></Sidebar>

      <main
        className={`home__section ${isOpenSideBar == true ? "is_open" : ""}`}
      >
        <div className="articles">{renderArticles()}</div>
      </main>
    </div>
  );
};
export default Home;
