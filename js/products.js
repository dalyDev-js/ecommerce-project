import { addToCart, removeFromCart, getCart } from "./cart.js";

export function showProducts(products) {
  let cards = "";
  for (let i = 0; i < products.length; i++) {
    const productId = products[i].id;
    const quantity = getQuantity(productId);
    cards += `<div id="card-${productId}" class="card">
      <img src="${products[i].image}" alt="${products[i].title}">
      <h2>${products[i].title}</h2>
      <h2>Rating: ${products[i].rating.rate}</h2>
      <h2>${products[i].price} $</h2>
      <h2 id="quantity-${productId}"> Quantity: ${quantity}</h2>
      <button id="addToCart-${productId}" class="addToCart" data-id="${productId}">Add to cart</button>
      <button id="removeFromCart-${productId}" class="removeFromCart" data-id="${productId}">Remove from cart</button>
    </div>`;
  }
  document.getElementById("cards").innerHTML = cards;

  products.forEach((product) => {
    document
      .getElementById(`addToCart-${product.id}`)
      .addEventListener("click", function () {
        addToCart(product);
        updateQuantityDisplay(product.id);
        console.log(getCart());
      });

    document
      .getElementById(`removeFromCart-${product.id}`)
      .addEventListener("click", function () {
        removeFromCart(product);
        updateQuantityDisplay(product.id);
        console.log(getCart());
      });
  });
  function getQuantity(productId) {
    const cart = getCart();
    const productAmount = cart.filter((item) => item.id === productId);

    return productAmount.length;
  }

  function updateQuantityDisplay(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
      quantityElement.textContent = `Quantity: ${getQuantity(productId)}`;
    }
  }
}
