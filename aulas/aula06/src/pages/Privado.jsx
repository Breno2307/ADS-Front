import { useAuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

function Privado() {
  const { logado } = useAuthContext();

  return <> 
  {logado ? <Outlet /> : <Navigate to="login" />}
  </>;
}

export default Privado;
