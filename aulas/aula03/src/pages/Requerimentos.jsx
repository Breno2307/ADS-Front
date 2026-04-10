import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Requerimentos() {
  return (
    <Layout
      titulo="Meus requerimentos"
      subtitulo="faça solicitação online para a secretaria"
    >
      <Tabela />
    </Layout>
  );
}
export default Requerimentos;
