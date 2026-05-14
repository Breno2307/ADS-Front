import { NavLink } from "react-router";
import "./Menu.css";

function Menu({ items }) {
  return (
    <nav className="menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;