async function fetchAdminUsers() {
  const response = await fetch(
    "https://dalydev-js.github.io/adminUsers/adminUsers.json"
  );
  const data = await response.json();
  localStorage.setItem("adminUsers", JSON.stringify(data));
  adminLogin();
}
fetchAdminUsers();

let adminUsers = JSON.parse(localStorage.getItem("adminUsers"));

function adminLogin() {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      const user = adminUsers.find((item) => item.email === emailInput);

      if (user) {
        if (user.password === passwordInput) {
          if (user.role === "admin") {
            window.location.href = "../admin/admin.html";
          } else if (user.role === "user") {
            window.location.href = "user.html";
          }
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("User not found");
      }
    });
}
