if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
export function getCart() {
  return cart;
}

export function addToCart(product) {
  if (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

export function removeFromCart(product) {
  let productIndex = cart.findIndex((item) => item.id === product.id);
  if (productIndex > -1) {
    cart.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("product not found");
  }
}
