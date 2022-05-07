const passwordInput = document.querySelector("#password");
const passwordHelp = document.querySelector("#password + .help");
const passwordContainer = document.querySelector("#password-form-input");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordHelp = document.querySelector("#confirm-password + .help");
const confirmPasswordContainer = document.querySelector(
  "#confirm-password-form-input"
);
const form = document.querySelector("form");

function removeErrors() {
  passwordContainer.classList.remove("error");
  confirmPasswordContainer.classList.remove("error");
}

function handleRequiredValidation(container, input, help, name) {
  const value = input.value;
  if (value !== "") return;
  help.textContent = `${name} required`;
  container.classList.add("error");
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted!");
  removeErrors();
  handleRequiredValidation(
    passwordContainer,
    passwordInput,
    passwordHelp,
    "Password"
  );
  handleRequiredValidation(
    confirmPasswordContainer,
    confirmPasswordInput,
    confirmPasswordHelp,
    "Confirm Password"
  );
}

form.addEventListener("submit", handleSubmit);
