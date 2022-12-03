import React from "react";
import useInput from "../../../../../hooks/useInput";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const NoteHeaderTextarea = (props) => {
  const textArea = React.createRef();

  const value = useInput();
  const isMaxScreenSize = useMediaQuery({ query: "(min-width:1200px)" });
  const isMiddleScreenSize = useMediaQuery({
    query: "(max-width: 1200px) and (min-width:769px)",
  });
  const isMinScreenSize = useMediaQuery({ query: "(max-width: 768px)" });

  const [sizeTextArea, setSizeTextarea] = useState("maxSize");
  const [heightTextArea, setHeightTextArea] = useState(
    props.sizes[sizeTextArea]
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

  const getClassName = (text) => {
    return text == "" ? "empty" : "value";
  };

  const trackingClassnameFather = (e) => {
    const className = getClassName(e.target.value);
    if (className !== props.parentNodeClassName) {
      props.setParentNodeClassName(className);
    }
  };

  const onInputTextArea = (e) => {
    trackingClassnameFather(e);
    e.target.style.height = props.sizes[sizeTextArea];
    if (e.target.value !== "") {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const onClickTextArea = () => {
    setHeightTextArea(textArea.current.scrollHeight);
  };

  return (
    <>
      <textarea
        {...value}
        ref={textArea}
        type="text"
        style={{ height: heightTextArea }}
        placeholder={props.placeholder}
        onInput={onInputTextArea}
        onClick={onClickTextArea}
      />
      <div>
        <span>{props.placeholder}</span>
        <figure></figure>
      </div>
    </>
  );
};
export default NoteHeaderTextarea;
