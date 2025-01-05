// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('regPassword');
  const icon = document.getElementById('togglePasswordIcon');

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    icon.classList.remove('bi-eye-slash');
    icon.classList.add('bi-eye');
  } else {
    passwordField.type = 'password';
    icon.classList.remove('bi-eye');
    icon.classList.add('bi-eye-slash');
  }
});

// Toggle Confirm Password Visibility
document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
  const confirmPasswordField = document.getElementById('regConfirmPassword');
  const icon = document.getElementById('toggleConfirmPasswordIcon');

  if (confirmPasswordField.type === 'password') {
    confirmPasswordField.type = 'text';
    icon.classList.remove('bi-eye-slash');
    icon.classList.add('bi-eye');
  } else {
    confirmPasswordField.type = 'password';
    icon.classList.remove('bi-eye');
    icon.classList.add('bi-eye-slash');
  }
});


var needsValidation = document.querySelectorAll('.needs-validation');

Array.prototype.slice.call(needsValidation).forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      window.location.href = "pages_register.html";
    }
    form.classList.add('was-validated');
  }, false);
});


document.getElementById('regConfirmPassword').addEventListener('input', function () {
  const password = document.getElementById('regPassword').value;
  const confirmPassword = this.value;
  const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');

  if (confirmPassword !== password) {
    // Passwords do not match
    confirmPasswordFeedback.style.display = 'block';
    this.setCustomValidity('Passwords do not match.');
    this.classList.add('is-invalid');
    this.classList.remove('is-valid');
  } else {
    // Passwords match
    confirmPasswordFeedback.style.display = 'none';
    this.setCustomValidity('');
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
  }
});