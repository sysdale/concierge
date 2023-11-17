import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

const Cardd = ({ title = null, checkBox = null, ...props }) => {
  return (
    <div className="py-2 rounded-lg bg-white">
      <div className="text-sm px-3 pt-0.75 pb-4">{title}</div>
      <div style={{ color: "#22BB33", fontSize: "24px" }}>
        {checkBox && <CheckCircleOutlined />}
      </div>
      {props.children}
    </div>
  );
};
export default Cardd;
