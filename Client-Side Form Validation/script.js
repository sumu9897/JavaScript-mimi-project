document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        let errors = [];

        // Email validation
        if (email.value === '') {
            errors.push('Email is required.');
        } else if (!isValidEmail(email.value)) {
            errors.push('Invalid email address.');
        }

        // Password validation
        if (password.value === '') {
            errors.push('Password is required.');
        } else if (password.value.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }

        // Display errors
        if (errors.length > 0) {
            event.preventDefault();
            displayErrors(errors);
        }
    });

    // Real-time email validation
    email.addEventListener('input', function() {
        if (email.validity.valid) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Invalid email address.';
        }
    });

    // Real-time password validation
    password.addEventListener('input', function() {
        if (password.validity.valid) {
            passwordError.textContent = '';
        } else {
            passwordError.textContent = 'Password must be at least 8 characters long.';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrors(errors) {
        errorMessage.textContent = errors.join(' ');
    }
});
