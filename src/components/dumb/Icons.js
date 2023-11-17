import React from "react";
import { UserOutlined, AndroidOutlined } from "@ant-design/icons";

const ICONS_LIST = {
  logo: <AndroidOutlined />,
  user: <UserOutlined />,
};

const Icons = ({ iconName }) => {
  const CurrentIcon = ICONS_LIST[iconName];

  return iconName && CurrentIcon;
};

export default Icons;
