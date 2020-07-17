const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const amount = document.getElementById('amount');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const amountValue = amount.value.trim();
  
  if (fullNameValue === '') {
    setErrorFor(fullName, 'Username cannot be blank');
  } else {
    setSuccessFor(fullName);
  }
  
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  
  if (phoneValue === '') {
    setErrorFor(phone, 'Phone Number cannot be blank');
  } else {
    setSuccessFor(phone);
  }
  
  if (amountValue === '') {
    setErrorFor(amount, 'Donate Up to 5000');
  } else if (amountValue <= 5000) {
    setErrorFor(amount, 'Donations start from 5000 naira above');
  } else {
    setSuccessFor(amount);
  }
  
};

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  
  small.innerText = message;
  
  formControl.className = 'form-control-xp error';
};

function setSuccessFor(input) {
  const formControl = input.parentElement;
  
  formControl.className = 'form-control-xp success';
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}