import React from "react";
import { Input, ConfigProvider } from "antd";
import {
  Icons,
  DropDownField,
  TagField,
  NumberField,
  TextAreaField,
  DatePickerField,
} from "../index.js";

const { TextArea } = Input;

const InputField = ({
  title,
  placeholder,
  type = "text",
  iconName = null,
  iconDirection = "left",
  defaultValue = null,
  bordered = true,
  navbar = false,
  onChange = null,
  ...props
}) => {
  const typeMap = {
    text: (
      <Input
        {...props}
        placeholder={placeholder}
        prefix={iconDirection === "left" ? <Icons iconName={iconName} /> : null}
        suffix={
          iconDirection === "right" ? <Icons iconName={iconName} /> : null
        }
      />
    ),
    textarea: (
      <TextAreaField placeholder={placeholder} autosize={true} {...props} />
    ),
    number: <NumberField min={0} defaultValue={0} {...props} />,
    date: <DatePickerField {...props} />,
    tag: <TagField w={props.tagData} placeholder={placeholder} {...props} />,
    dropdown: (
      <DropDownField
        defaultValue={defaultValue}
        dropData={props.dropData}
        navbar={navbar}
        {...props}
      />
    ),
  };

  return (
    <>
      <div className="text-xs">{title}</div>
      <div className="py-0.7">
        <ConfigProvider theme={{}}>{typeMap[type] || null}</ConfigProvider>
      </div>
    </>
  );
};

export default InputField;
