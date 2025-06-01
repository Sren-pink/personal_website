import { Navbar } from "./nav/Navbar";
import { Outlet } from "react-router-dom";
import { Footers } from "./footers/Footers";
import { NavPatt } from "./nav/NavPattern";

export function Layout() {
  return (
    <>
      <Navbar />
      <NavPatt />
      <main>
        <Outlet />
      </main>
      <Footers />
    </>
  );
}
