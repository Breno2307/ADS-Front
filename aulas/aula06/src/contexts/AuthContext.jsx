import { createContext, useContext, useState } from "react";
import { autenticar } from "../services/authService";

//cria o contexto
const AuthContext = createContext();

//cria um provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if (resposta?.token) {
      setUsuario({ id: 0, nome: "Breno", email: "breno@gmail.com" });
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
