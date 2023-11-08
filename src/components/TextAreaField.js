import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const TextAreaField = ({ placeholder, rows = null }) => {
  return <TextArea placeholder={placeholder} rows={rows} />;
};

export default TextAreaField;
