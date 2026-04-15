import './Topbar.css'

function Topbar({ nome = 'Aluno', mensagem = 'Bem-vindo ao portal do aluno', avatar = '/avatar.svg' }) {
  return (
    <header className="topbar">
      <section className="user-greeting">
        <span>Olá, {nome}!</span>
        <p className="welcome-message">{mensagem}</p>
      </section>
      <figure className="user-avatar">
        <img src={avatar} alt="Avatar do usuário" />
      </figure>
    </header>
  )
}

export default Topbar
