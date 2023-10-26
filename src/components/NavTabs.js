import React from "react";

const NavTabs = ({ tabsList }) => {
  return (
    <div className="border-solid border-2 ">
      <ul>
        {tabsList.map((item, idx) => (
          <button className="" key={idx}>
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default NavTabs;
