import './Topbar.css'

import useAuth from '../hooks/useAuth'

function Topbar({
  mensagem = 'Bem-vindo ao portal do aluno',
  avatar = '/avatar.svg',
}) {
  const { usuario } = useAuth()

  return (
    <header className="topbar">
      <section className="user-greeting">
        <span>
          Olá, {usuario?.nome}!
        </span>

        <p className="welcome-message">
          {mensagem}
        </p>
      </section>

      <figure className="user-avatar">
        <img
          src={avatar}
          alt="Avatar do usuário"
        />
      </figure>
    </header>
  )
}

export default Topbar