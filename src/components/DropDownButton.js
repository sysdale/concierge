import classNames from "classnames";
import React from "react";
import Icons from "./Icons";

const DropDownButton = ({
  theme,
  title = "Number of Rooms",
  defValue = "placeholder",
  width = 1,
  data = undefined,
}) => {
  //tailwind part
  const filter_tw = "bg-white text-black rounded-md border border-black p-3";
  const input_tw = "pl-3 pr-8.5 bg-neutral-200";

  const dropDownButtonThemes = classNames("flex py-0 px-4 justify-center ", {
    [filter_tw]: theme === "filter",
    [input_tw]: theme === "input",
  });

  const whichIcon =
    theme === "filter" ? (
      <Icons iconName={"filter"} />
    ) : (
      <Icons iconName={"chevron"} />
    );

  return (
    <div>
      <p className="font-bold text-sm">{title}</p>
      <button className={dropDownButtonThemes}>
        <div className={width}>{defValue}</div>
        {whichIcon}
      </button>
    </div>
  );
};

export default DropDownButton;
