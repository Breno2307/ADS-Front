import Card from "../components/Card";
import Table from "../components/Table";

import "./Faltas.css";

function Faltas() {
  const semestres = [
    {
      nome: "2026.1",
      disciplinas: [
        {
          nome: "Construção de Frontend",
          faltas: 0,
          presenca: "100%",
        },
      ],
    },
  ];

  const columns = ["Disciplina", "Faltas", "Presença"];

  return (
    <article className="faltas-container">
      <header className="faltas-header">
        <h1>Minhas Faltas</h1>
        <h2>Histórico de Faltas por Semestre</h2>
      </header>

      {semestres.map((semestre) => (
        <Card key={semestre.nome} title={semestre.nome}>
          <div className="table-container">
            <Table
              className="faltas-table"
              columns={columns}
              data={semestre.disciplinas}
              renderRow={(disciplina) => (
                <>
                  <td>{disciplina.nome}</td>
                  <td>{disciplina.faltas}</td>
                  <td>{disciplina.presenca}</td>
                </>
              )}
            />
          </div>
        </Card>
      ))}
    </article>
  );
}

export default Faltas;