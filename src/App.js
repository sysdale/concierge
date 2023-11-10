import "./App.css";
import { dropData, tagData } from "./components/data/data";
import {
  Cardd,
  NavBar,
  Buttonn,
  InputField,
  StepsBar,
} from "./components/index";

import { useState } from "react";

function App() {
  const data = ["option1", "option2", "option3"];
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [dropdownStatus, setDropDownStatus] = useState(false);

  const [clickData, setClickData] = useState(null);

  const handleCheckChange = (event) => {
    setCheckboxStatus(event);
  };

  const handleDropDownChange = (event) => {
    setDropDownStatus(event);
  };

  const getClickData = (event) => {
    setClickData(event);
  };

  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <NavBar data={data} />

      <Buttonn onClick={getClickData} theme="primary">
        Primary
      </Buttonn>

      <Buttonn onClick={getClickData} theme="secondary">
        Secondary
      </Buttonn>
      <Buttonn theme="disabled">Disabled</Buttonn>

      <InputField
        placeholder={"Mayfair"}
        iconDirection={"left"}
        iconName={"user"}
        type={"textarea"}
      >
        Site Name
      </InputField>

      <InputField
        placeholder={"Something"}
        iconDirection={"right"}
        iconName={"logo"}
        type={"text"}
      >
        Site Area
      </InputField>

      <InputField
        placeholder={"nothing"}
        iconDirection={"left"}
        iconName={"logo"}
        type={"number"}
      >
        Rooms
      </InputField>

      <InputField placeholder={"choose date"} type={"date"}>
        Date Picker
      </InputField>

      <InputField type={"tag"} tagData={tagData} placeholder={"select a site"}>
        Choose Tags
      </InputField>

      <InputField
        type={"dropdown"}
        defaultValue={"choose date"}
        dropData={dropData}
      >
        Choose Drop Menu
      </InputField>

      <StepsBar />
      <Cardd />
    </div>
  );
}

export default App;
