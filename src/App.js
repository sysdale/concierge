import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import DropDownButton from "./components/DropDownButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Button
        onClick={() => console.log("asas")}
        theme={"a_blackButton"}
        content={"New Booking"}
        icons={"pencil"}
      />
      <Button theme={"b_grayButton"} content={"New Booking"} icons={"plus"} />
      <Button theme={"c_lightButton"} content={"New Booking"} />
      <Button theme={"d_navBarButtons"} content={"New Booking"} />
      <div className="mt-4"></div>

      <Badge theme={"a"} content={"Active"} />
      <Badge theme={"b"} content={"Active"} />
      <Badge theme={"c"} content={"Active"} />
      <Badge theme={"d"} content={"Active"} />

      <div className="mt-4"></div>
      <DropDownButton theme={"input"} />
    </div>
  );
}

export default App;
