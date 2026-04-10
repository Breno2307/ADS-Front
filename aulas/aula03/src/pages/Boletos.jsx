import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Boletos() {
  const colunas = ["vencimento", "valor", "situação"];
  const boletos = [
    { vencimento: "01/04/2026", valor: 500, situação: "pago" },
    { vencimento: "01/05/2026", valor: 500, situação: "a vencer" },
    { vencimento: "01/06/2026", valor: 500, situação: "a vencer" },
    { vencimento: "01/07/2026", valor: 500, situação: "a vencer" },
  ];
  return (
    <Layout titulo="meus boletos" subtitulo="historico de pagamentos">
      <Tabela titulos={colunas} dados={boletos} />
    </Layout>
  );
}

export default Boletos;
