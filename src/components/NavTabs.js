import React, { useState } from "react";

const NavTabs = ({ tabsList }) => {
  const [activeTab, setActiveTab] = useState(null);

  const onClickHandler = (id) => setActiveTab(id);

  return (
    <div className="flex space-x-10">
      {tabsList.map((tab) => (
        <div className="relative" key={tab.id}>
          <button onClick={() => onClickHandler(tab.id)}>{tab.text}</button>
          <div
            className={
              activeTab === tab.id
                ? "w-full absolute top-11 border-black border-2 rounded-t-lg"
                : ""
            }
          ></div>
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
