import React from "react";
import classNames from "classnames";

const Badge = ({ theme, content }) => {
  const badgeThemes = classNames("flex py-0 px-4 justify-center", {
    "text-amber-700	bg-[#FDFAF0FF]": theme === "a",
    "text-[#000000FF] bg-[#F7F7F7FF]": theme === "b",
    "text-[#117B34FF] bg-[#EEFDF3FF]": theme === "c",
    "text-[#DE3B40FF] bg-[#FDF2F2FF]": theme === "d",
  });

  return (
    <div className="flex">
      <p className={badgeThemes}>{content}</p>
    </div>
  );
};

export default Badge;
