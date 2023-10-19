import React, { useState } from "react";

const ToggleButton = ({
  content = { trueMsg: "Active", falseMsg: "Inactive" },
  theme = "",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const active_tw = "`flex items-center space-x-[6px] rounded py-2 px-[18px] ";
  const button_tw1 =
    "shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-black p-0.5";

  const button_tw2 =
    "shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-slate-100 p-0.5";

  return (
    <div>
      <label>
        <input
          id={theme}
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {theme === "black_white" && (
          <div className={button_tw1}>
            <span
              className={`${active_tw} ${
                !isChecked ? "text-black bg-white" : "text-white"
              }`}
            >
              {content.trueMsg}
            </span>
            <span
              className={`${active_tw} ${
                isChecked ? "text-black bg-white" : "text-white"
              }`}
            >
              {content.falseMsg}
            </span>
          </div>
        )}

        {theme === "red_green" && (
          <div className={button_tw2}>
            <span
              className={`${active_tw} ${
                !isChecked ? "text-black bg-green-400" : "text-black"
              }`}
            >
              {content.trueMsg}
            </span>
            <span
              className={`${active_tw} ${
                isChecked ? "text-black bg-red-400" : "text-black"
              }`}
            >
              {content.falseMsg}
            </span>
          </div>
        )}
      </label>
    </div>
  );
};

export default ToggleButton;
