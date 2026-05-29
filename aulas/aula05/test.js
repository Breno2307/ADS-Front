import { criar, obter, listar, modificar, remover } from "./client.js";

async function main() {
  let resposta = await criar({ nome: "banana", preco: 12.5, unidade: "kg" });
  console.log("produto criado...", resposta);

  resposta = await listar();
  console.log("produtos listados...", resposta);

  resposta = await obter(resposta[0]);
  console.log("produto consultado...", resposta);

  resposta = await modificar({
    id: resposta.id,
    nome: "banana nanica",
    preco: 19.99,
    unidade: "kg",
  });
  console.log("produto atualizado...", resposta);

  resposta = await remover(resposta);
  console.log("produto removido...", resposta);
}

main();
