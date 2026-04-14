import Layout from '../components/Layout'
import Card from '../components/Card'
import Table from '../components/Table'
import './Requerimentos.css'

function Requerimentos() {
  const dados = [
    { tipo: 'Revisão', data: '2025', situacao: 'Deferido', situacaoClass: 'deferido' }
  ]

  const columns = ['Tipo', 'Data', 'Situação']

  return (
    <Layout>
      <Card title="Requerimentos">
        <Table
          className="requerimentos-table"
          columns={columns}
          data={dados}
          renderRow={(r) => (
            <>
              <td>{r.tipo}</td>
              <td>{r.data}</td>
              <td>
                <span className={`situacao-badge ${r.situacaoClass}`}>
                  {r.situacao}
                </span>
              </td>
            </>
          )}
        />
      </Card>
    </Layout>
  )
}

export default Requerimentos
