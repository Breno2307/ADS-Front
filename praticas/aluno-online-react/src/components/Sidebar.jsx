import "./Sidebar.css";
import Menu from "./Menu";

function Sidebar() {
  const menuItems = [
    { label: "Dashboard", link: "/" },
    { label: "Notas", link: "/notas" },
    { label: "Faltas", link: "/faltas" },
    { label: "Boletos", link: "/boletos" },
    { label: "Requerimentos", link: "/requerimentos" },
  ];

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src="/learn.svg" alt="Logo" className="sidebar-logo" />
        <h1>Aluno Online</h1>
      </header>

      <Menu items={menuItems} />
    </aside>
  );
}

export default Sidebar;