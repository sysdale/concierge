import React from "react";
import Icons from "./Icons";
import NavTabs from "./NavTabs";
import DropDownButton from "./DropDownButton";

const NavBar = ({ data }) => {
  const tabsList = ["My Sites", "Bookings", "Dashboard"];
  const iconsList = ["bell", "gear"];

  return (
    <div className="mb-4 py-2 h-19 px-4 flex justify-between items-center content-center border shadow-s rounded-none shadow-white">
      {/* Logo Area */}
      <div className="flex flex-row items-center ">
        <div className="flex items-center">
          <button className="text-3xl">
            <Icons iconName={"wallet"} />
          </button>
          <div className="text-lg font-semibold">Conseirge</div>
        </div>

        {/* Tabs Area */}
        <div className="flex flex-row">
          <NavTabs tabsList={tabsList} />
        </div>
      </div>

      <div className="flex items-center">
        {/* Icons Area */}
        <div className="flex space-x-3 text-xl">
          {iconsList.map((item, idx) => (
            <button key={idx}>
              <Icons iconName={item} />
            </button>
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
