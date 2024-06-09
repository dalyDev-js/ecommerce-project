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
var emailInput = document.getElementById("email");
console.log(emailInput);

// document
//   .getElementById("sign-with-email")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//   });

submit.addEventListener("click", function logIn(eventInfo) {
  eventInfo.preventDefault();
  console.log(emailInput.value);

  // validateEmail();
  var isValid = true;
});

// function validateEmail() {
//   // var email = window.prompt("Please enter your Email:");

//   // Check if the email is not null or empty
//   if (emailInput.value) {
//     var first = emailInput.value.indexOf("@");
//     var last = emailInput.value.lastIndexOf("@");

//     if (first > 0 && last < email.length - 1 && first == last) {
//       alert("Valid Email");
//     } else {
//       alert("Invalid Email: '@' cannot be the first or last character.");
//     }
//   } else {
//     alert("No Email entered.");
//   }
// }

// validateEmail();
