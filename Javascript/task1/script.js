const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullNameEl   = document.getElementById('fullName');
  const emailEl      = document.getElementById('email');
  const passwordEl   = document.getElementById('password');
  const confirmEl    = document.getElementById('confirmPassword');
  const phoneEl      = document.getElementById('phone');
  const successMessage = document.getElementById('successMessage');

  const errorElements = document.querySelectorAll('.error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = '';
  }
  successMessage.innerText = '';

  let isValid = true;

  const fullName = fullNameEl.value.trim();
  const email    = emailEl.value.trim();
  const password = passwordEl.value;
  const confirm  = confirmEl.value;
  const phone    = phoneEl.value.trim();

  if (fullName === '') {
    errorElements[0].innerText = 'Full Name is required.';
    isValid = false;
  }

  if (email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    errorElements[1].innerText = 'Please enter a valid email address.';
    isValid = false;
  }

  if (password.length < 6) {
    errorElements[2].innerText = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (password !== confirm) {
    errorElements[3].innerText = 'Passwords do not match.';
    isValid = false;
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone)) {
    errorElements[4].innerText = 'Phone number must contain digits only.';
    isValid = false;
  }

  if (isValid) {
    successMessage.innerText = 'Registration Successful!';
  }
});
