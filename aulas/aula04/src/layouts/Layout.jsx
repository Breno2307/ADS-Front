import { Outlet } from "react-router";
import Menu from "../Components/Menu";

function Layout() {
  return (
    <>
      <aside>
        <Menu />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
