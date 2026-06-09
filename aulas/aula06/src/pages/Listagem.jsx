import { useEffect, useState } from "react";
import { Link } from "react-router";
import { listar, remover } from "../services/ProdutoService";

function Listagem() {
  const [dados, setDados] = useState([]);

  const trataremover = async (produto) => {
    await remover(produto);
    setDados(dados.filter((item) => item.id != produto.id));
  };

  useEffect(() => {
    const disparar = async () => {
      const resposta = await listar();
      setDados(resposta);
    };
    disparar();
  }, []);
  return (
    <>
      <h1>Listagem de produtos</h1>
      <Link to="/produtos/novo">+ adicionar</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.unidade}</td>
              <td>
                <Link to={`/produtos/editar/${item.id}`}>Editar</Link>
              </td>
              <Link to="/produtos" onClick={() => trataremover(item)}>
                Remover
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listagem;
