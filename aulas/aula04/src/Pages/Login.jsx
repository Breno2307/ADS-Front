import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const handleEntrar = () => {
    login({ usuario: "Breno@gmail.com", senha: "tema o sangue antigo" });
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
