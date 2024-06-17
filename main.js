import { fetchData } from "./js/api.js";
import { showProducts } from "./products/products.js";
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
