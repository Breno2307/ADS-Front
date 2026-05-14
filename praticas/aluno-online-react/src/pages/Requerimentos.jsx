import Card from "../components/Card";
import Table from "../components/Table";

import "./Requerimentos.css";

function Requerimentos() {
  const requerimentos = [
    {
      tipo: "Revisão de Menção",
      data: "15/12/2025",
      situacao: "Indeferido",
      situacaoClass: "indeferido",
    },
  ];

  const columns = [
    "Tipo de Requerimento",
    "Data de Solicitação",
    "Situação",
  ];

  return (
    <article className="requerimentos-container">
      <header className="requerimentos-header">
        <h1>Meus Requerimentos</h1>
        <h2>Faça solicitações online para a secretaria</h2>
      </header>

      <Card title="Histórico de Requerimentos">
        <div className="table-container">
          <Table
            className="requerimentos-table"
            columns={columns}
            data={requerimentos}
            renderRow={(req) => (
              <>
                <td>{req.tipo}</td>
                <td>{req.data}</td>
                <td>
                  <span
                    className={`situacao-badge ${req.situacaoClass}`}
                  >
                    {req.situacao}
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

export default Requerimentos;