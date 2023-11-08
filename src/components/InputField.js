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
  const fieldToken = {};

  return (
    <div className="flex flex-col">
      <div className="text-sm font-normal pb-2.5">{props.children}</div>
      {console.log(icon)}
      <ConfigProvider
        theme={{
          token: fieldToken,
        }}
      >
        <Input
          placeholder={placeholder}
          prefix={<UserOutlined />}
          type={type}
        />
      </ConfigProvider>
    </div>
  );
};

export default InputField;
