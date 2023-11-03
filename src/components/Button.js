import React from "react";
import classNames from "classnames";
import Icons from "./Icons";

const Button = ({ theme, icons = false, content = false }) => {
  const a_tailwind = "bg-black text-white";
  const b_tailwind = "bg-slate-200 text-slate-600";
  const c_tailwind = "text-gray-500";
  const d_tailwind = "bg-white";
  //const d_tailwind = "border-solid border-b-4 border-black";

  const buttonThemes = classNames("flex justify-center py-2 px-2 rounded-md ", {
    [a_tailwind]: theme === "a_blackButton",
    [b_tailwind]: theme === "b_grayButton",
    [c_tailwind]: theme === "c_lightButton",
    [d_tailwind]: theme === "d_onlyIcon",
  });

  return (
    <button className={buttonThemes}>
      {icons && <Icons iconName={icons} />}
      {content}
    </button>
  );
};

export default Button;
