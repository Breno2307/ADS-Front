import { Link } from 'react-router'

import Card from '../components/Card'

import './Requerimentos.css'

function Requerimentos() {
  const requerimentos = [
    {
      tipo: 'Revisão de Menção',
      data: '15/12/2025',
      situacao: 'Indeferido',
      situacaoClass: 'indeferido',
    },

    {
      tipo: 'Dispensa de Disciplina',
      data: '12/06/2025',
      situacao: 'Indeferido',
      situacaoClass: 'indeferido',
    },

    {
      tipo: 'Trancamento de Matrícula',
      data: '05/01/2024',
      situacao: 'Deferido',
      situacaoClass: 'deferido',
    },
  ]

  return (
    <article className="requerimentos-container">
      <header className="requerimentos-header">
        <h1>Meus Requerimentos</h1>

        <h2>
          Faça solicitações online para a
          secretaria
        </h2>

        <Link
          to="/requerimentos/novo"
          className="novo-requerimento"
        >
          ➕ Novo Requerimento
        </Link>
      </header>

      <Card>
        <section className="table-container">
          <table className="requerimentos-table">
            <thead>
              <tr>
                <th>Tipo</th>

                <th>Data</th>

                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              {requerimentos.map(
                (req, index) => (
                  <tr key={index}>
                    <td>{req.tipo}</td>

                    <td>{req.data}</td>

                    <td>
                      <span
                        className={`situacao-badge ${req.situacaoClass}`}
                      >
                        {req.situacao}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </section>
      </Card>
    </article>
  )
}

export default Requerimentos