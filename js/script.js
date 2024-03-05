const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameValidation = document.getElementById('nameValidation');
const emailValidation = document.getElementById('emailValidation');
const emailValidation2 = document.getElementById('emailValidation2');
let nameOutput = document.getElementById('nameOutput');
let emailOutput = document.getElementById('emailOutput');
const step1 = document.getElementById('dot-1');
const step2 = document.getElementById('dot-2');


const btnContinuePage1 = document.querySelector('.container:nth-child(1) .continue-btn');
const btnContinuePage2 = document.querySelector('.container:nth-child(2) .continue-btn');
const btnConfirm = document.querySelector('.container:nth-child(3) .continue-btn');
const formContainers = document.querySelectorAll('.container');
const option = document.querySelectorAll('.optionCheckbox')

let counter = 0;
let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
btnContinuePage1.disabled = true;
btnContinuePage2.disabled = true;

function updateButtonState() {
    if (nameInput.value.trim() !== '' && regexEmail.test(emailInput.value)) {
        // If both fields are valid, enable the button
        btnContinuePage1.disabled = false;
      } else {
        // Otherwise, disable the button
        btnContinuePage1.disabled = true;
    }
    
}

option.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      btnContinuePage2.disabled = false;
    } else {
      btnContinuePage2.disabled = true;
    }
  });
});

nameInput.addEventListener('input', updateButtonState);
emailInput.addEventListener('input', updateButtonState);


btnContinuePage1.addEventListener('click', (event) => {
    // Validate inputs
    if (nameInput.value === ' ' || nameInput.value === '' || nameInput.value === undefined) {
        nameValidation.classList.remove('d-none');
      } else {
        nameValidation.classList.add('d-none');
      }
      
      if (emailInput.value.trim() === '' || emailInput.value === undefined || emailInput.value === ' ') {
        emailValidation.classList.remove('d-none');
        emailValidation2.classList.add('d-none');
      } else if (!regexEmail.test(emailInput.value)) {
          emailValidation.classList.add('d-none');
        emailValidation2.classList.remove('d-none');
      } else {
          emailValidation2.classList.add('d-none');
      }
    // Hide current page and show next page
    formContainers[counter].classList.add('d-none');
    counter++;
    formContainers[counter].classList.remove('d-none');

    // Update counter and progress
    document.getElementById('Counter').textContent = counter + 1;
    document.querySelectorAll('.progress')[counter].classList.add('progressActive');
});



btnContinuePage2.addEventListener('click', () => {

    // Hide current page and show next page
    formContainers[counter].classList.add('d-none');
    counter++;
    formContainers[counter].classList.remove('d-none');

    // Update counter and progress
    document.getElementById('Counter').textContent = counter + 1;
    document.querySelectorAll('.progress')[counter].classList.add('progressActive');
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    nameOutput.textContent = nameValue;
    emailOutput.textContent = emailValue;

});

btnConfirm.addEventListener('click', () => {
    alert('✅Success');
});

option.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        option.forEach(function (checkbox) {
            if (checkbox.checked) {
                checkbox.parentNode.classList.add('optionCheckboxChange');
            } else {
                checkbox.parentNode.classList.remove('optionCheckboxChange');
            }
        });
    });
});

const optionLabels = document.querySelectorAll('.option');
optionLabels.forEach(label => {
    const checkbox = label.querySelector('.optionCheckbox');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const value = label.textContent.trim();
            createnewLi(value);
        }
    });
});


function createnewLi(text) {
  console.log('hhii')
    const createnewLi = document.createElement('li');
    createnewLi.textContent = text;
    ul.appendChild(createnewLi);
}

nameInput.addEventListener('input', (event) => {
    if (nameInput.value === ' ' || nameInput.value === '' || nameInput.value === undefined) {
      nameValidation.classList.remove('d-none');
    } else {
      nameValidation.classList.add('d-none');
    }
  });
  emailInput.addEventListener('input', (event) => {
    if (emailInput.value.trim() === '' || emailInput.value === undefined || emailInput.value === ' ') {
      emailValidation.classList.remove('d-none');
      emailValidation2.classList.add('d-none');
    } else if (!regexEmail.test(emailInput.value)) {
        emailValidation.classList.add('d-none');
      emailValidation2.classList.remove('d-none');
    } else {
        emailValidation2.classList.add('d-none');
      emailValidation2.classList.add('d-none');
    }
  });

  step1.addEventListener('click', (event) => {
    // Hide current page and show next page
    formContainers[counter].classList.add('d-none');
    counter-=1;
    formContainers[counter].classList.remove('d-none');

    // Update counter and progress
    document.getElementById('Counter').textContent = counter + 1;
    document.querySelectorAll('.progress')[counter].classList.add('progressActive');
  });
  step2.addEventListener('click', (event) => {
    // Hide current page and show next page
    formContainers[counter].classList.add('d-none');
    counter-=1;
    formContainers[counter].classList.remove('d-none');

    // Update counter and progress
    document.getElementById('Counter').textContent = counter + 1;
    document.querySelectorAll('.progress')[counter].classList.add('progressActive');
  });