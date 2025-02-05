// Mock data for usernames and passwords
const users = [
    { username: 'admin', password: '54321' },
    { username: 'myintkhaingoo', password: 'mko122025' },
    { username: 'hanhtetaung', password: 'hanhtetaung975'},
    { username: 'naymyo', password: 'naymyo975'},
    { username: 'naylin', password: 'naylin522025'},
    { username: 'Pyae Gyi', password: '150399'},
    { username: 'Eaint loon', password: '123456789'} 
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
        window.location.href = 'https://epshero.netlify.app/questions.html';  // Redirect to questions.html after successful login
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
