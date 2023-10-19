import classNames from "classnames";
import React, { useState } from "react";
import Icons from "./Icons";

const DropDownButton = ({
  theme = "input",
  content,
  placeholder,
  width = 80,
  data,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  //tailwind part
  const filter_tw = "bg-white text-black rounded-md border border-black p-3";
  const input_tw = "pl-3 pr-8.5 bg-neutral-200 rounded-md";
  const widthClass = `w-${width}`;

  const dropDownButtonThemes = classNames(
    "flex justify-between py-0 px-4 space-x-2",
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

  const listItems = data.map((item, index) => (
    <li key={index} className="p-2">
      {item}
      <hr className="my-2 bg-gray-200" />
    </li>
  ));

  return (
    <div>
      <p className="text-sm font-semibold">{content}</p>
      <button onClick={dropDownHandler} className={dropDownButtonThemes}>
        <div>{placeholder}</div>
        <div>{whichIcon}</div>
      </button>

      {/* dropdown list items logic */}
      {showDropDown && (
        <div className="bg-white border border-slate-200 py-1">
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
