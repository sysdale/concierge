import React from "react";
import classNames from "classnames";

const Button = ({ theme, content }) => {
  const buttonThemes = classNames("flex justify-center py-0 px-4 rounded-md", {
    "bg-black text-white": theme === "alpha",
    "bg-slate-200 text-black": theme === "bravo",
    "bg-white text-slate-200": theme === "charlie",
  });

  return <button className={buttonThemes}>{content}</button>;
};

export default Button;
