// Menu responsivo
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navegacao = document.querySelector('.navegacao');

    menuToggle.addEventListener('click', function () {
        navegacao.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    });
});

// Validação do formulário
const nameInput = document.getElementById('nome');
const nameError = document.getElementById('nameError');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const subjectInput = document.getElementById('subject');
const subjectError = document.getElementById('subjectError');

const messageInput = document.getElementById('mensagem');
const messageError = document.getElementById('messageError');

const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('contactForm');

// Validação do campo Nome
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'O nome não pode estar em branco.';
  } else if (nameInput.value.length > 50) {
    nameError.textContent = 'O nome deve ter no máximo 50 caracteres.';
  } else {
    nameError.textContent = '';
  }
});

// Validação do campo Email
emailInput.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'O email não pode estar em branco.';
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Por favor, insira um email válido.';
  } else {
    emailError.textContent = '';
  }
});

// Validação do campo Mensagem
messageInput.addEventListener('input', () => {
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'A mensagem não pode estar em branco.';
  } else if (messageInput.value.length > 300) {
    messageError.textContent = 'A mensagem deve ter no máximo 300 caracteres.';
  } else {
    messageError.textContent = '';
  }
});

// Habilitar o botão de envio 
form.addEventListener('input', () => {
  if (nameInput.value && emailInput.value && messageInput.value &&
    !nameError.textContent && !emailError.textContent && !messageError.textContent) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Rolagem da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});