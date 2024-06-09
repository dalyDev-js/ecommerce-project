import { addToCart, removeFromCart, getCart } from "./cart.js";

export function showProducts(products) {
  let cards = "";
  for (let i = 0; i < products.length; i++) {
    const productId = products[i].id;

    cards += `<div id="card-${productId}" class="card">
      <img src="${products[i].image}" alt="${products[i].title}">
      <h2>${products[i].title}</h2>
      <h2>Rating: ${products[i].rating.rate}</h2>
      <h2>${products[i].price} $</h2>
      <button id="viewProduct-${productId}">View Product</button>
      
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
        console.log(getCart());
      });

    document
      .getElementById(`removeFromCart-${product.id}`)
      .addEventListener("click", function () {
        removeFromCart(product);
        updateQuantityDisplay(product.id);
        console.log(getCart());
      });

    document
      .getElementById(`viewProduct-${product.id}`)
      .addEventListener("click", function () {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = `product.html?id=${product.id}`;
      });
  });
}
