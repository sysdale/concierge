import React from "react";

import { ConfigProvider, Tabs } from "antd";
import { tab } from "@testing-library/user-event/dist/tab";
import { Link } from "react-router-dom";

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
              <div className="flex py-3">
                <div className="flex items-center space-x-2">
                  <Link to={`/${tab.navTo}`}>
                    <div>{tab.svg}</div>
                    <div>{tab.label}</div>
                  </Link>
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
