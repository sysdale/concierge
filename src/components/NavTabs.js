import React, { useState } from "react";

const NavTabs = ({ tabsList }) => {
  const [activeTab, setActiveTab] = useState(null);
  const clicked_tw = "absolute top-2 border-b-2 border-black";

  const onClickHandler = (id) => setActiveTab(id);

  return (
    <div className="flex space-x-4">
      {tabsList.map((tab) => (
        <div key={tab.id}>
          <button onClick={() => onClickHandler(tab.id)}>{tab.text}</button>
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
