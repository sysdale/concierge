import React from "react";
import { InputNumber } from "antd";

const NumberField = ({ defaultValue = 0, min = 0, max = null }) => {
  return <InputNumber min={min} defaultValue={defaultValue} max={max} />;
};

export default NumberField;
