if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

let activeUser = JSON.parse(localStorage.getItem("activeUser"));

let cart = activeUser
  ? activeUser.cart
  : JSON.parse(localStorage.getItem("cart"));

console.log(cart);

export function getCart() {
  return cart;
}

export function addToCart(product) {
  if (product) {
    cart.push(product);
    activeUser.cart = cart;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));

    let users = JSON.parse(localStorage.getItem("users"));
    let userIndex = users.findIndex((user) => user.email === activeUser.email);
    if (userIndex > -1) {
      users[userIndex].cart = cart;
    }
    localStorage.setItem("users", JSON.stringify(users));
  }
}

export function removeFromCart(product) {
  let productIndex = cart.findIndex((item) => item.id === product.id);
  if (productIndex > -1) {
    cart.splice(productIndex, 1);
    activeUser.cart = cart;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));

    let users = JSON.parse(localStorage.getItem("users"));
    let userIndex = users.findIndex((user) => user.email === activeUser.email);
    if (userIndex > -1) {
      users[userIndex].cart = cart;
    }
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Product removed from cart");
  } else {
    console.log("Product not found in cart");
  }
}
