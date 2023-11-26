// Capitalize the labels using JavaScript
const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  const labelText = label.textContent;
  label.textContent = labelText.charAt(0).toUpperCase() + labelText.slice(1);
});

// Get the password input element by its ID
const passwordInput = document.getElementById("pass");
const confirmPassInput = document.getElementById("pass2");
const passwordError = document.getElementsByClassName("error-msg")[0];

// Get the value of the password input

// Function to validate passwords
function validatePasswords() {
  var password = pass.value;
  var confirmPass = pass2.value;

  // Compare passwords
  if (password === confirmPass) {
    console.log("Passwords match");
    // Perform actions when passwords match
    passwordInput.classList.remove("error");
    confirmPassInput.classList.remove("error");
    passwordError.style.display = "none";
  } else {
    console.log("Passwords do not match");
    // Perform actions when passwords do not match
    passwordInput.classList.add("error");
    confirmPassInput.classList.add("error");
    passwordError.style.display = "block";
  }
}

passwordInput.addEventListener("input", validatePasswords);
confirmPassInput.addEventListener("input", validatePasswords);
