function InputMatricula({ erro, mudavalor }) {
  return (
    <>
      <label htmlFor="matricula">Matricula</label>
      <input
        type="number"
        id="matricula"
        name="matricula"
        onChange={mudavalor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputMatricula;
