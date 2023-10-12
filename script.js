const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});








