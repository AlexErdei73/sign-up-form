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
  help.textContent = `*${name} required`;
  container.classList.add("error");
}

function handlePasswordConfirmation(inputObject) {
  const { password, confirmPassword } = inputObject;
  const passwordValue = password.input.value;
  const confirmPasswordValue = confirmPassword.input.value;
  if (passwordValue === "" || confirmPasswordValue === "") return;
  if (passwordValue === confirmPasswordValue) return;
  password.container.classList.add("error");
  confirmPassword.container.classList.add("error");
  password.help.textContent = "*Passwords do not match";
  confirmPassword.help.textContent = "";
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
  const input = {
    password: {
      input: passwordInput,
      container: passwordContainer,
      help: passwordHelp,
    },
    confirmPassword: {
      input: confirmPasswordInput,
      container: confirmPasswordContainer,
      help: confirmPasswordHelp,
    },
  };
  handlePasswordConfirmation(input);
}

form.addEventListener("submit", handleSubmit);
