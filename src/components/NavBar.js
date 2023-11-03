import React from "react";
import Icons from "./Icons";
import NavTabs from "./NavTabs";
import DropDownButton from "./DropDownButton";
import Button from "./Button";

const NavBar = ({ data }) => {
  const tabsList = [
    { id: 3, text: "Sites" },
    { id: 5, text: "Bookings" },
    { id: 6, text: "Dashboard" },
  ];
  const iconsList = ["bell", "gear"];

  return (
    <div className="mb-4 py-2 px-4 flex justify-between items-center content-center border shadow-s rounded-none shadow-white">
      {/* Logo Area */}
      <div className="flex flex-row items-center">
        <div className="flex items-center text-3xl pr-12">
          <Button theme={"d_onlyIcon"} icons={"wallet"}></Button>
          <div className="text-lg font-semibold">Conseirge</div>
        </div>

        {/* Tabs Area */}
        <div className="flex">
          <NavTabs tabsList={tabsList} />
        </div>
      </div>

      <div className="flex items-center">
        {/* Icons Area */}
        <div className="flex text-xl">
          {iconsList.map((item, idx) => (
            <Button key={idx} theme={"d_onlyIcon"} icons={item}></Button>
          ))}
        </div>

        {/* Profile Area */}
        <div className="pl-6">
          <DropDownButton
            data={data}
            theme={"profile"}
            placeholder={"My Profile"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
