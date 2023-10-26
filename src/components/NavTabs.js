import React from "react";

const NavTabs = ({ tabsList }) => {
  return (
    <div>
      <ul className="flex">
        {tabsList.map((item, idx) => (
          <li className="flex-row" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavTabs;
