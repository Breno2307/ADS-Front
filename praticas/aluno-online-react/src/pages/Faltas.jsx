import Layout from '../components/Layout'
import Card from '../components/Card'
import Table from '../components/Table'
import './Faltas.css'

function Faltas() {
  const semestres = [
    {
      nome: '2026.1',
      disciplinas: [
        { nome: 'Frontend', faltas: 0, presenca: '100%' }
      ]
    }
  ]

  const columns = ['Disciplina', 'Faltas', 'Presença']

  return (
    <Layout>
      {semestres.map((s) => (
        <Card key={s.nome} title={s.nome}>
          <Table
            className="faltas-table"
            columns={columns}
            data={s.disciplinas}
            renderRow={(d) => (
              <>
                <td>{d.nome}</td>
                <td>{d.faltas}</td>
                <td>{d.presenca}</td>
              </>
            )}
          />
        </Card>
      ))}
    </Layout>
  )
}

export default Faltas
