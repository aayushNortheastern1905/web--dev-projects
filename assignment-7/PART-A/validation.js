$(document).ready(function () {
    var isValid = {
        email: false,
        username: false,
        password: false,
        confirmPassword: false
    };

    //function for showing error
    function showError(field, message) {
        $('#' + field + '-error').text(message).show();
    }

    //function for hiding the error message
    function hideError(field) {
        $('#' + field + '-error').text('').hide();
    }

    //function to update the state of login button
    function updateLoginButtonState() {
        if (isValid.email && isValid.username && isValid.password && isValid.confirmPassword) {
            $('#login-button').prop('disabled', false);
            $('#login-button').css('background','blue');
        } else {
            $('#login-button').prop('disabled', true);
            $('#login-button').css('background','lightblue');
        }
    }

    $('#email').on('input', function () {
        var email = $(this).val();
        hideError('email');

        // Null check
        if (email.trim() === '') {
            showError('email', 'Email is required.');
        }
        // Special character check
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            showError('email', 'Invalid email format.');
        }
        // Email domain check
        else if (!email.endsWith('@northeastern.edu')) {
            showError('email', 'Only @northeastern.edu email addresses are accepted.');
        } else {
            isValid.email = true;
        }

        updateLoginButtonState();
    });

    $('#username').on('input', function () {
        var username = $(this).val();
        hideError('username');

        // Null check
        if (username.trim() === '') {
            showError('username', 'Username is required.');
        }
        // Special character check
        else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            showError('username', 'Username can only contain letters, numbers, and underscores.');
        }
        // Minimum and maximum character check
        else if (username.length < 4 || username.length > 20) {
            showError('username', 'Username must be between 4 and 20 characters.');
        } else {
            isValid.username = true;
        }

        updateLoginButtonState();
    });

    $('#password').on('input', function () {
        var password = $(this).val();
        hideError('password');

        // Null check
        if (password.trim() === '') {
            showError('password', 'Password is required.');
        }
        // Minimum and maximum character check
        else if (password.length < 6 || password.length > 20) {
            showError('password', 'Password must be between 6 and 20 characters.');
        } else {
            isValid.password = true;
        }

        updateLoginButtonState();
    });

    $('#confirm-password').on('input', function () {
        hideError('confirm-password');
        var password = $('#password').val();
        var confirmPassword = $(this).val();

        // Null check
        if (confirmPassword.trim() === '') {
            showError('confirm-password', 'Confirm password is required.');
        }
        // Password match check
        else if (password !== confirmPassword) {
            showError('confirm-password', 'Passwords do not match.');
        } else {
            isValid.confirmPassword = true;
        }

        updateLoginButtonState();
    });

    //clears form when the login button is clicked
    function clearForm() {
        $('#email').val('');
        $('#username').val('');
        $('#password').val('');
        $('#confirm-password').val('');
        hideError('email');
        hideError('username');
        hideError('password');
        hideError('confirm-password');
    }

    //redirects to the landing page of the calculator app
    $('#login-button').on('click', function () {
        if (isValid.email && isValid.username && isValid.password && isValid.confirmPassword) {
            var username = $('#username').val();
            window.location.href = 'welcome.html?username=' + username;
            clearForm();
        }
    });
});