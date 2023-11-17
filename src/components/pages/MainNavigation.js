import { NavLink } from "react-router-dom";
import { NavBar } from "../index";
import { data } from "../../data/data";

function MainNavigation() {
  return (
    <header>
      <nav>
        <NavBar data={data} />
      </nav>
    </header>
  );
}

export default MainNavigation;
