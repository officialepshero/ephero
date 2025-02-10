// Mock data for usernames and passwords
const users = [
    { username: 'epshero', password: 'epshero' },
];

// Get the form elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

// Handle the form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        sessionStorage.setItem('isLoggedIn', 'true'); // Store login state in sessionStorage
        window.location.href = 'colorblindtest.html';  // Redirect to questions.html after successful login
    } else {
        errorMessage.style.display = 'block';
    }
});

// Toggle password visibility
togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});
