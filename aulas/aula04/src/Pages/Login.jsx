import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const handleEntrar = () => {
    login({ usuario: "Breno@gmail.com", senha: "tema o sangue antigo" });
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
