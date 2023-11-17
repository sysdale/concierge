import classNames from "classnames";
import React, { useState } from "react";

const ToggleButton = ({
  content = { trueMsg: "Active", falseMsg: "Inactive" },
  theme = "black_white",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const themeClasses = {
    black_white: {
      trueClass: "text-white",
      falseClass: "text-black bg-white",
      bgClass: "bg-black",
    },
    red_green: {
      trueClass: "text-black bg-green-400",
      falseClass: "text-black bg-red-400",
      bgClass: "bg-red-400",
    },
  };

  const toggleBg = classNames(
    "flex items-center space-x-[6px] rounded py-2 px-[18px]"
  );

  const themeData = themeClasses[theme];

  const trueSpan = !isChecked ? themeData.falseClass : themeData.trueClass;
  const falseSpan = isChecked ? themeData.falseClass : themeData.trueClass;

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
        <div
          className={`shadow-card inline-flex cursor-pointer select-none items-center justify-center rounded-md p-0.5 ${themeClasses[theme].bgClass}`}
        >
          {/* true message */}
          <span className={`${toggleBg} ${trueSpan}`}>{content.trueMsg}</span>

          {/* false message */}
          <span className={`${toggleBg} ${falseSpan}`}>{content.falseMsg}</span>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
