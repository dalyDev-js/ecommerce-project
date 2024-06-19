console.log("shoes");

async function fetchShoesData() {
  const response = await fetch("https://dalydev-js.github.io/shoes/shoes.json");
  const data = await response.json();
  showShoes(data);
  console.log(data);
}
fetchShoesData();
const userName = JSON.parse(localStorage.getItem("activeUser"));
console.log(userName.firstName);
if (Object.keys(userName).length !== 0) {
  document.getElementById("userName").style.marginRight = "30px";
  document.getElementById(
    "userName"
  ).innerHTML = `<a> Hello, ${userName.firstName}
          <div class="dropdown-content-nav" id="dropdown">
                                          <a href="../orders/">My Orders</a>
  
                                          <a href="#">Log Out</a>
                                      </div>
  
        </a>`;
}

function showShoes(products) {
  let cards = "";
  for (let i = 0; i < products.length; i++) {
    products = products.filter((product) => product.type == "Shoes");
    const productId = products[i].id;

    cards += ` <div id="item-${productId}" class="item">
              <div class="item-img">
                <img src="${products[i].carousel_images[0]}" alt="${products[i].name}">
                <div class="splash">
                  
                  <div class="addCart">
                    <button id="addToCart-${productId}" class="addToCart" data-id="${productId}">Add to Cart</button>
                    <h2 id="added-${productId}"></h2>
                  </div>
    
                </div>
    
              </div>
              <div class="item-body">
                <h2>${products[i].name}</h2>
    
                <p>${products[i].current_price} $</p>
                <span>
    
                  <strong>
                    Rating:
                  </strong>
                  ${products[i].gender}
                </span>
              
              </div>
            </div>`;
  }
  document.getElementById("card-items").innerHTML = cards;
}
// let data;
// async function initialize() {
//   try {
//     data = await getData();

//     const userName = JSON.parse(localStorage.getItem("activeUser"));
//     console.log(userName);
//     if (Object.keys(userName).length !== 0) {
//       document.getElementById("userName").style.marginRight = "30px";
//       document.getElementById(
//         "userName"
//       ).innerHTML = `<a> Hello, ${userName.firstName}
//         <div class="dropdown-content-nav" id="dropdown">
//                                         <a href="../orders/">My Orders</a>

//                                         <a href="#">Log Out</a>
//                                     </div>

//       </a>`;
//     }

//     showProducts(data);
//   } catch (error) {
//     console.error("Failed to fetch data:", error.message);
//   }
// }
