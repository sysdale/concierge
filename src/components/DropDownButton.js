import classNames from "classnames";
import React from "react";
import Icons from "./Icons";

const DropDownButton = ({
  theme = "input",
  content,
  placeholder,
  width = 80,
  data = undefined,
  onClick = "",
}) => {
  //tailwind part
  const filter_tw = "bg-white text-black rounded-md border border-black p-3";
  const input_tw = "pl-3 pr-8.5 bg-neutral-200 rounded-md";
  const widthClass = "w-" + width;

  const dropDownButtonThemes = classNames(
    "flex  py-0 px-4 justify-between",
    {
      [filter_tw]: theme === "filter",
      [input_tw]: theme === "input",
    },
    [widthClass]
  );

  const whichIcon =
    theme === "filter" ? (
      <Icons iconName={"filter"} />
    ) : (
      <Icons iconName={"chevron"} />
    );

  return (
    <div>
      <p className="text-sm font-semibold">{content}</p>
      <button className={dropDownButtonThemes}>
        <div className="">{placeholder}</div>
        {whichIcon}
      </button>
    </div>
  );
};

export default DropDownButton;
