import { useParams } from "react-router";

function Perfil() {
  const { id } = useParams();

  return <h1>Perfil do usuario {id}</h1>;
}

export default Perfil;
