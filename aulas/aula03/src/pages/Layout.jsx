import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";

function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
      </main>
    </>
  );
}

export default Layout;
