import React from "react";
import classNames from "classnames";

const Badge = ({ theme, ...rest }) => {
  const badgeThemes = classNames("flex py-0 px-4 justify-center rounded-xl", {
    "text-amber-700	bg-amber1": theme === "a",
    "text-amberText bg-amber2": theme === "b",
    "text-greenText bg-green1": theme === "c",
    "text-redText bg-red1": theme === "d",
  });

  return (
    <div className="flex">
      <p className={badgeThemes}>{rest.content}</p>
    </div>
  );
};

export default Badge;
