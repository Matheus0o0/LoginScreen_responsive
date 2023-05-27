
function togglePasswordVisibility() {
    var passwordInput = document.querySelector('input[name="Senha"]');
    var passwordToggleIcon = document.querySelector('.password-toggle-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleIcon.classList.remove('fa-eye-slash');
        passwordToggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        passwordToggleIcon.classList.remove('fa-eye');
        passwordToggleIcon.classList.add('fa-eye-slash');
    }
}
