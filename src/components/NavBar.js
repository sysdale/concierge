import React from "react";
import Icons from "./Icons";
import NavTabs from "./NavTabs";
import DropDownButton from "./DropDownButton";
import Button from "./Buttonn";
import BookingSvg from "./SVGs/BookingSvg";
import SitesSvg from "./SVGs/SitesSvg";

const NavBar = ({ data }) => {
  const tabsList = [
    { id: 0, text: "My Sites", svg: <BookingSvg /> },
    { id: 1, text: "Bookings", svg: <SitesSvg /> },
  ];

  return (
    <div className="mb-4 px-4 flex justify-between items-center content-center bg-black text-[#D9D9D9] font-semibold text-base relative">
      {/* Logo Area */}
      <div className="flex flex-row items-center ">
        <div className="flex items-center text-3xl pr-12 text-black">
          <Button theme={"d_onlyIcon"} icons={"logo"}></Button>
        </div>

        {/* Tabs Area */}
        <div className="flex ">
          <NavTabs tabsList={tabsList} />
        </div>
      </div>

      <div className="flex items-center">
        {/* Icons Area */}
        <div className="flex text-xl">
          {/* {iconsList.map((item, idx) => (
            <Button key={idx} theme={"d_onlyIcon"} icons={item}></Button>
          ))} */}
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
