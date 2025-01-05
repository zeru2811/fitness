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
  
  const form = document.getElementById('registerForm');
  const usernameInput = document.getElementById('regUsername');
  const usernamefeedback = document.getElementById('usernameFeedback');
  const emailInput = document.getElementById('regEmail');
  const emailfeedback = document.getElementById('emailFeedback');
  const passwordInput = document.getElementById('regPassword');
  const passwordfeedback = document.getElementById('passwordFeedback');
  const confirmPasswordInput = document.getElementById('regConfirmPassword');
  const confirmPasswordfeedback = document.getElementById('confirmPasswordFeedback');
  const acceptTerms = document.getElementById('acceptTerms');
  const acceptTermsFeedback = document.getElementById('termsFeedback');
  const submitBtn = document.getElementById('submitBtn');

  
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    isValid = true;
    const usernamePattern = /^[A-Za-z][A-Za-z0-9_]{5,19}$/;
    
    if (usernameInput.value.trim() === '') {
      usernameInput.classList.add('is-invalid');
      usernamefeedback.style.display = 'block';
      usernamefeedback.textContent = 'This field is required.';
      isValid = false;
    } else if (!usernamePattern.test(usernameInput.value)) {
      usernameInput.classList.add('is-invalid');
      usernamefeedback.style.display = 'block';
      usernamefeedback.textContent = 'Start with a letter, 6-20 characters.';
      isValid = false;
    } else {
      usernameInput.classList.remove('is-invalid');
      usernamefeedback.style.display = 'none';
      // alert('Form submitted successfully!');
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === '') {
      emailInput.classList.add('is-invalid');
      emailfeedback.style.display = 'block';
      emailfeedback.textContent = 'This field is required.';
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      emailfeedback.style.display = 'block';
      emailfeedback.textContent = 'Invalid email address.';
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailfeedback.style.display = 'none';

    }

    const passwordPattern = /^(?=.*[A-Za-z])[A-Za-z0-9]{12}$/;
    
    if (passwordInput.value.trim() === '') {
      passwordInput.classList.add('is-invalid');
      passwordfeedback.style.display = 'block';
      passwordfeedback.textContent = 'This field is required.';
      isValid = false;
    } else if (!passwordPattern.test(passwordInput.value)) {
      passwordInput.classList.add('is-invalid');
      passwordfeedback.style.display = 'block';
      passwordfeedback.textContent = 'Password must be 12 characters with at least one uppercase and one lowercase letter.';
      isValid = false;
    } else {
      passwordInput.classList.remove('is-invalid');
      passwordfeedback.style.display = 'none';
      // alert('Form submitted successfully!');
    }
    
    if (confirmPasswordInput.value.trim() === '') {
      confirmPasswordInput.classList.add('is-invalid');
      confirmPasswordfeedback.style.display = 'block';
      confirmPasswordfeedback.textContent = 'This field is required.';
      isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.classList.add('is-invalid');
      confirmPasswordfeedback.style.display = 'block';
      confirmPasswordfeedback.textContent = 'Passwords do not match.';
      isValid = false;
    } else {
      confirmPasswordInput.classList.remove('is-invalid');
      confirmPasswordfeedback.style.display = 'none';
      // alert('Form submitted successfully!');
    }

    if (isValid) {
      alert('Form submitted successfully!');
    }




  });
  
  usernameInput.addEventListener('input', () => {
    usernameInput.classList.remove('is-invalid');
    usernamefeedback.style.display = 'none';
  });

  emailInput.addEventListener('input', () => {
    emailInput.classList.remove('is-invalid');
    emailfeedback.style.display = 'none';
  });

  passwordInput.addEventListener('input', () => {
    passwordInput.classList.remove('is-invalid');
    passwordfeedback.style.display = 'none';
  });

  confirmPasswordInput.addEventListener('input', () => {
    confirmPasswordInput.classList.remove('is-invalid');
    confirmPasswordfeedback.style.display = 'none';
  });

 