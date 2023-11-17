import React from "react";
import { Buttonn, Cardd, DatePickerField, InputField } from "../index";

const SiteInfo = () => {
  return (
    <>
      <div className="flex mt-4 mx-20  ">
        <div className="flex-1 px-8 pt-4 ">
          <div className="text-4xl font-semibold pt-4">Add Site</div>
          <div className="text-base pt-2 pb-8">
            Please add all the necessary information about your site
          </div>
          <div className="flex-col pt-4">
            <Cardd title={"1. Site Information"}>
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
                  <InputField
                    title={"Address"}
                    placeholder={"221 Baker Street"}
                  />
                </div>
                <div className="flex justify-between pb-3">
                  <div></div>
                  <Buttonn>Save</Buttonn>
                </div>
              </div>

              <div className="save-button"></div>
            </Cardd>
          </div>
        </div>
        <div className="progress-cards"></div>
      </div>
    </>
  );
};

export default SiteInfo;
