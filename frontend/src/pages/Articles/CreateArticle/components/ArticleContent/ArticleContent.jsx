import React from "react";

import useInput from "../../../../../hooks/useInput";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import "./ArticleContent.scss";

const ArticleContent = (props) => {
  const textArea = React.createRef();

  const value = props.content;

  const titleSizes = { maxSize: "36px", middleSize: "34px", minSize: "30px" };

  const isMaxScreenSize = useMediaQuery({ query: "(min-width:1200px)" });
  const isMiddleScreenSize = useMediaQuery({
    query: "(max-width: 1200px) and (min-width:769px)",
  });
  const isMinScreenSize = useMediaQuery({ query: "(max-width: 768px)" });

  const [sizeTextArea, setSizeTextarea] = useState("maxSize");
  const [heightTextArea, setHeightTextArea] = useState(
    titleSizes[sizeTextArea]
  );

  useEffect(() => {
    let size = "";
    if (isMaxScreenSize) {
      size = "maxSize";
    } else if (isMiddleScreenSize) {
      size = "middleSize";
    } else {
      size = "minSize";
    }
    textArea.current.click();
    setSizeTextarea(size);
  }, [isMaxScreenSize, isMiddleScreenSize, isMinScreenSize]);

  const onInputTextArea = (e) => {
    e.target.style.height = titleSizes[sizeTextArea];
    if (e.target.value !== "") {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const onClickTextArea = () => {
    setHeightTextArea(textArea.current.scrollHeight);
  };

  return (
    <div className="note__content">
      <div className="note__content_text">
        <div className="note__wrapper">
          <textarea
            {...value}
            ref={textArea}
            type="text"
            style={{ height: heightTextArea }}
            placeholder="Here Your Text"
            onInput={onInputTextArea}
            onClick={onClickTextArea}
          />
        </div>
      </div>
    </div>
  );
};
export default ArticleContent;
