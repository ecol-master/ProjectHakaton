import React from "react";

import { useState } from "react";
import NoteHeaderTextarea from "./ArticleHeader.textarea";

import "./ArticleHeader.scss";

const NoteHeader = () => {
  const [titleClassName, setTitleClassName] = useState("empty");
  const titleSizes = { maxSize: "36px", middleSize: "34px", minSize: "30px" };

  const [authorClassName, setAuthorClassName] = useState("empty");
  const authorSizes = { maxSize: "19px", middleSize: "19px", minSize: "17px" };
  return (
    <div className="note__header">
      <div className={`note__title ${titleClassName}`}>
        <div className="note__wrapper">
          <NoteHeaderTextarea
            placeholder={"Title"}
            sizes={titleSizes}
            parentNodeClassName={titleClassName}
            setParentNodeClassName={setTitleClassName}
          />
        </div>
      </div>

      <div className={`note__author ${authorClassName}`}>
        <div className="note__wrapper">
          <NoteHeaderTextarea
            placeholder={"Author"}
            sizes={authorSizes}
            parentNodeClassName={authorClassName}
            setParentNodeClassName={setAuthorClassName}
          />
        </div>
      </div>
    </div>
  );
};
export default NoteHeader;
