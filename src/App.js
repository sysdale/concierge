import "./App.css";
import {
  DropDownButton,
  ToggleButton,
  NavBar,
  Buttonn,
  InputField,
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

      <DropDownButton
        onDropDownChange={handleDropDownChange}
        placeholder={"Refrigerators"}
        data={data}
      />

      <DropDownButton
        theme={"filter"}
        placeholder={"Air conditioner"}
        data={data}
      />

      <ToggleButton theme={"black_white"} />
      <ToggleButton
        content={{ trueMsg: "Enabled", falseMsg: "Disabled" }}
        theme={"red_green"}
      />

      <InputField
        placeholder={"Mayfair"}
        iconDirection={"left"}
        iconName={"UserOutlined"}
        type={""}
      >
        Site Name
      </InputField>
    </div>
  );
}

export default App;
