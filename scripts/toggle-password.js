const togglepassword = document.querySelector('#togglepassword');
const password = document.querySelector('#password');

togglepassword.addEventListener('click', function (e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  if (togglepassword.classList.contains('fa-eye')) {
    togglepassword.classList.remove('fa-eye');
    togglepassword.classList.add('fa-eye-slash');
  } else {
    togglepassword.classList.remove('fa-eye-slash');
    togglepassword.classList.add('fa-eye');
  }
});