import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Notas() {
  return (
    <Layout titulo="minhas notas" subtitulo="historico de notas">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Notas;
