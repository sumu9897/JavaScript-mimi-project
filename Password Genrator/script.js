const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*=-_";

const pLengthInput = document.getElementById("p-length");
const uppercaseCheckbox = document.getElementById("p-uppercase");
const lowercaseCheckbox = document.getElementById("p-lowercase");
const pNumberCheckbox = document.getElementById("p-number");
const pSymbolCheckbox = document.getElementById("p-symbol");
const submitButton = document.getElementById("submit");
const passwordInput = document.getElementById("password");
const copyButton = document.getElementById("copy");

let initialCharacterSet = "";

submitButton.addEventListener("click", checkRequirements);
copyButton.addEventListener("click", copyToClipboard);

function checkRequirements() {
  uppercaseCheckbox.checked ? (initialCharacterSet += uppercaseChars) : "";
  lowercaseCheckbox.checked ? (initialCharacterSet += lowercaseChars) : "";
  pNumberCheckbox.checked ? (initialCharacterSet += numberChars) : "";
  pSymbolCheckbox.checked ? (initialCharacterSet += symbolChars) : "";

  passwordInput.value = generatePassword(initialCharacterSet, pLengthInput.value);
}

function generatePassword(initialSet, length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += initialSet.charAt(Math.floor(Math.random() * initialSet.length));
  }
  return password;
}

function copyToClipboard() {
  if (passwordInput.value === "") {
    alert("Please generate a password first");
  } else {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password has been copied");
  }
}
