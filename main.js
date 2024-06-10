import { getCart, addToCart, removeFromCart } from "./js/cart.js";
import { fetchData } from "./js/api.js";
import { showProducts } from "./products/products.js";
document.addEventListener("DOMContentLoaded", function () {
  fetchData()
    .then((data) => {
      showProducts(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
