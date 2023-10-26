import React, { useState } from "react";

const NavTabs = ({ tabsList }) => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const clicked_tw = "border-b-4 border-black";

  const clickHandler = (id) => {
    console.log(id);
    setButtonClicked((prevState) => {
      const updatedButtons = [...prevState];
      updatedButtons[id] = !updatedButtons[id];
      return updatedButtons;
    });
  };

  const tabButtons = tabsList.map((item) => (
    <div>
      <button onClick={() => clickHandler(item.id)} key={item.id}>
        {item.text}
      </button>
      <div className={`${buttonClicked[item.id] ? clicked_tw : ""}`}></div>
    </div>
  ));

  return <div className="flex space-x-4">{tabButtons}</div>;
};

export default NavTabs;
