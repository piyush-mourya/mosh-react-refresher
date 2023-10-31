import React, { useState } from "react";

interface Props {
  content: String;
  //onClickEvent: () => void;
}

function Button({ content }: Props) {
  // Hook
  const [changeColor, setChangeColor] = useState(false);
  const handleClick = () => {
    setChangeColor(!changeColor);
  };
  return (
    <button
      type="button"
      className={changeColor === true ? "btn btn-warning" : "btn btn-success"}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}

export default Button;
