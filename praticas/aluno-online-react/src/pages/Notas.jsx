import Layout from '../components/Layout'
import Card from '../components/Card'
import Table from '../components/Table'
import './Notas.css'

function Notas() {
  const semestres = [
    {
      nome: '2026.1',
      disciplinas: [
        { nome: 'Frontend', a1: '', a2: '', a3: '', mencao: 'SR' }
      ]
    }
  ]

  const columns = ['Disciplina', 'P1', 'P2', 'P3', 'Menção']

  return (
    <Layout>
      {semestres.map((s) => (
        <Card key={s.nome} title={s.nome}>
          <Table
            className="notas-table"
            columns={columns}
            data={s.disciplinas}
            renderRow={(d) => (
              <>
                <td>{d.nome}</td>
                <td>{d.a1}</td>
                <td>{d.a2}</td>
                <td>{d.a3}</td>
                <td>{d.mencao}</td>
              </>
            )}
          />
        </Card>
      ))}
    </Layout>
  )
}

export default Notas
