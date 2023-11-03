import React, { useState } from "react";

const Checkbox = ({ onCheckBoxChange, content }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onCheckBoxChange(checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        id={content}
        type="checkbox"
        value={content}
        className="accent-black"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span>{content}</span>
    </div>
  );
};

export default Checkbox;
