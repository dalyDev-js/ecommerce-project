import { getCart } from "./js/cart.js";
getCart();
const cartIcon = document.getElementById("cartIcon");
console.log("heee");
cartIcon.textContent = `${getCart().length}`;
