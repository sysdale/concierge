import React from "react";
import Icons from "./Icons";
import Button from "./Button";
import NavTabs from "./NavTabs";

const NavBar = () => {
  const tabsList = ["My Sites", "Bookings", "Dashboard"];

  return (
    <div className="py-2 h-19 px-4 flex justify-between content-center border shadow-sm rounded-none shadow-white">
      {/* Logo Area */}
      <div className="flex items-center">
        <div className="text-2xl">
          <Icons iconName={"wallet"} />
        </div>
        <span className="text-lg">Conseirge</span>
      </div>

      {/* Tabs Area */}
      <div className="flex">
        <NavTabs tabsList={tabsList} />
      </div>

      {/* Icons Area */}
      <div>
        <h2>Icons</h2>
      </div>

      {/* Profile Area */}
      <div>
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default NavBar;
