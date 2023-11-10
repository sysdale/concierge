import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

const Cardd = () => (
  <div className="flex justify-between px-3 py-4 rounded-lg bg-white">
    <p className="text-[#D9D9D9] text-sm">Status</p>

    <p>
      <CheckCircleOutlined style={{ color: "#22BB33", fontSize: "24px" }} />
    </p>
  </div>
);
export default Cardd;
