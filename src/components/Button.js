import React from "react";
import classNames from "classnames";
import Icons from "./Icons";

const Button = ({ theme, content, icons = false, ...rest }) => {
  const buttonThemes = classNames("flex justify-center py-2 px-4 rounded-md ", {
    "bg-black text-white": theme === "a_blackButton",
    "bg-white text-slate-400": theme === "b_grayButton",
    "": theme === "c_lightButton",
    "": theme === "d_navBarButtons",
  });

  return (
    <button className={buttonThemes}>
      {icons && <Icons iconName={"chevron"} />}
      {content}
    </button>
  );
};

export default Button;
