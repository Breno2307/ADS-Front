import logo from '../assets/learn.svg'

import { useState } from 'react'

import { useNavigate } from 'react-router'

import useAuth from '../hooks/useAuth'

import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'

import './Login.css'

function Login() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [email, setEmail] = useState('')

  const [senha, setSenha] = useState('')

  const [emailErro, setEmailErro] = useState('')

  const [senhaErro, setSenhaErro] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    setEmailErro('')
    setSenhaErro('')

    let formularioValido = true

    if (!email) {
      setEmailErro('O campo de email é obrigatório.')
      formularioValido = false
    } else if (!email.includes('@')) {
      setEmailErro('Formato de email inválido.')
      formularioValido = false
    }

    if (!senha) {
      setSenhaErro('O campo de senha é obrigatório.')
      formularioValido = false
    } else if (senha.length < 6) {
      setSenhaErro(
        'A senha deve ter no mínimo 6 caracteres.',
      )
      formularioValido = false
    }

    if (!formularioValido) {
      return
    }

    login({
      nome: 'Breno',
      email: email,
    })

    navigate('/')
  }

  return (
    <section className="login-container">
      <article className="login-card">
        <header className="login-header">
          <img
            src={logo}
            alt="Imagem do Logo"
            className="login-logo"
          />

          <h1>Aluno Online</h1>
        </header>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <InputEmail
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailErro('')
            }}
            erro={emailErro}
          />

          <InputSenha
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value)
              setSenhaErro('')
            }}
            erro={senhaErro}
          />

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>
        </form>

        <footer className="login-footer">
          <p>© 2026. Todos os direitos reservados.</p>
        </footer>
      </article>
    </section>
  )
}

export default Login