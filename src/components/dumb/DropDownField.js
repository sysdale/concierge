import React, { useState } from "react";
import { ConfigProvider, Radio, Select, Space } from "antd";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

const DropDownField = ({ defaultValue, navbar, data }) => {
  const [size, setSize] = useState("middle");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextDescription: "red",
          colorTextDisabled: "red",
        },
      }}
    >
      <Select
        size={size}
        placeholder={defaultValue}
        onChange={handleChange}
        options={options}
        bordered={navbar ? true : true}
      />
    </ConfigProvider>
  );
};
export default DropDownField;
