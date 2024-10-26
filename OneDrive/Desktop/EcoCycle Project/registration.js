document.getElementById('registerForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
  
    let formIsValid = true;
  
    // Validate passwords match
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match!';
      formIsValid = false;
    }
  
    // Prevent form submission if invalid
    if (!formIsValid) {
      event.preventDefault();
    }
  });
  
  // Password Strength Indicator
  const passwordInput = document.getElementById('password');
  const passwordStrength = document.getElementById('passwordStrength');
  
  passwordInput.addEventListener('input', function() {
    const strength = checkPasswordStrength(passwordInput.value);
    passwordStrength.textContent = strength.message;
    passwordStrength.style.color = strength.color;
    passwordStrength.style.display = 'block';
  });
  
  function checkPasswordStrength(password) {
    let message = '';
    let color = 'red';
  
    if (password.length < 6) {
      message = 'Weak: Too short';
    } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/)) {
      message = 'Strong';
      color = 'green';
    } else {
      message = 'Medium: Add uppercase and numbers';
      color = 'orange';
    }
  
    return { message, color };
  }
  