const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export async function autenticar(email, senha) {
  const resposta = await fetch(
    `${BASE_URL}/usuarios?email=${email}`
  )

  const usuarios = await resposta.json()

  const usuario = usuarios.find(
    (u) => u.email === email && u.senha === senha
  )

  if (!usuario) {
    throw new Error('Email ou senha inválidos')
  }

  const token = btoa(
    `${usuario.email}:${Date.now()}`
  )

  return {
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
    token,
  }
}