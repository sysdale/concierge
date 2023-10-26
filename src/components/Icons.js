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
  BsWalletFill,
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
  search: BsSearch,
  wallet: BsWalletFill,
};

const Icons = ({ iconName, content = null }) => {
  const CurrentIcon = ICONS_LIST[iconName];

  return (
    <div className="flex flex-row justify-between pr-2 py-1">
      {CurrentIcon && <CurrentIcon />}
      {content}
    </div>
  );
};

export default Icons;
