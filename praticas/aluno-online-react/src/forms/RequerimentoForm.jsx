import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router'

import './RequerimentoForm.css'

function RequerimentoForm() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  function salvar(dados) {
    console.log(dados)

    reset()

    navigate('/requerimentos')
  }

  return (
    <section className="requerimento-form-container">
      <header className="requerimento-form-header">
        <h1>Meus Requerimentos</h1>

        <img
          src="/avatar.svg"
          alt="Avatar"
          className="requerimento-avatar"
        />
      </header>

      <article className="requerimento-form-card">
        <h2>Novo Requerimento</h2>

        <form
          onSubmit={handleSubmit(salvar)}
          className="requerimento-form"
        >
          <section className="form-group">
            <label>Tipo de Requerimento</label>

            <select
              {...register('tipo', {
                required: 'Tipo é obrigatório',
              })}
            >
              <option value="">
                Selecione um tipo...
              </option>

              <option value="Revisão de Menção">
                Revisão de Menção
              </option>

              <option value="Dispensa de Disciplina">
                Dispensa de Disciplina
              </option>

              <option value="Mudança de Turno">
                Mudança de Turno
              </option>

              <option value="Trancamento">
                Trancamento
              </option>
            </select>

            {errors.tipo && (
              <p className="erro">
                {errors.tipo.message}
              </p>
            )}
          </section>

          <section className="form-group">
            <label>Descrição</label>

            <textarea
              rows="6"
              {...register('descricao', {
                required:
                  'Descrição é obrigatória',

                minLength: {
                  value: 10,
                  message:
                    'Descrição deve ter no mínimo 10 caracteres',
                },
              })}
            />

            {errors.descricao && (
              <p className="erro">
                {errors.descricao.message}
              </p>
            )}
          </section>

          <section className="form-group">
            <label>Data do Requerimento</label>

            <input
              type="date"
              {...register('data')}
            />
          </section>

          <section className="form-buttons">
            <button
              type="button"
              className="cancelar"
              onClick={() =>
                navigate('/requerimentos')
              }
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="salvar"
            >
              Salvar
            </button>
          </section>
        </form>
      </article>
    </section>
  )
}

export default RequerimentoForm