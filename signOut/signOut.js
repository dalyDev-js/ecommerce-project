export function signOut() {
  localStorage.setItem("activeUser", JSON.stringify({}));
  window.location.href = "https://dalydev-js.github.io/ecommerce-project/";
}
