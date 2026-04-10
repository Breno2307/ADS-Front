import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  const avisos = ["Eleição para representante", "Participe do IESB-SE"];
  const datas = [
    "23/04 - avalição P1",
    "04/05 - Trancamento da matricula",
    "07/06 - Renovação da matricula",
  ];
  const disciplinas = [
    "Construção de frontend",
    "governanvisa de TI",
    "BI e data warehousing",
  ];
  return (
    <Layout titulo="Ola aluno," subtitulo="bem-vindo ao portal do aluno">
      <Card titulo="Mural de Avisos:" itens={avisos} />
      <Card titulo="Calendario Academico:" itens={datas} />
      <Card titulo="Minhas Disciplinas:" itens={disciplinas} />
    </Layout>
  );
}

export default Dashboard;
