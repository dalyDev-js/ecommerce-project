import { fetchData } from "./js/api.js";
import { showProducts } from "./products/products.js";
import { signOut } from "signOut.js";

document.addEventListener("DOMContentLoaded", function () {
  function isShowProductsPage() {
    return document.getElementById("cards") !== null;
  }
  if (isShowProductsPage()) {
    fetchData()
      .then((data) => {
        showProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

if (!localStorage.getItem("activeUser")) {
  localStorage.setItem("activeUser", JSON.stringify({}));
}
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}
// if (Object.keys(JSON.parse(localStorage.getItem("activeUser"))).length == 0) {
//   document.getElementById("dropdown").style.display = "none";
// }

async function initialize() {
  try {
    data = await getData();

    const userName = JSON.parse(localStorage.getItem("activeUser"));

    if (Object.keys(userName).length !== 0) {
      document.getElementById("userName").style.marginRight = "30px";
      document.getElementById(
        "userName"
      ).innerHTML = `<a> Hello, ${userName.firstName}
        <div class="dropdown-content-nav" id="dropdown">
                                        <a href="orders/">My Orders</a>

                                          <a id="logOut" href="#">Log Out</a>
                                    </div>
      
      </a>`;
    }

    showProducts(data);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }

  document.getElementById("logOut").addEventListener("click", function () {
    signOut();
  });
}
