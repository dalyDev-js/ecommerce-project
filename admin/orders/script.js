let ordersInfoContainer = document.querySelector(".product-info-container");
//
let dataAndId = document.querySelector(".date-id");
let statusSelection = document.querySelector("#status-selection");
let customerData = document.querySelector(".customer-data");
let customerEmail = document.querySelector(".customer-data-email");
let customerAddress = document.querySelector(".customer-data-address");
//
let orderDetailes = document.querySelector(".order-details");
let closeOrderDetailesPage = document.querySelector(".fa-xmark");

if (!localStorage.getItem("orders")) {
  localStorage.setItem("orders", JSON.stringify([]));
}
function getOrders() {
  let users = JSON.parse(localStorage.getItem("users") || []);
  let user = users.map((user) => user);

  orders = user;
  localStorage.setItem("orders", JSON.stringify(orders));
  return orders;
}

function saveProducts(orders) {
  localStorage.setItem("products", JSON.stringify(orders));
}

// close orders-detaile page
closeOrderDetailesPage.addEventListener("click", () => {
  orderDetailes.classList.remove("active");
});

// orders-detaile

function displayOrderDetails(orderId) {
  let orders = getOrders();
  let order = orders.find((order) => order.userId == orderId);
  console.log(order.name);
  dataAndId.innerHTML = `<span>${order.date}</span>
                            <span>#${order.orderId}</span>`;

  statusSelection.value = order.status;

  customerData.innerHTML = `<span>Customer Name</span>
                            <span>${order.name}</span>`;

  customerEmail.innerHTML = `<span>Email</span>
                            <span>${order.email}</span>`;

  customerAddress.innerHTML = `<span>Adress</span>
                            <span>${order.address}</span>`;

  orderDetailes.classList.add("active");
}

// ////////////////////////////////////////////////////////////////////////////////////////

// console.log(getOrders());

// display user data in the html
function orderstoDisplay(order) {
  let totalPrices = order.cart.reduce((sum, item) => sum + item.price, 0);

  let statusClass;
  switch (order.status) {
    case "pending":
      statusClass = "pending";
      break;
    case "canceled":
      statusClass = "canceled";
      break;
    case "complete":
      statusClass = "complete";
      break;
  }

  return `<tr onclick="displayOrderDetails(${order.order_id})">
        <td>${order.orderId}</td>
        <td>${order.name}</td>
        <td>${order.email}</td>
        <td>${order.address}</td>
        <td>${order.createdAt}</td>
        <td>${totalPrices}$</td>
        <td>${order.method}</td>
        <td><span class="Status ${statusClass}">${order.status}</span></td>
    </tr>`;
}

function displayOrders(order) {
  let orderRows = order.map(orderstoDisplay).join("");
  ordersInfoContainer.innerHTML = orderRows;
}

// ////////////////////////////////////////////////////////////////////////////////////////
function fetchData() {
  let orders = getOrders();

  console.log(orders);
  displayOrders(orders);
}
fetchData();
