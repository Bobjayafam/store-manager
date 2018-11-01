const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const invalid = document.querySelector('.invalid-alert');
const login = (e) => {
  e.preventDefault();

  if (username.value === 'admin' && password.value === 'admin') {
    window.open('admin-view-sales.html', '_self');
  } else if (username.value === 'attendant' && password.value === 'attendant') {
    window.open('attendant-products.html', '_self');
  } else {
    invalid.innerHTML = '<p>Invalid Username and password</p>';
  }
};
form.addEventListener('submit', login);
