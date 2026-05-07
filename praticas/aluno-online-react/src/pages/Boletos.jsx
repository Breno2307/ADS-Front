import Card from "../components/Card";
import Table from "../components/Table";

import "./Boletos.css";

function Boletos() {
  const boletos = [
    {
      vencimento: "19/01/2026",
      valor: "500,00",
      situacao: "Pago",
      situacaoClass: "pago",
    },
    {
      vencimento: "19/02/2026",
      valor: "500,00",
      situacao: "Em atraso",
      situacaoClass: "atraso",
    },
  ];

  const columns = ["Vencimento", "Valor R$", "Situação"];

  return (
    <article className="boletos-container">
      <header className="boletos-header">
        <h1>Meus Boletos</h1>
        <h2>Histórico de Pagamentos</h2>
      </header>

      <Card title="Lista de Boletos">
        <div className="table-container">
          <Table
            className="boletos-table"
            columns={columns}
            data={boletos}
            renderRow={(boleto) => (
              <>
                <td>{boleto.vencimento}</td>
                <td>{boleto.valor}</td>
                <td>
                  <span
                    className={`situacao-badge ${boleto.situacaoClass}`}
                  >
                    {boleto.situacao}
                  </span>
                </td>
              </>
            )}
          />
        </div>
      </Card>
    </article>
  );
}

export default Boletos;