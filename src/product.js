import { products, getCartCount } from "./fetch.js";

const productSection = document.getElementById("section-product");
const productDetailsSection = document.getElementById("section-details");

function renderProduct() {
  //render product section
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id")) - 1;
  let product = products[id];

  const imageContainer = document.createElement("div");
  const infoContainer = document.createElement("div");

  const determineStars = () => {
    let rating = Math.round(product.rating.rate);
    return "star-count-" + rating;
  };

  imageContainer.classList =
    "product-image-container ea-cs-3 ea-ce-7 ea-col-xs-12";
  infoContainer.classList =
    "product-info-container ea-cs-7 ea-ce-11 ea-col-xs-12";

  imageContainer.innerHTML = `
        <img src="${product.image}">
    `;

  infoContainer.innerHTML = `
        <div class="top-container">
            <div class="product-category">${product.category}</div>
            <h1 class="product-title">${product.title}</h1>
            <div class="product-rating-container">
                <div class="product-star-container ${determineStars()}">
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                    </div>
                </div>
                <h6 class="product-rating-amount">(${product.rating.count})</h6>
            </div>
        </div>
        <h1 class="product-price">$${product.price}</h1>
        <button class="sss-btn primary" id="addToCartBtn">Add to cart</button>
    `;

  productSection.appendChild(imageContainer);
  productSection.appendChild(infoContainer);

  let addToCartBtn = document.getElementById("addToCartBtn");

  addToCartBtn.addEventListener("click", (e) => {
    addItemToCart(e, product.id);
    addToCartBtn.textContent = "Item added to cart";

    addToCartBtn.addEventListener(
      "mouseleave",
      () => {
        addToCartBtn.textContent = "Add to cart";
      },
      { once: true }
    );
  });

  //render product details section
  const detailsContainer = document.createElement("div");
  detailsContainer.className =
    "details-container ea-ce-3 ea-cs-11 ea-col-xs-12";
  detailsContainer.innerHTML = `
        <details open>
            <summary>
                <h2>Details</h2>
                <i class="bi bi-chevron-down"></i>
            </summary>
            <p>${product.description}</p>
        </details>

        <details class="disabled">
            <summary>
                <h2>Reviews</h2>
                <i class="bi bi-chevron-down"></i>
            </summary>
        </details>

        <details class="disabled">
            <summary>
                <h2>Discussion</h2>
                <i class="bi bi-chevron-down"></i>
            </summary>
        </details>
    `;

  productDetailsSection.appendChild(detailsContainer);
}

//init cart key if null in localstorage
if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", "[]");
}

//render product onload
renderProduct();

function addItemToCart(e, id) {
  //init empty array
  let cart = [];

  //get cart array from localstorage and parse it
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  //push the product object into the cart array
  cart.push(products[id - 1]);

  //serialize the array and push it back into localstorage
  localStorage.setItem("cart", JSON.stringify(cart));

  getCartCount();
}

const goToCheckoutBtn = document.getElementById("cart-btn");
goToCheckoutBtn.addEventListener("click", () => {
  console.log("clicked");
  window.location.href = "checkout.html";
});
