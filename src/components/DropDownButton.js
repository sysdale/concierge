import classNames from "classnames";
import React, { useState } from "react";
import Icons from "./Icons";
import DropDownItem from "./DropDownItem";

const DropDownButton = ({
  theme = "input",
  width = null,
  placeholder = null,
  onDropDownChange,
  data = null,
}) => {
  const [showDropDown, setShowDropDown] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  const itemSelector = (item) => {
    setSelectedItem(item);
    setShowDropDown(!showDropDown);
    onDropDownChange(item);
  };

  //tailwind part
  const widthClass = `w-${width}`;

  const dropDownButtonThemes = classNames("pl-3 py-1 ", {
    "bg-white text-black rounded-md border border-black ": theme === "filter",
    "bg-[#F3F4F6FF] border border-black rounded-md": theme === "input",
    "": theme === "profile",
  });

  const whichIcon =
    theme === "filter" ? (
      <Icons iconName={"filter"} />
    ) : (
      <Icons iconName={"chevron"} />
    );

  const placeHolderText = theme !== "profile" && (
    <p className="text-sm font-semibold">{placeholder}</p>
  );

  return (
    <div className="flex">
      <div className="flex-col">
        {placeHolderText}
        <button
          onClick={dropDownHandler}
          className={`${dropDownButtonThemes} ${widthClass}`}
        >
          <div className="flex items-center">
            <div className="pl-1 pr-5 text-sm">
              {selectedItem || placeholder}
            </div>
            <div>{whichIcon}</div>
          </div>
        </button>

        {/* dropdown list items logic */}
        {showDropDown && (
          <div className="bg-white border border-slate-400">
            <ul className="mb-0 pl-0">
              <DropDownItem data={data} itemSelector={itemSelector} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownButton;
