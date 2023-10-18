import classNames from "classnames";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsChevronDown } from "react-icons/bs";

const DropDownButton = ({
  theme,
  title = "Number of Rooms",
  defValue = 1,
  data = undefined,
}) => {
  const dropDownButtonThemes = classNames("flex py-0 px-4 justify-center", {
    "bg-black text-white": theme === "filter",
    "pl-3 pr-8.5 bg-neutral-200 ": theme === "input",
  });

  return (
    <div>
      <p className="font-bold text-sm">{title}</p>
      <button className={dropDownButtonThemes}>Something</button>;
    </div>
  );
};

export default DropDownButton;
