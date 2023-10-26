import React from "react";

const NavTabs = ({ tabsList }) => {
  return (
    <div>
      <ul className="flex">
        {tabsList.map((item, idx) => (
          <button className="flex-row justify-between" key={idx}>
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default NavTabs;
