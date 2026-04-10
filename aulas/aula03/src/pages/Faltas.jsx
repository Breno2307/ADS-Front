import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Faltas() {
  return (
    <Layout titulo="minhas faltas" subtitulo="historico de faltas por semestre">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Faltas;
