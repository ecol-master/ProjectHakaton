import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./Article.scss";

const Article = (props) => {
  const navigate = useNavigate();

  const [voteCount, setVoteCount] = useState(0);

  const onClickUpVote = () => {
    if (voteCount < 10) {
      setVoteCount(voteCount + 1);
    }
  };

  const onClickDownVote = (e) => {
    if (voteCount > -10) {
      setVoteCount(voteCount - 1);
    }
  };

  const onClickLinkGrade = () => {
    localStorage.setItem("article_id", props.article_id);
  };

  const renderGradeButton = () => {
    return (
      <Link onClick={onClickLinkGrade} to="/grade_article">
        Оценить
      </Link>
    );
  };

  const getClassNameVoteCount = () => {
    if ((voteCount > 0) & (voteCount < 6)) {
      return "good_vote";
    } else if (voteCount > 5) {
      return "high__vote";
    } else if ((voteCount < 0) & (voteCount > -6)) {
      return "low__vote";
    } else {
      return "bad__vote";
    }
  };

  return (
    <div className="article">
      <div className="article__header">
        <h2 className="header__title">{props.title}</h2>
        <h3 className="header__author">{props.author}</h3>
        <h3 className="header__creator">{props.creator}</h3>
        <h4 className="header__created">{props.created}</h4>
      </div>

      <div className="article__content">
        <div className="article__text">
          <p>{props.text}</p>
        </div>
      </div>

      <div className="article__actions">
        {renderGradeButton()}

        <div className="votes">
          <i onClick={onClickDownVote} className="bx bx-down-arrow-alt"></i>
          <p>{voteCount}</p>

          <i onClick={onClickUpVote} className="bx bx-up-arrow-alt"></i>
        </div>

        <div className="likes">
          <i className="bx bxs-like"></i>
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  );
};
export default Article;
