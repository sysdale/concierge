import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import DropDownButton from "./components/DropDownButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
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

      <DropDownButton theme={"input"} />
    </div>
  );
}

export default App;
