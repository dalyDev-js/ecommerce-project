import { addToCart, getCart } from "../js/cart.js";

const userName = JSON.parse(localStorage.getItem("activeUser"));

if (Object.keys(userName).length !== 0) {
  document.getElementById("userName").style.marginRight = "30px";

  document.getElementById(
    "userName"
  ).innerHTML = `Hello, ${userName.firstName}`;
}
console.log(userName);

export function showProducts(products) {
  let cards = "";
  const cartIcon = document.getElementById("cartIcon");
  if (Object.keys(userName).length !== 0) {
    cartIcon.textContent = `${getCart().length}`;
  }

  for (let i = 0; i < products.length; i++) {
    const productId = products[i].id;
    let titleStr = products[i].title.substring(0, 20);

    cards += ` <div id="item-${productId}" class="item">
          <div class="item-img">
            <img src="${products[i].image}" alt="${products[i].title}">
            <div class="splash">
              <div class="like">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div class="addCart">
                <button id="addToCart-${productId}" class="addToCart" data-id="${productId}">Add to Cart</button>
                <h2 class="added" id="added-${productId}"></h2>
              </div>

            </div>

          </div>
          <div class="item-body">
            <h2>${titleStr}</h2>

            <p>${products[i].price} $</p>
            <span>

              <strong>
               <i class="fa-solid fa-star-half-stroke"></i> Rating:
              </strong>
              ${products[i].rating.rate}
            </span>
          
          </div>
        </div>`;
  }

  document.getElementById("card-items").innerHTML = cards;

  if (Object.keys(userName).length !== 0) {
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
          window.location.href = `../productDetails/?id=${product.id}`;
        });
    });
  } else {
    console.log("please log in first");
  }

  function getQuantity(productId) {
    const cart = getCart();
    const productAmount = cart.filter((item) => item.id === productId);

    return productAmount.length;
  }

  function updateQuantityDisplay(productId) {
    if (Object.keys(userName).length !== 0) {
      const quantityElement = document.getElementById(`quantity-${productId}`);

      cartIcon.textContent = `${getCart().length}`;
      console.log(getCart().length);
      if (quantityElement) {
        quantityElement.textContent = `Quantity: ${getQuantity(productId)}`;
      }
    }
  }
}
// hello
// 2nd
