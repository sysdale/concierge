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
        token: {
          itemColor: "white",
          itemHoverColor: "white",
          itemSelectedColor: "white",
        },
      }}
    >
      <Tabs
        onChange={onChange}
        items={tabsList.map((tab) => {
          return {
            label: (
              <span>
                {tab.svg}
                {tab.label}
              </span>
            ),
            key: tab.id,
          };
        })}
      />
    </ConfigProvider>
  );
};

export default NavTabs;
