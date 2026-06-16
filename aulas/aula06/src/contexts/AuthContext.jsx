import { createContext, useContext, useState } from "react";
import { autenticar } from "../services/authService";

//cria o contexto
const AuthContext = createContext();

//cria um provedor
function AuthProvider({ children }) {
  const token = localStorage.getItem("app:token");
  const [logado, setLogado] = useState(!!token);
  const [usuario, setUsuario] = useState({});

  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if (resposta?.token) {
      setUsuario(resposta);
      localStorage.setItem("app:token", JSON.stringify(resposta));
      setLogado(true);
      return;
    }
    throw new Error("credenciais invalidas");
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, login, logout, usuario }}>
      {/*value = estado compartilhado*/}
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
