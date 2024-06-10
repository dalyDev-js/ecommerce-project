import { addToCart, getCart } from "../js/cart.js";
getCart();
let params = new URLSearchParams(window.location.search);
let id = Number(params.get("id"));
console.log(id);
let cartIcon = document.getElementById("cartIcon");
cartIcon.textContent = getCart().length;
if (id) {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (product && product.id === id) {
    const quantity = getQuantity(product.id);
    document.getElementById(
      "imageDetails"
    ).innerHTML = ` <img   src="${product.image}" alt="">`;
    document.getElementById("product-detail").innerHTML = `
      <h2 class="product-title">${product.title}</h2>
      <p class="product-price">${product.price}$</p>
      <h4 class="product-description">${product.description}</h4>
      <div class="product-action">
        <div class="product-count">
          <span><button id="minus"><i class="fa-solid fa-minus"></i></button></span>
          <span id="quantity-${product.id}">${quantity}</span>
          <span><button id="plus"><i class="fa-solid fa-plus"></i></button></span>
        </div>
      </div>
    `;

    document.getElementById("plus").addEventListener("click", function () {
      addToCart(product);
      updateQuantityDisplay(product.id);
      console.log(getCart());
    });

    document.getElementById("minus").addEventListener("click", function () {
      removeFromCart(product);
      updateQuantityDisplay(product.id);
      console.log(getCart());
    });
  }
}

function getQuantity(productId) {
  const cart = getCart();
  const productAmount = cart.filter((item) => item.id === productId);
  return productAmount.length;
}

function updateQuantityDisplay(productId) {
  const quantityElement = document.getElementById(`quantity-${productId}`);
  const cartLength = getCart().length;
  console.log(cartLength);

  if (quantityElement) {
    quantityElement.textContent = getQuantity(productId);

    cartIcon.textContent = cartLength;
  }
}
