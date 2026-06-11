import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  const [autenticado, setAutenticado] = useState(() => {
    return localStorage.getItem("autenticado") === "true";
  });

  const login = (dadosUsuario) => {
    setUsuario(dadosUsuario);
    setAutenticado(true);

    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
    localStorage.setItem("autenticado", "true");
  };

  const logout = () => {
    setUsuario(null);
    setAutenticado(false);

    localStorage.removeItem("usuario");
    localStorage.removeItem("autenticado");
  };

  return (
    <AuthContext.Provider
      value={{
        autenticado,
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
