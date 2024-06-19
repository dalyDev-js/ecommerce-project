let ordersInfoContainer = document.querySelector(".product-info-container");

// ////////////////////////////////////////////////////////////////////////////////////////
// display user data in the html
function orderstoDisplay(order) {
  return `<tr>
        <td>${order.order_id}</td>
        <td>${order.customer_name}</td>
        <td>${order.email}</td>
        <td>${order.address}</td>
        <td>${order.date}</td>
        <td>${order.total_cost}</td>
        <td>${order.method}</td>
        <td>${order.status}</td>
    </tr>`;
}

function displayOrders(order) {
  let orderRows = order.map(orderstoDisplay).join("");
  ordersInfoContainer.innerHTML = orderRows;
}

// ////////////////////////////////////////////////////////////////////////////////////////
function fetchData() {
  fetch("./data/orders.json")
    .then((res) => res.json())
    .then((data) => {
      if (!localStorage.getItem("orders")) {
        localStorage.setItem("orders", JSON.stringify(data));
      }
      let orders = JSON.parse(localStorage.getItem("orders") || []);
      displayOrders(orders);
    })
    .catch((error) => console.error("Error fetching user data:", error));
}
fetchData();
