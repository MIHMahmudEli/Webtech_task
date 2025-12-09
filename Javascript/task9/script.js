const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = function() {
document.body.classList.toggle('dark');
};


const greeting = document.getElementById('greeting');
const hours = new Date().getHours();
if(hours < 12) greeting.textContent = 'Good Morning!';
else if(hours < 18) greeting.textContent = 'Good Afternoon!';
else greeting.textContent = 'Good Evening!';


const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');
links.forEach(link => {
link.addEventListener('click', function() {
const target = this.getAttribute('data-section');
sections.forEach(sec => {
sec.style.display = (sec.id === target) ? 'block' : 'none';
});
});
});

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');


form.addEventListener('submit', function(e){
e.preventDefault();
let valid = true;
nameError.textContent = '';
emailError.textContent = '';
messageError.textContent = '';
formSuccess.textContent = '';


if(nameInput.value.trim() === ''){
nameError.textContent = 'Name cannot be empty';
valid = false;
}


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(emailInput.value.trim())){
emailError.textContent = 'Invalid email format';
valid = false;
}


if(messageInput.value.trim().length < 10){
messageError.textContent = 'Message must be at least 10 characters';
valid = false;
}


if(valid){
formSuccess.textContent = 'Form submitted successfully!';
form.reset();
}
});