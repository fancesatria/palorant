const form = document.getElementById("bug-report-form");

function showModal() {
  const modal = document.getElementById("successModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const server = document.getElementById("server");
  const description = document.getElementById("description");

  const inputs = [username, email, server, description];
  let isValid = true;

  // List of the Validation:
  // 1. Validation if form empty
  // 2. Validation if form is filled with '-'
  // 3. Email validation: ended withd @gmail.com
  // 4. Email validation: min 11 character (a@gmail.com)
  // 5. Descripion length validation: min 5, max 500 character

  // Reset all errors
  inputs.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.textContent = "";
  });

  // === Username validation ===
  if (username.value.trim() === "") {
    username.classList.add("invalid");
    username.nextElementSibling.textContent = "Username is required.";
    isValid = false;
  } else if (username.value === "-") {
    username.classList.add("invalid");
    username.nextElementSibling.textContent = "Invalid username.";
    isValid = false;
  }

  // === Email validation ===
  if (email.value.trim() === "") {
    email.classList.add("invalid");
    email.nextElementSibling.textContent = "Email is required.";
    isValid = false;
  } else if (email.value.length < 11) {
    email.classList.add("invalid");
    email.nextElementSibling.textContent = "Email must be at least 11 characters.";
    isValid = false;
  } else if (email.value === "-") {
    email.classList.add("invalid");
    email.nextElementSibling.textContent = "Invalid email.";
    isValid = false;
  } else if (!email.value.endsWith("@gmail.com")) {
    email.classList.add("invalid");
    email.nextElementSibling.textContent = "Email must end with @gmail.com";
    isValid = false;
  } 

  // === Server validation ===
  if (server.value === "") {
    server.classList.add("invalid");
    server.nextElementSibling.textContent = "Server selection is required.";
    isValid = false;
  }

  // === Description validation ===
  if (description.value.trim() === "") {
    description.classList.add("invalid");
    description.nextElementSibling.textContent = "Description is required.";
    isValid = false;
  } else if (description.value === "-") {
    description.classList.add("invalid");
    description.nextElementSibling.textContent = "Invalid description.";
    isValid = false;
  } else if (description.value.length < 5) {
    description.classList.add("invalid");
    description.nextElementSibling.textContent = "Description must be at least 5 characters.";
    isValid = false;
  } else if (description.value.length > 500) {
    description.classList.add("invalid");
    description.nextElementSibling.textContent = "Description must be less than 500 characters.";
    isValid = false;
  }

  if (!isValid) return;

  showModal();
  form.reset();
});
