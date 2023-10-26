import React from "react";

const DropDownItem = ({ data, itemSelector }) => {
  const handleItemClick = (item) => {
    itemSelector(item);
  };

  return (
    <div className="flex-row text-center">
      {data.map((item, index) => (
        <li key={index} className="hover:bg-sky-100 hover:text-black">
          <button onClick={() => handleItemClick(item)}>{item}</button>{" "}
        </li>
      ))}
    </div>
  );
};

export default DropDownItem;
