import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <>
      <img src={logo} alt="icone de chapeu de formatura" />
      <h1>Aluno Online</h1>
      <FormLogin />
    </>
  );
}

export default Login;
