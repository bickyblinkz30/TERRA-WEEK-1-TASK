const form = document.getElementById('registrationForm');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('message').value;
  const password = document.getElementById('password').value

  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});