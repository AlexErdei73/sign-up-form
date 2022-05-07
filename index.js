const passwordInput = document.querySelector("#password");
const passwordHelp = document.querySelector("#password + .help");
const passwordContainer = document.querySelector("#password-form-input");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordHelp = document.querySelector("#confirm-password + .help");
const confirmPasswordContainer = document.querySelector(
  "#confirm-password-form-input"
);

function removeErrors() {
  passwordContainer.classList.remove("error");
  confirmPasswordContainer.classList.remove("error");
}

removeErrors();
