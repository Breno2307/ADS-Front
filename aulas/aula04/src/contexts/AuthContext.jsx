import { createContext, useState } from "react";

//cria o contexto
const AuthContext = createContext();

//cria um provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    //chamer a API passando dados
    setUsuario({ id: 0, nome: "Breno", email: "Breno@gmail.com" });
    setLogado(true);
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

export { AuthContext, AuthProvider };
