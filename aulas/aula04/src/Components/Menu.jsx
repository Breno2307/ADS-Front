import { Link, NavLink } from "react-router";
import "./Menu.css";

function Menu() {
  const usuarioId = 0; //Pegou da API
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configuração</NavLink>
        </li>
        <li>
          <Link to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
