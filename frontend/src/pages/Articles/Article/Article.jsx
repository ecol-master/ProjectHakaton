import React from "react";
import { useState } from "react";

import "./Article.scss";

const Article = (props) => {
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

        <button className="read__more"></button>
      </div>

      <div className="article__actions">
        <div className="votes">
          <i onClick={onClickDownVote} class="bx bx-down-arrow-alt"></i>
          <p>{voteCount}</p>

          <i onClick={onClickUpVote} class="bx bx-up-arrow-alt"></i>
        </div>

        <div className="likes">
          <i class="bx bxs-like"></i>
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  );
};
export default Article;
