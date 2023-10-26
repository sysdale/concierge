import classNames from "classnames";
import React, { useState } from "react";
import Icons from "./Icons";
import DropDownItem from "./DropDownItem";

const DropDownButton = ({
  theme = "input",
  placeholder = "",
  width = 10,
  data = false,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  const itemSelector = (item) => {
    setSelectedItem(item);
    setShowDropDown(!showDropDown);
    console.log(item);
  };

  //tailwind part
  const filter_tw = "bg-white text-black rounded-md border border-black";
  const input_tw = "bg-[#F3F4F6FF] border border-black rounded-md";
  const profile_tw = "bg-white";
  const widthClass = `w-${width}`;

  const dropDownButtonThemes = classNames("pl-3 py-1", {
    [filter_tw]: theme === "filter",
    [input_tw]: theme === "input",
    [profile_tw]: theme === "profile",
  });

  const whichIcon =
    theme === "filter" ? (
      <Icons iconName={"filter"} />
    ) : (
      <Icons iconName={"chevron"} />
    );

  return (
    <div className="flex">
      <div className="flex-col">
        {theme !== "profile" && (
          <p className="text-sm font-semibold">{placeholder}</p>
        )}
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
