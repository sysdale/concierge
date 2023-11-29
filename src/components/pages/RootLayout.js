import { Outlet } from "react-router-dom";

import { MainNavigation } from "../index";

function RootLayout() {
  return (
    <>
      {/* <MainNavigation /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
