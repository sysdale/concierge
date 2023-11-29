import React from "react";
import classNames from "classnames";
import { CheckCircleOutlined } from "@ant-design/icons";

const Cardd = ({ title = null, type = null, checkBox = null, ...props }) => {
  var cardTypes = classNames("text-sm pl-3 pt-0.75", {
    "text-[#D9D9D9]": type === "inactive",
  });

  return (
    <div className="py-2 rounded-lg bg-white">
      <div className={cardTypes}>{title}</div>
      <div style={{ color: "#22BB33", fontSize: "24px" }}>
        {checkBox && <CheckCircleOutlined />}
      </div>
      {props.children}
    </div>
  );
};
export default Cardd;
