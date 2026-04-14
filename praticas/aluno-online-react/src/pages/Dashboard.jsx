import Layout from '../components/Layout'
import ListCard from '../components/ListCard'

function Dashboard() {
  const avisos = [
    'Inscrição para o projeto de extensão',
    'Eleição para representante de turma'
  ]

  const calendario = [
    '23/02 - Início do período letivo 2026-1',
    '25/04 - Prazo final para aplicação da P1',
    '23/06 - Prazo final para aplicação da P2',
    '04/07 - Fim do período letivo 2026-1'
  ]

  const disciplinas = [
    'BI e Data Warehousing',
    'Construção de Frontend',
    'Manutenção de Software e Devops'
  ]

  return (
    <Layout>
      <ListCard title="Mural de Avisos" items={avisos} />
      <ListCard title="Calendário Acadêmico" items={calendario} />
      <ListCard title="Minhas Disciplinas" items={disciplinas} />
    </Layout>
  )
}

export default Dashboard
