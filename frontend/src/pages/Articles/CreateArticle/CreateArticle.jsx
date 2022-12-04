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

  const [error, setError] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("is_authorization") !== "true") {
      // alert("Вы не вошли в аккаунт");
      // navigate("/sign-in");
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
          console.log(data);
        });
    } else {
      setError({
        message: "Check if the fields are filled in correctly",
        status_code: 400,
      });
    }
  };

  return (
    <div className="create__note">
      <div className="note__container">
        <ArticleHeader title={title} author={author} />
        <ArticleContent content={content} />
        <div className="publish_button">
          <button onClick={onCLickPublish}>Publish</button>
          <div className="error__box">
            <p className="error__message"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateArticle;
