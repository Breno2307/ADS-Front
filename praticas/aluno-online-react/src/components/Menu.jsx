import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import "./Menu.css";

function Menu() {
  const { logout } = useAuth();

  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>

        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>

        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>

        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>

        <li>
          <button onClick={logout}>Sair</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
