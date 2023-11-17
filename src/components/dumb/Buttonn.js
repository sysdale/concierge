import React, { useState } from "react";
import { Button, ConfigProvider } from "antd";

const Buttonn = ({
  theme = "primary",
  icons = null,
  onClick = null,
  ...props
}) => {
  const buttonThemes = {
    primary: {
      background: "black",
      color: "white",
    },
    secondary: { bg: "white", color: "black" },
    disabled: {
      bg: "#F5F5F5",
      color: "rgba(0, 0, 0, 0.25)",
      disabled: "disabled",
    },
  };

  const [buttonState, setButtonState] = useState(null);

  const onSaveHandler = (event) => {
    const clickValue = event.target;
    setButtonState(clickValue);
    onClick(clickValue);
  };

  return (
    <ConfigProvider
      theme={
        ({
          token: {
            colorPrimary: "#363636",
          },
        },
        {
          components: {
            Button: { paddingInline: 30 },
          },
        })
      }
    >
      <Button
        disabled={theme === "disabled"}
        style={buttonThemes[theme]}
        onClick={(e) => onSaveHandler(e)}
      >
        {props.children}
      </Button>
    </ConfigProvider>
  );
};

export default Buttonn;
