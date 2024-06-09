import { getCart, addToCart, removeFromCart } from "./cart.js";
import { fetchData } from "./api.js";
import { showProducts } from "./products.js";
document.addEventListener("DOMContentLoaded", function () {
  fetchData()
    .then((data) => {
      showProducts(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
