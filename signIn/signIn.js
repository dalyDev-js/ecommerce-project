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
}, 3000);

setBackground();
function setBackground() {
  bg.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const users = JSON.parse(localStorage.getItem("users", JSON.stringify()));

//=================================================================
//email and password validation
//====================================
document
  .getElementById("sign-with-email")
  .addEventListener("submit", function (event) {
    let valid = true;

    // // Clear previous error messages
    // document.getElementById("emailError").textContent = "";
    // document.getElementById("passwordError").textContent = "";

    // // Email validation
    // const email = document.getElementById("email").value;
    // const emailError = document.getElementById("emailError");
    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!emailPattern.test(email)) {
    //   emailError.textContent = "Please enter a valid email address.";
    //   valid = false;
    // }

    // // Password validation
    // const password = document.getElementById("password").value;
    // const passwordError = document.getElementById("passwordError");
    // const passwordPattern =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if (!passwordPattern.test(password)) {
    //   passwordError.textContent =
    //     "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    //   valid = false;
    // }

    // Prevent form submission if validation fails
    // if (!valid) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const user = users.find((user) => user.email === email);
    if (user) {
      if (user.email == email && user.password == password) {
        console.log("done");
        localStorage.setItem("activeUser", JSON.stringify(user));
        window.location.href = "../products/products.html";
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("email doesn't exist");
    }
    // }
  });
