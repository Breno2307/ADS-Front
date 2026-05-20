import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const salvar = (data) => console.log(data);

  const regras = {
    nome: {
      required: "nome é obrigatorio",
      minLength: { value: 3, message: "Nome deve ter mais de 3 caracteres" },
      maxLength: {
        value: 100,
        message: "Nome deve ter no maximo 100 caracteres",
      },
    },
    email: {
      required: "email é obrigatorio",
      patter: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "email invalido",
      },
    },
    nascimento: {
      validate: {
        dataMinima: (value) =>
          Date.parse(value) > new Date(1899, 11, 31).getTime() || "Data inferior",
        dataMaxima: (value) =>
          Date.parse(value) < new Date().getTime() || "Data superior",
      },
    },
    telefone: {
      sin: { value: 0, message: "telefone invalido" },
      patter: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "telefone invalido",
      },
    },
  };

  return (
    <>
      <h1>Perfil do usuario {id}</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label htmlFor="nome">nome</label>
          <input type="text" id="nome" {...register("nome", regras.nome)} />
          {errors?.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" id="email" {...register("email", regras.email)} />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="nascimento">data de nascimento</label>
          <input type="date" id="nascimento" {...register("nascimento")} />
          {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        </div>
        <div>
          <label htmlFor="telefone">telefone</label>
          <input type="tel" id="telefone" {...register("telefone")} />
          {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
