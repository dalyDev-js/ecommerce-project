import { addToCart, getCart } from "../js/cart.js";

const userName = JSON.parse(localStorage.getItem("activeUser"));
console.log("user :", userName);

if (userName) {
  document.getElementById("userName").style.marginRight = "30px";

  document.getElementById(
    "userName"
  ).innerHTML = `Hello, ${userName.firstName}`;
}

export function showProducts(products) {
  let cards = "";
  const cartIcon = document.getElementById("cartIcon");
  if (userName) {
    cartIcon.textContent = `${getCart().length}`;
  }

  for (let i = 0; i < products.length; i++) {
    const productId = products[i].id;
    let titleStr = products[i].title.substring(0, 10);
    const quantity = getQuantity(productId);
    cards += ` <div id="item-${productId}" class="item">
          <div class="item-img">
            <img src="${products[i].image}" alt="${products[i].title}">
            <div class="splash">
              <div class="like">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div class="addCart">
                <button id="addToCart-${productId}" class="addToCart" data-id="${productId}">Add to Cart</button>
                <h2 id="added-${productId}"></h2>
              </div>

            </div>

          </div>
          <div class="item-body">
            <h2>${titleStr}</h2>

            <p>${products[i].price} $</p>
            <span>

              <strong>
                Rating:
              </strong>
              ${products[i].rating.rate}
            </span>
          
          </div>
        </div>`;
    //  <span id="quantity-${productId}">
    // <strong>Quantity:</strong> ${quantity}</span>
  }

  //================

  document.getElementById("cards").innerHTML = cards;

  products.forEach((product) => {
    document
      .getElementById(`addToCart-${product.id}`)
      .addEventListener("click", function (e) {
        e.stopPropagation();
        addToCart(product);

        updateQuantityDisplay(product.id);
        console.log(getCart());
        this.style.display = "none";
        document.getElementById(`added-${product.id}`).innerHTML =
          "Added to Cart";
      });
    document
      .getElementById(`item-${product.id}`)
      .addEventListener("click", function () {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = `../productDetails/productDetails.html?id=${product.id}`;
      });
  });

  function getQuantity(productId) {
    const cart = getCart();
    const productAmount = cart.filter((item) => item.id === productId);

    return productAmount.length;
  }

  function updateQuantityDisplay(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);

    cartIcon.textContent = `${getCart().length}`;
    console.log(getCart().length);
    if (quantityElement) {
      quantityElement.textContent = `Quantity: ${getQuantity(productId)}`;
    }
  }
}
