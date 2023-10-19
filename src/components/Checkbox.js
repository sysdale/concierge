import classNames from "classnames";
import React from "react";

const Checkbox = ({ content, onClick = "" }) => {
  const checked_tw = "";
  const notChecked_tw = "";

  const checkBoxThemes = classNames("flex", {
    [checked_tw]: onClick === "checked",
    [notChecked_tw]: onClick === "not_checked",
  });
  return (
    <div className={checkBoxThemes}>
      <div className="flex items-center space-x-2">
        <input
          id={content}
          type="checkbox"
          value={content}
          className="accent-black"
        />
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Checkbox;
