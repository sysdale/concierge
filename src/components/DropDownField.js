import React, { useState } from "react";
import { Radio, Select, Space } from "antd";

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

const DropDownField = ({ defaultValue }) => {
  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Select
        size={size}
        defaultValue={defaultValue}
        onChange={handleChange}
        options={options}
      />
    </>
  );
};
export default DropDownField;
