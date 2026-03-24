import './style.css'

const botao = document.querySelector("button");

botao.addEventListener('click', (e) =>{
  const matriculaInput = document.querySelector("#matricula");
  const matriculaErro = document.querySelector("#matriculaErro");
  const senhaInput = document.querySelector("#senha");
  const senhaErro = document.querySelector("#senhaErro");

  matriculaErro.textContent = '';
  senhaErro.textContent = ';'

  if (matriculaInput.value == '') {
    matriculaErro.textContent = "Matrícula é obrigatória";
    return;
  }

  if (parseInt(matriculaInput.value) <= 0) {
    matriculaErro.textContent = "Matrícula dever ser um número positivo";
    return;
  }

  if (senhaInput.value == '') {
    senhaErro.textContent = "Senha é obrigatória"
    return;
  }

  if (parseInt(senhaInput.value) < 8) {
    senhaErro.textContent = "Senha deve conter pelo menos 8 caracters";
    return;
  }
});