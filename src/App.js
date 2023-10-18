import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import DropDownButton from "./components/DropDownButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Button theme={"alpha"} content={"New Booking"} />
      <div className="mt-4"></div>

      <Badge theme={"alpha"} content={"Active"} />
      <Badge theme={"bravo"} content={"Active"} />
      <Badge theme={"charlie"} content={"Active"} />
      <Badge theme={"delta"} content={"Active"} />

      <div className="mt-4"></div>
      <DropDownButton theme={"input"} />
    </div>
  );
}

export default App;
