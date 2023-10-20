import React from "react";
import classNames from "classnames";
import Icons from "./Icons";

const Button = ({ theme, icons = false, ...rest }) => {
  const a_tailwind = "bg-black text-white";
  const b_tailwind = "bg-slate-200 text-slate-600";
  const c_tailwind = "text-gray-500";
  const d_tailwind = "border-solid border-b-4 border-black";

  const buttonThemes = classNames("flex justify-center py-2 px-4 rounded-md ", {
    [a_tailwind]: theme === "a_blackButton",
    [b_tailwind]: theme === "b_grayButton",
    [c_tailwind]: theme === "c_lightButton",
    [d_tailwind]: theme === "d_navBarButtons",
  });

  return (
    <button className={buttonThemes}>
      {icons && <Icons iconName={icons} />}
      {rest.content}
    </button>
  );
};

export default Button;
