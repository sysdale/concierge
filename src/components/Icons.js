import React from "react";
import { BsFillPencilFill, BsPlusLg } from "react-icons/bs";

const ICONS_LIST = {
  pencil: BsFillPencilFill,
  plus: BsPlusLg,
  bell: null,
  gear: null,
  chevron: null,
  pin: null,
  bookmark: null,
  building: null,
  person: null,
};

const Icons = ({ iconName }) => {
  const IconComponent = ICONS_LIST[iconName];

  return <div>{IconComponent && <IconComponent />}</div>;
};

export default Icons;
