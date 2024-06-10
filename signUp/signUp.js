//////////////////////////////image slider//////////////////////////////////////////////

let bg = document.querySelector(".bg");
let slides = document.querySelectorAll(".slide");

let activeSlide = 0;

setInterval(function () {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBackground();
  setActiveSlide();
}, 5000);

setBackground();
function setBackground() {
  bg.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//signup validation
//============================================
document
  .getElementById("sign-up-form")
  .addEventListener("submit", function (event) {
    let valid = true;
    // console.log(eventInfo);

    // Clear previous error messages
    document.getElementById("fNameError").textContent = "";
    document.getElementById("lNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // First Name validation
    const firstName = document.getElementById("f-name").value;
    if (firstName.trim() === "") {
      document.getElementById("fNameError").textContent =
        "First Name is required.";
      valid = false;
    }

    // Last Name validation
    const lastName = document.getElementById("l-name").value;
    if (lastName.trim() === "") {
      document.getElementById("lNameError").textContent =
        "Last Name is required.";
      valid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      passwordError.textContent =
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
      valid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById("confirm-password").value;
    const confirmPasswordError = document.getElementById(
      "confirmPasswordError"
    );

    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
      event.preventDefault();
    }
  });
// console.log(eventInfo);
