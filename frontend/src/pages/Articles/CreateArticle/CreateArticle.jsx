import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";

import ArticleHeader from "./components/ArticleHeader/ArticleHeader";
import ArticleContent from "./components/ArticleContent/ArticleContent";

import "./CreateArticle.scss";

const CreateArticle = () => {
  const title = useInput();
  const author = useInput();
  const content = useInput();

  const [error, setError] = useState({ message: null, status_code: 0 });

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("is_authorization") !== "true") {
      // alert("Вы не вошли в аккаунт");
      navigate("/sign-in");
    }
  }, []);

  const onCLickPublish = () => {
    const isValuesNotEmpty = () => {
      let isEmpty = false;

      [title.value, author.value, content.value].map((value) => {
        if (value.trim() == "") {
          isEmpty = true;
        }
      });
      return isEmpty;
    };

    if (!isValuesNotEmpty()) {
      const publishArticleUrlAPI =
        "http://127.0.0.1:8000/api/v1/articles/createArticle/";
      const data = {
        creator: localStorage.getItem("user_id"),
        author: author.value,
        title: title.value,
        text: content.value,
      };
      console.log(data);

      fetch(publishArticleUrlAPI, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error === false){
            navigate("/")
          }
        });
    } else {
      setError({
        message: "Check if the fields are filled in correctly",
        status_code: 400,
      });
    }
  };

  const renderMessageBox = () => {
    let classNameBox = "";
    switch (error.status_code) {
      case 200:
        classNameBox = "success";
        break;
      case 400:
        classNameBox = "failed";
        break;
      case 0:
        classNameBox = "hidden";
        break;
    }

    return (
      <div className={`error__box ${classNameBox}`}>
        <h3 className="error__box_message">
          {error.status_code == 0 ? "" : error.message}
        </h3>
      </div>
    );
  };

  return (
    <div className="create__note">
      <div className="note__container">
        <ArticleHeader title={title} author={author} />
        <ArticleContent content={content} />
        <div className="publish_button">
          <button onClick={onCLickPublish}>Publish</button>
          {renderMessageBox()}
        </div>
      </div>
    </div>
  );
};
export default CreateArticle;
