import Layout from '../components/Layout'
import Card from '../components/Card'
import Table from '../components/Table'
import './Boletos.css'

function Boletos() {
  const boletos = [
    { vencimento: '19/01/2026', valor: '500,00', situacao: 'Pago', situacaoClass: 'pago' },
    { vencimento: '19/02/2026', valor: '500,00', situacao: 'Em atraso', situacaoClass: 'atraso' }
  ]

  const columns = ['Vencimento', 'Valor R$', 'Situação']

  return (
    <Layout>
      <Card title="Meus Boletos">
        <Table
          className="boletos-table"
          columns={columns}
          data={boletos}
          renderRow={(b) => (
            <>
              <td>{b.vencimento}</td>
              <td>{b.valor}</td>
              <td>
                <span className={`situacao-badge ${b.situacaoClass}`}>
                  {b.situacao}
                </span>
              </td>
            </>
          )}
        />
      </Card>
    </Layout>
  )
}

export default Boletos
