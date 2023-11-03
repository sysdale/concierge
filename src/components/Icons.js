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
  BsSearch,
  BsBell,
  BsYinYang,
} from "react-icons/bs";

const ICONS_LIST = {
  pencil: BsFillPencilFill,
  plus: BsPlusLg,
  bell: BsBell,
  gear: BsGear,
  chevron: BsChevronDown,
  pin: BsFillPinMapFill,
  bookmark: BsBookmark,
  building: BsBuilding,
  person: BsPerson,
  filter: BsFunnel,
  search: BsSearch,
  wallet: BsYinYang,
};

const Icons = ({ iconName }) => {
  const CurrentIcon = ICONS_LIST[iconName];

  return (
    <div className="flex flex-row justify-between pr-2 py-1">
      {<CurrentIcon />}
    </div>
  );
};

export default Icons;
