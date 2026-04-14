import './Menu.css'

function Menu({ items }) {
  return (
    <nav className="menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
