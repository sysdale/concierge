import React from "react";
import classNames from "classnames";

const Badge = ({ theme, ...rest }) => {
  const a_twind = "text-amber-700	bg-[#FDFAF0FF]";
  const b_twind = "text-[#000000FF] bg-[#F7F7F7FF]";
  const c_twind = "text-[#117B34FF] bg-[#EEFDF3FF]";
  const d_twind = "text-[#DE3B40FF] bg-[#FDF2F2FF]";

  const badgeThemes = classNames("flex py-0 px-4 justify-center rounded-xl", {
    [a_twind]: theme === "a",
    [b_twind]: theme === "b",
    [c_twind]: theme === "c",
    [d_twind]: theme === "d",
  });

  return (
    <div className="flex">
      <p className={badgeThemes}>{rest.content}</p>
    </div>
  );
};

export default Badge;
