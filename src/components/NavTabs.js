import React from "react";

import { ConfigProvider, Tabs } from "antd";
import { tab } from "@testing-library/user-event/dist/tab";

const NavTabs = ({ tabsList }) => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemColor: "#D9D9D9",
            itemSelectedColor: "white",
            itemHoverColor: "white",
            inkBarColor: "white",
          },
        },
      }}
    >
      <Tabs
        onChange={onChange}
        items={tabsList.map((tab) => {
          return {
            label: (
              <div className="flex">
                <div className="flex items-center space-x-2">
                  <div>{tab.svg}</div>
                  <div>{tab.label}</div>
                </div>
              </div>
            ),
            key: tab.id,
          };
        })}
      />
    </ConfigProvider>
  );
};

export default NavTabs;
