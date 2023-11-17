import React from "react";
import { Select, Space } from "antd";
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const TagField = ({ placeholder }) => (
  <Space
    style={{
      width: "100%",
    }}
    direction="vertical"
  >
    <Select
      mode="multiple"
      allowClear
      style={{
        width: "100%",
      }}
      placeholder={placeholder}
      defaultValue={undefined}
      onChange={handleChange}
      options={options}
    />
  </Space>
);
export default TagField;
