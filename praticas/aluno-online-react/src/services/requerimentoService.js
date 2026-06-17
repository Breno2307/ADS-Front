const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

const REQUERIMENTOS_URL = `${BASE_URL}/requerimentos`;

function obterToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();

    throw new Error("401");
  }

  return token;
}

async function listarRequerimentos() {
  const token = obterToken();

  const resposta = await fetch(REQUERIMENTOS_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao carregar requerimentos");
  }

  return resposta.json();
}

async function cadastrarRequerimento(requerimento) {
  const token = obterToken();

  const resposta = await fetch(REQUERIMENTOS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(requerimento),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao cadastrar requerimento");
  }

  return resposta.json();
}

export { listarRequerimentos, cadastrarRequerimento };
