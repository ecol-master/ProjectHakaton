import React from "react";
import useInput from "../../../hooks/useInput";

import NoteHeader from "./components/ArticleHeader/ArticleHeader";
import NoteContent from "./components/ArticleContent/ArticleContent";

import "./CreateArticle.scss";

const CreateArticle = () => {
  return (
    <div className="create__note">
      <div className="note__container">
        <NoteHeader />
        <NoteContent />
        <div className="publish_button">
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
};
export default CreateArticle;
