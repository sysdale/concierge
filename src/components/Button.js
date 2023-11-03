import React from "react";
import classNames from "classnames";
import Icons from "./Icons";

const Button = ({ theme, icons = null, content = null }) => {
  const buttonThemes = classNames("flex justify-center py-2 px-2 rounded-md ", {
    "bg-black text-white": theme === "a_blackButton",
    "bg-slate-200 text-slate-600": theme === "b_grayButton",
    "text-gray-500": theme === "c_lightButton",
    "bg-white": theme === "d_onlyIcon",
  });

  return (
    <button className={buttonThemes}>
      {icons && <Icons iconName={icons} />}
      {content}
    </button>
  );
};

export default Button;
