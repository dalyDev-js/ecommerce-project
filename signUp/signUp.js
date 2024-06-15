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

export function createUsersStorage() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
}
createUsersStorage();

function addUserToStorage(user) {
  let users = JSON.parse(localStorage.getItem("users"));

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("activeUser", JSON.stringify(user));
}

//signup validation

const fName = document.getElementById("f-name");
const lName = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const nameRegex = /^[A-Za-z]{3,}$/;
const emailRegex = /^[^\s@]{3,}@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

let valid = {
  fName: false,
  lName: false,
  email: false,
  password: false,
  confirmPassword: false,
};

// First Name
fName.addEventListener("input", function () {
  if (nameRegex.test(fName.value)) {
    valid.fName = true;
    changeMessage("f-name-error", valid);
  } else {
    valid.fName = false;
    changeMessage("f-name-error", !valid, "Enter a valid name");
  }
});

// Last Name
lName.addEventListener("input", function () {
  if (nameRegex.test(lName.value)) {
    changeMessage("l-name-error", valid);
    valid.lName = true;
  } else {
    valid.lName = false;
    changeMessage("l-name-error", !valid, "Enter a valid name");
  }
});

// Email
email.addEventListener("input", function () {
  if (emailRegex.test(email.value)) {
    changeMessage("email-error", valid);
    valid.email = true;
  } else {
    changeMessage("email-error", !valid, "Enter a valid name");
    valid.email = false;
  }
});

// Password
password.addEventListener("input", function () {
  console.log(password.value);
  if (passwordRegex.test(password.value)) {
    changeMessage("password-error", valid);
    valid.password = true;
  } else {
    valid.password = false;
    changeMessage(
      "password-error",
      !valid,
      "Password should be at least 8 characters and include at least one uppercase letter and one digit."
    );
  }
});
// matching passwords
confirmPassword.addEventListener("input", function () {
  if (confirmPassword.value == password.value) {
    valid.confirmPassword = true;
    changeMessage("confirm-password-error", valid);
  } else {
    valid.confirmPassword = false;
    changeMessage("confirm-password-error", !valid, "Password don't match");
  }
});

// submit
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    valid.fName &&
    valid.lName &&
    valid.email &&
    valid.password &&
    valid.confirmPassword === true
  ) {
    let user = {
      firstName: fName.value,
      lastName: lName.value,
      email: email.value,
      password: password.value,
      cart: [],
    };
    createUsersStorage();
    addUserToStorage(user);
    window.location.href = "../products/products.html";
  } else {
    console.log("no");
  }
});

function changeMessage(id, valid, message) {
  if (valid) {
    document.getElementById(id).textContent = "✔";
    document.getElementById(id).className = "success";
  } else if (!valid) {
    document.getElementById(id).textContent = message;
    document.getElementById(id).className = "error";
  }
}
