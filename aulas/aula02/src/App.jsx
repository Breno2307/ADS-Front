import "./App.css";
import logo from "./assets/learn.svg";

function Cabecalho() {
  return (
    <header>
      <h1>Titulo</h1>
    </header>
  );
}

function App() {
  return (
    <main>
      <img src={logo} alt="Icone chapeu formatura" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhalaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;
