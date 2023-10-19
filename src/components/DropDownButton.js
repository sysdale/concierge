import classNames from "classnames";
import React, { useState } from "react";
import Icons from "./Icons";
import DropDownItem from "./DropDownItem";

const DropDownButton = ({
  theme = "input",
  content,
  placeholder,
  width = 80,
  data,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  const itemSelector = (item) => {
    setSelectedItem(item);
    console.log(item);
  };

  //tailwind part
  const filter_tw = "bg-white text-black rounded-md border border-black p-3";
  const input_tw = "pl-3 pr-8.5 bg-neutral-200 rounded-md";
  const widthClass = `w-${width}`;

  const dropDownButtonThemes = classNames(
    "flex justify-between py-1 px-4 space-x-2",
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
      <button onClick={dropDownHandler} className={dropDownButtonThemes}>
        <div>{selectedItem || placeholder}</div>

        <div>{whichIcon}</div>
      </button>

      {/* dropdown list items logic */}
      {showDropDown && (
        <div className="w-32 bg-white border border-slate-200">
          <ul className="mb-0 pl-0">
            <DropDownItem data={data} itemSelector={itemSelector} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
