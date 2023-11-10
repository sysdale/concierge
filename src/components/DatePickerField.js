import React from "react";
import { ConfigProvider, DatePicker, Space } from "antd";

const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};

const DatePickerField = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "black",
        colorPrimaryBg: "#F3F3F3",
        addonBg: "red",
      },
    }}
  >
    <Space direction="vertical" size={12}>
      <DatePicker
        showTime
        format="DD-MM-YYYY HH:mm"
        onChange={onChange}
        onOk={onOk}
      />
    </Space>
  </ConfigProvider>
);
export default DatePickerField;
