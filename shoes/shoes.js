console.log("shoes");

async function fetchShoesData() {
  const response = await fetch("https://dalydev-js.github.io/shoes/shoes.json");
  const data = await response.json();
  showShoes(data);
  console.log(data);
}
fetchShoesData();

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
