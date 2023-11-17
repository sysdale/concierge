import React from "react";
import BookingSvg from "../../SVGs/BookingSvg";
import SitesSvg from "../../SVGs/SitesSvg";
import {
  DropDownField,
  Buttonn,
  NavTabs,
  InputField,
  Icons,
} from "../../components/index";
import { Link } from "react-router-dom";

const NavBar = ({ data }) => {
  const tabsList = [
    { id: 0, label: "My Sites", svg: <BookingSvg />, navTo: "sites" },
    { id: 1, label: "Bookings", svg: <SitesSvg />, navTo: "bookings" },
  ];

  return (
    <div className="mb-4 px-4 flex justify-between items-center content-center bg-black text-[#D9D9D9] font-semibold text-base">
      {/* Logo Area */}
      <div className="flex flex-row items-center ">
        <div className="flex items-center text-3xl px-10">
          <Link to="/sites">
            <Icons iconName="logo" />
          </Link>
        </div>

        {/* Tabs Area */}
        <div className="flex">
          <NavTabs tabsList={tabsList} />
        </div>
      </div>

      {/* Profile Area */}
      <div className="pl-6">
        <InputField
          defaultValue={"My Profile"}
          type={"dropdown"}
          navbar={true}
        />
      </div>
    </div>
  );
};

export default NavBar;
