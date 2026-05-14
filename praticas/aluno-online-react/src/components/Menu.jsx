import { NavLink, useNavigate } from 'react-router'

import './Menu.css'

import useAuth from '../hooks/useAuth'

function Menu({ items }) {
  const navigate = useNavigate()

  const { logout } = useAuth()

  function sair() {
    logout()

    navigate('/login')
  }

  return (
    <nav className="menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? 'menu-link active'
                  : 'menu-link'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        <li>
          <button
            onClick={sair}
            className="menu-logout"
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Menu