import React from "react";
import Icons from "./Icons";

const InputField = ({
  title,
  width = 9,
  height = 3,
  hasIcon = false,
  canResize = false,
}) => {
  const widthClass = `w-${width}`;
  const heightClass = `h-${height}`;
  const resize = canResize ? "resize" : "resize-none";
  const inputField_tw = `bg-slate-200 border border-slate-200 ${widthClass} ${heightClass} py-0 px-3 rounded-md ${resize}`;

  return (
    <div className="flex flex-col">
      <div>
        <label id={title} className="font-semibold">
          {title}
        </label>
      </div>
      <div className="">
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
