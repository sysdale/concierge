import React from "react";

const Checkbox = ({ content }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        id={content}
        type="checkbox"
        value={content}
        className="accent-black"
      />
      <span>{content}</span>
    </div>
  );
};

export default Checkbox;
