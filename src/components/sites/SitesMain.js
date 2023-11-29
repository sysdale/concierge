import React from "react";
import { SiteInfo, Cardd } from "../index";

const SitesMain = () => {
  return (
    <>
      <div className="flex mt-4 mx-60">
        <div className="flex-1 px-8 pt-4 ">
          <div className="text-4xl font-semibold pt-4">Add Site</div>
          <div className="text-base pt-2">
            Please add all the necessary information about your site
          </div>

          {/* Form Components */}
          <div className="flex-col pt-8 pb-9">
            <Cardd title={"1. Site Information"}>
              <div className="pt-4">
                <SiteInfo />
              </div>
            </Cardd>
          </div>

          <div className="flex-col space-y-3">
            <div>
              <Cardd title={"2. Site Details"} type={"inactive"} />
            </div>
            <div>
              <Cardd title={"3. Owner Details"} type={"inactive"} />
            </div>
            <div>
              <Cardd title={"4. Inventory Details"} type={"inactive"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitesMain;
