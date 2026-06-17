import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo
      ? JSON.parse(usuarioSalvo)
      : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const autenticado = !!token;

  const login = (dadosUsuario, tokenRecebido) => {

    setUsuario(dadosUsuario);
    setToken(tokenRecebido);

    localStorage.setItem(
      "usuario",
      JSON.stringify(dadosUsuario)
    );

    localStorage.setItem(
      "token",
      tokenRecebido
    );
  };

  const logout = () => {

    setUsuario(null);
    setToken(null);

    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        autenticado,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };