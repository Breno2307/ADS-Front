import Card from "../components/Card";
import Table from "../components/Table";

import "./Notas.css";

function Notas() {
  const semestres = [
    {
      nome: "2026.1",
      disciplinas: [
        {
          nome: "BI e Data Warehousing",
          a1: "",
          a2: "",
          a3: "",
          mencao: "SR",
        },
        {
          nome: "Construção de Frontend",
          a1: "",
          a2: "",
          a3: "",
          mencao: "SR",
        },
      ],
    },
  ];

  const columns = ["Disciplina", "A1", "A2", "A3", "Menção"];

  return (
    <article className="notas-container">
      <header className="notas-header">
        <h1>Minhas Notas</h1>
        <h2>Histórico de Notas por Semestre</h2>
      </header>

      {semestres.map((semestre) => (
        <Card key={semestre.nome} title={semestre.nome}>
          <div className="table-container">
            <Table
              className="notas-table"
              columns={columns}
              data={semestre.disciplinas}
              renderRow={(disciplina) => (
                <>
                  <td>{disciplina.nome}</td>
                  <td>{disciplina.a1}</td>
                  <td>{disciplina.a2}</td>
                  <td>{disciplina.a3}</td>
                  <td>{disciplina.mencao}</td>
                </>
              )}
            />
          </div>
        </Card>
      ))}
    </article>
  );
}

export default Notas;