import React, { useState } from "react";
import { Button, ConfigProvider, message, Steps, theme } from "antd";
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
const StepsBar = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextPrimary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "black",
            colorPrimaryBg: "#F3F3F3",
          },
        }}
      >
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" style={buttonStyle} onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              style={buttonStyle}
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={buttonStyle} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </ConfigProvider>
    </>
  );
};
export default StepsBar;
