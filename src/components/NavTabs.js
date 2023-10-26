import React from "react";

const NavTabs = ({ tabsList }) => {
  const clickHandler = (item) => {
    console.log(item);
  };

  return (
    <div className="flex space-x-4">
      {tabsList.map((item, idx) => (
        <button onClick={() => clickHandler(item)} key={idx}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default NavTabs;
