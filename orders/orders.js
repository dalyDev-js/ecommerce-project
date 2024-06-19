import { signOut } from "../signOut/signOut.js";

const user = JSON.parse(localStorage.getItem("activeUser"));
console.log(user.cart);
let cartItems = user.cart;
console.log(cartItems.length);
let cards = ``;
for (let i = 0; i < cartItems.length; i++) {
  cards += ` <div class="cart-item" id="cart-item">
                        <div class="cart-body">
                            <div class="cart-details">
                                <div class="cart-item-img">
                                    <img src="${cartItems[i].image}" alt="" />
                                </div>
                                <div class="cart-item-details">
                                    <h2>
                                        ${cartItems[i].title}
                                    </h2>
                                    <strong>Placed Date:</strong> ${cartItems[i].placedAt}
                                </div>
                            </div>
                            <div class="cart-price">${cartItems[i].price}$</div>
                        </div>
                        <div class="cart-add-remove">
                            <button class="pending"> <i class="fa-solid fa-hourglass-end"></i> Pending</button>
                            <button class="approved"> <i class="fa-regular fa-circle-check"></i> Approved</button>
                            <button class="ready"><i class="fa-solid fa-truck-ramp-box"></i> Ready</button>
                            <button class="delivered"><i class="fa-solid fa-truck"></i> Delivered</button>
                        </div>
                    </div>`;

  //   `
  //       <div class="cart-item" id="cart-item">
  //                         <div class="cart-body">
  //                             <div class="cart-details">
  //                                 <div class="cart-item-img">
  //                                     <img src="${cartItems[i].image}" alt="" />
  //                                 </div>
  //                                 <div class="cart-item-details">
  //                                     <h2>
  //                                       ${cartItems[i].title}
  //                                     </h2>
  //                                     <strong>Date:</strong> 22-11-2023
  //                                 </div>
  //                             </div>
  //                             <div class="cart-price"${cartItems[i].price}$</div>
  //                         </div>
  //                         <div class="cart-add-remove">
  //                             <button class="pending"> <i class="fa-solid fa-hourglass-end"></i> Pending</button>
  //                             <button class="approved"> <i class="fa-regular fa-circle-check"></i> Approved</button>
  //                             <button class="ready"><i class="fa-solid fa-truck-ramp-box"></i> Ready</button>
  //                             <button class="delivered"><i class="fa-solid fa-truck"></i> Delivered</button>
  //                         </div>
  //                     </div>
  //                     </div>`;
}
document.getElementById("cart-items").innerHTML = cards;

const userName = JSON.parse(localStorage.getItem("activeUser"));
console.log(userName.firstName);
if (Object.keys(userName).length !== 0) {
  document.getElementById("userName").style.marginRight = "30px";
  document.getElementById(
    "userName"
  ).innerHTML = `<a> Hello, ${userName.firstName}
          <div class="dropdown-content-nav" id="dropdown">
                                          <a href="../orders/">My Orders</a>
  
                                          <a id="logOut" href="#">Log Out</a>
                                      </div>
  
        </a>`;
}
document.getElementById("logOut").addEventListener("click", function () {
  signOut();
});
