import React from "react";
import { Buttonn, Cardd, DatePickerField, InputField } from "../index";

const SiteInfo = () => {
  return (
    <>
      <div className="flex-col px-3 pt-1.5 space-y-3">
        <div>
          <InputField title={"Site Name"} placeholder={"Mayfair"} />
        </div>
        <div>
          <InputField
            title={"Location Pin"}
            placeholder={"Location"}
            iconName={"user"}
          />
        </div>
        <div>
          <InputField title={"Address"} placeholder={"221 Baker Street"} />
        </div>
        <div className="flex justify-between pb-3">
          <div></div>
          <Buttonn>Save</Buttonn>
        </div>
      </div>

      <div className="save-button"></div>
    </>
  );
};

export default SiteInfo;
