import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import DropDownButton from "./components/DropDownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className={"font-display"}>
      <Button
        theme={"a_blackButton"}
        content={"New Booking"}
        icons={"pencil"}
      />
      <Button theme={"b_grayButton"} content={"New Booking"} icons={"plus"} />
      <Button theme={"c_lightButton"} content={"New Booking"} />
      <Button theme={"d_navBarButtons"} content={"New Booking"} />

      <Badge theme={"a"} content={"Active"} />
      <Badge theme={"b"} content={"Active"} />
      <Badge theme={"c"} content={"Active"} />
      <Badge theme={"d"} content={"Active"} />

      <DropDownButton content={"Dropdown a"} placeholder={"Refrigerators"} />
      <DropDownButton
        theme={"filter"}
        content={"Dropdown b"}
        placeholder={"Air conditioner"}
      />

      <Checkbox content={"Electricity"} />
      <Checkbox content={"Cold Water"} />

      <ToggleButton theme={"black_white"} />

      <ToggleButton
        content={{ trueMsg: "Enabled", falseMsg: "Disabled" }}
        theme={"red_green"}
      />
    </div>
  );
}

export default App;
