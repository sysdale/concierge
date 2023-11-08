import React from "react";
import { Input, ConfigProvider } from "antd";
import { UserOutlined } from "@ant-design/icons";

const InputField = ({
  placeholder,
  icon = null,
  iconDirection = null,
  type = null,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-normal pb-2.5">{props.children}</div>
      {console.log(icon)}
      <Input
        placeholder={placeholder}
        prefix={icon && <UserOutlined />}
        type={type}
      />
    </div>
  );
};

export default InputField;
