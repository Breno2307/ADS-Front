import { Routes, Route, Navigate } from 'react-router'

import useAuth from './hooks/useAuth'

import Layout from './components/Layout'

import Dashboard from './pages/Dashboard'
import Notas from './pages/Notas'
import Faltas from './pages/Faltas'
import Boletos from './pages/Boletos'
import Requerimentos from './pages/Requerimentos'
import Login from './pages/Login'

import RequerimentoForm from './forms/RequerimentoForm'

function App() {
  const { autenticado } = useAuth()

  return (
    <Routes>
      {!autenticado ? (
        <>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </>
      ) : (
        <>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="notas"
              element={<Notas />}
            />

            <Route
              path="faltas"
              element={<Faltas />}
            />

            <Route
              path="boletos"
              element={<Boletos />}
            />

            <Route path="requerimentos">
              <Route
                index
                element={<Requerimentos />}
              />

              <Route
                path="novo"
                element={<RequerimentoForm />}
              />
            </Route>
          </Route>

          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </>
      )}
    </Routes>
  )
}

export default App