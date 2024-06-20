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

function getOrders() {
  return JSON.parse(localStorage.getItem("orders") || []);
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
  let order = orders.find((order) => order.order_id == orderId);

  dataAndId.innerHTML = `<span>${order.date}</span>
                            <span>#${order.order_id}</span>`;

  statusSelection.value = order.status;

  customerData.innerHTML = `<span>Customer Name</span>
                            <span>${order.customer_name}</span>`;

  customerEmail.innerHTML = `<span>Email</span>
                            <span>${order.email}</span>`;

  customerAddress.innerHTML = `<span>Adress</span>
                            <span>${order.address}</span>`;

  orderDetailes.classList.add("active");
}

// ////////////////////////////////////////////////////////////////////////////////////////

// display user data in the html
function orderstoDisplay(order) {
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
        <td>${order.order_id}</td>
        <td>${order.customer_name}</td>
        <td>${order.email}</td>
        <td>${order.address}</td>
        <td>${order.date}</td>
        <td>${order.total_cost}$</td>
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
  fetch("./data/orders.json")
    .then((res) => res.json())
    .then((data) => {
      if (!localStorage.getItem("orders")) {
        localStorage.setItem("orders", JSON.stringify(data));
      }
      let orders = JSON.parse(localStorage.getItem("orders") || []);
      console.log(orders);
      displayOrders(orders);
    })
    .catch((error) => console.error("Error fetching user data:", error));
}
fetchData();
