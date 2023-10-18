import React from "react";

import {
  BsBookmark,
  BsBuilding,
  BsChevronDown,
  BsFillBellFill,
  BsFillPencilFill,
  BsFillPinMapFill,
  BsGear,
  BsPerson,
  BsPlusLg,
  BsFunnel,
} from "react-icons/bs";

const ICONS_LIST = {
  pencil: BsFillPencilFill,
  plus: BsPlusLg,
  bell: BsFillBellFill,
  gear: BsGear,
  chevron: BsChevronDown,
  pin: BsFillPinMapFill,
  bookmark: BsBookmark,
  building: BsBuilding,
  person: BsPerson,
  filter: BsFunnel,
};

const Icons = ({ iconName }) => {
  const CurrentIcon = ICONS_LIST[iconName];

  return <div className="pr-2 py-1">{CurrentIcon && <CurrentIcon />}</div>;
};

export default Icons;
