import { products } from "./fetch.js";

const allProductsSection = document.getElementById("section-all-products");

let isRendering = false;

function renderProducts(arr) {
  //recursion protection
  if (isRendering) return;
  isRendering = true;
  //clear existing html
  allProductsSection.innerHTML = "";

  //loop out array from parameter
  arr.forEach((product) => {
    let div = document.createElement("a");
    div.className = "card ea-col-3 ea-col-xs-12";
    div.href = "/product.html?id=" + product.id;

    const determineStars = () => {
      let rating = Math.round(product.rating.rate);
      return "star-count-" + rating;
    };

    div.innerHTML = `
            <div class="card-category">${product.category}</div>
            <div class="image-container">
                <img loading="lazy" class="card-image" alt="${
                  product.title
                }" src="${product.image}">
            </div>
            <div class="card-text-container">
                <h2 class="card-title h4">${product.title}</h2>
                <hr>
                <div class="card-price-rating-container">
                    <h3 class="card-price h3">$${product.price}</h3>
                    <div class="card-rating">
                        <div class="card-star-container ${determineStars()}">
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
                        <h6 class="card-rating-amount">(${
                          product.rating.count
                        })</h6>
                    </div>
                </div>
            </div>
        `;
    allProductsSection.append(div);

    isRendering = false;
  });
}

function renderFilteredProducts(category) {
  const filtered = products.filter((product) => {
    return product.category === category;
  });

  renderProducts(filtered);
}

function searchProducts(value) {
  const search = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
    );
  });

  renderProducts(search);
}

const currentCategoryText = document.getElementById("currentCategoryText");
const radioButtons = document.querySelectorAll("input[type=radio]");
radioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "all") {
      renderProducts(products);
    } else {
      renderFilteredProducts(button.value);
    }

    currentCategoryText.textContent = button.value;
  });
});

const input = document.getElementById("filter-products");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (input.value === "") {
      radioButtons[0].checked = true;
      currentCategoryText.textContent = "All";

      renderProducts(products);
    } else {
      searchProducts(input.value);
    }
  }
});

const sortCategorySelectbox = document.getElementById("sortCategorySelectbox");
const sortCategorySelectboxSelected =
  document.getElementById("currentSortFilter");
const sortCategorySelectboxOptions = document.querySelectorAll(
  ".custom-selectbox-option"
);

sortCategorySelectbox.addEventListener("click", () => {
  sortCategorySelectbox.classList.toggle("open");
});

sortCategorySelectboxOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    sortProducts(option.dataset.sortValue, option.dataset.sortTitle);
  });
});

function sortProducts(value, valueText) {
  let sorted = [];

  if (value === "relevance") {
    sorted = products;
  } else if (value === "price-asc") {
    sorted = products.sort((a, b) => a.price - b.price);
  } else if (value === "price-desc") {
    sorted = products.sort((a, b) => a.price - b.price);
    sorted.reverse();
  } else if (value === "a-to-z") {
    sorted = products.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
  } else if (value === "z-to-a") {
    sorted = products.sort((b, a) =>
      b.title.toLowerCase().localeCompare(a.title.toLowerCase())
    );
    sorted.reverse();
  }

  sortCategorySelectboxSelected.textContent = valueText;
  renderProducts(sorted);
}

//init cart key if null in localstorage
if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", "[]");
}

renderProducts(products);

const goToCheckoutBtn = document.getElementById("cart-btn");
goToCheckoutBtn.addEventListener("click", () => {
  gtag('event', 'went_to_checkout', {
    'event_label': 'user went to checkout'
  });

  window.location.href = "checkout.html";
});

gtag('event', 'loaded_page', {
  'app_name': 'shopshopshop',
  'page_name': 'Home'
});