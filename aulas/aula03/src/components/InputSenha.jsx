function InputSenha({ erro, mudavalor }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" onChange={mudavalor} />
      <p>{erro}</p>
    </>
  );
}

export default InputSenha;
