import React from "react";
import Icons from "./Icons";

const InputField = ({
  title,
  width = 6,
  height = 6,
  hasIcon = false,
  canResize = false,
}) => {
  const widthClass = `w-${width}`;
  const heightClass = `h-${height}`;
  const resize = canResize ? "resize" : "resize-none";
  const inputField_tw = `bg-slate-200 border border-slate-200 ${widthClass} ${heightClass} ${resize} py-0 px-3 rounded-md `;

  return (
    <div className="flex flex-col">
      <div>
        <label id={title} className="font-semibold">
          {title}
        </label>
      </div>
      <div className="flex">
        <textarea
          className={inputField_tw}
          type="text"
          id={title}
          name={title}
        />
        <div>{hasIcon && <Icons iconName={"search"} />}</div>
      </div>
    </div>
  );
};

export default InputField;
