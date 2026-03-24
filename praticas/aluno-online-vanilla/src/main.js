import './style.css'

const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';

  email.classList.remove('input-error');
  password.classList.remove('input-error');
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  clearError();

  let hasError = false;

  if (email.value.trim() === '') {
    showError('O campo e-mail é obrigatório.');
    email.classList.add('input-error');
    hasError = true;
  }

  if (password.value.trim() === '') {
    showError('O campo senha é obrigatório.');
    password.classList.add('input-error');
    hasError = true;
  }

  if (!hasError) {
    window.location.href = '/';
  }
});

email.addEventListener('input', clearError);
password.addEventListener('input', clearError);
