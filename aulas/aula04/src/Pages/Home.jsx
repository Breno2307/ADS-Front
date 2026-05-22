import { useState, useEffect } from "react";

function Home() {
  const [carregando, setCarregando] = useState(true);
  const [tarefas, setTarefas] = useState([]);

  const carregarDados = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setTarefas([
      { id: 1, nome: "Fazer o trabalho", status: "aberta" },
      { id: 2, nome: "Estudar API REST", status: "aberta" },
      { id: 3, nome: "Entregar as praticas", status: "pendente" },
      { id: 4, nome: "Revisar conteudo", status: "pendente" },
      { id: 5, nome: "Assistir video-aulas", status: "concluida" },
    ]);
  };

  useEffect(() => {
    const disparar = async () => {
      await carregarDados();
      setCarregando(false);
    };
    disparar();
  }, []);

  return (
    <>
      <h1>pagina inicial</h1>
      <h2>Minhas Tarefas do Dia</h2>
      {carregando ? (
        <>
          <p>Aguarde...</p>
          <table className="border boder-gay-300 rounded animate-pulse">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-2 px-8"></th>
                <th className="py-2 px-8"></th>
                <th className="py-2 px-8"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
                <td>
                  <div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div>
                </td>
              </tr>
            </tbody>
            <div className=""></div>
          </table>
        </>
      ) : (
        <table>
          <tr>
            <th>ID</th>
            <th>Tarefa</th>
            <th>Status</th>
          </tr>
          {tarefas.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
}

export default Home;
