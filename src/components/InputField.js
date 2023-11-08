import React from "react";
import { Input, ConfigProvider } from "antd";
import {
  Icons,
  DropDownField,
  TagField,
  NumberField,
  TextAreaField,
  DatePickerField,
} from "./index";

const { TextArea } = Input;

const InputField = ({
  placeholder,
  iconName = null,
  iconDirection = null,
  defaultValue = null,
  type = "text",
  ...props
}) => {
  const fieldToken = {};

  const typeMap = {
    text: (
      <Input
        placeholder={placeholder}
        prefix={iconDirection === "left" ? <Icons iconName={iconName} /> : null}
        suffix={
          iconDirection === "right" ? <Icons iconName={iconName} /> : null
        }
      />
    ),
    textarea: <TextAreaField placeholder={placeholder} autosize={true} />,
    number: <NumberField min={0} defaultValue={0} />,
    date: <DatePickerField />,
    tag: <TagField tagData={props.tagData} placeholder={placeholder} />,
    dropdown: <DropDownField defaultValue={defaultValue} />,
  };

  return (
    <div className="flex flex-col">
      <div className="text-sm font-normal pb-2.5">{props.children}</div>
      <ConfigProvider
        theme={{
          token: fieldToken,
        }}
      >
        {typeMap[type] || null}
      </ConfigProvider>
    </div>
  );
};

export default InputField;
