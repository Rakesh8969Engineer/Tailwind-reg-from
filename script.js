document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Registration successful!');
    });
});
