import { signUp } from "./signup.js"
import { signIn } from "./signin.js"

const radioButtons = document.querySelectorAll('[name="formType"]')

function displayAppropriateForm (event) {
  if (event.target.checked) {
    console.log(event.target.value)
    if (event.target.value === 'signin') {
      signupFormEl.style.display = 'none'
      signinFormEl.style.display = ''
      return
    }
    signinFormEl.style.display = 'none'
    signupFormEl.style.display = ''
  }
}

for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', displayAppropriateForm)
}

const signupFormEl = document.querySelector('#signup')
const signinFormEl = document.querySelector('#signin')

if (signupFormEl) {
  signupFormEl.addEventListener('submit', signUp)
}

if (signinFormEl) {
  signinFormEl.addEventListener('submit', signIn)
}