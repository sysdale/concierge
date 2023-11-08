import React, { useState } from "react";

const NavTabs = ({ tabsList }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickHandler = (id) => setActiveTab(id);

  return (
    <div className="flex space-x-4">
      {tabsList.map((tab) => (
        <div key={tab.id}>
          <button
            className={`py-6 px-2 ${
              activeTab === tab.id ? "border-b-4 border-white " : ""
            }`}
            onClick={() => onClickHandler(tab.id)}
          >
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4">{tab.svg}</svg>
              <span>{tab.text}</span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
