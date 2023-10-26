import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import DropDownButton from "./components/DropDownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./components/ToggleButton";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";

function App() {
  const data = ["option1", "option2", "option3"];

  return (
    <div className="font-poppins">
      <NavBar data={data} />

      <Button
        theme={"a_blackButton"}
        content={"New Booking"}
        icons={"pencil"}
      />
      <Button theme={"b_grayButton"} content={"New Booking"} icons={"plus"} />
      <Button theme={"c_lightButton"} content={"New Booking"} />

      <Badge theme={"a"} content={"Active"} />
      <Badge theme={"b"} content={"Active"} />
      <Badge theme={"c"} content={"Active"} />
      <Badge theme={"d"} content={"Active"} />

      <DropDownButton placeholder={"Refrigerators"} data={data} />

      <DropDownButton
        theme={"filter"}
        placeholder={"Air conditioner"}
        data={data}
      />

      <Checkbox content={"Electricity"} />
      <Checkbox content={"Cold Water"} />

      <ToggleButton theme={"black_white"} />
      <ToggleButton
        content={{ trueMsg: "Enabled", falseMsg: "Disabled" }}
        theme={"red_green"}
      />

      <InputField title={"Site Name"} />
      <InputField title={"Hotel Name"} hasIcon canResize />
    </div>
  );
}

export default App;
