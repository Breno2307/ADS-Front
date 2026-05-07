import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "./Layout.css";

function Layout() {
  return (
    <section className="app-container">
      <Sidebar />

      <main className="main-content">
        <Topbar nome="Breno" />

        <section className="content-area">
          <Outlet />
        </section>
      </main>
    </section>
  );
}

export default Layout;