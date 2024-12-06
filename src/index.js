import { fetchProducts } from "./main.js";

const allProductsSection = document.getElementById('section-all-products');

let products = []

fetchProducts().then(data => {
    products = data
    renderProducts();
})

function renderProducts() {
    products.forEach((product) => {
        let div = document.createElement('a')
        div.className = 'card ea-col-3 ea-col-xs-12';
        div.href = '/product.html?id=' + product.id

        const determineStars = () => {
            let rating = Math.round(product.rating.rate)
            return 'star-count-' + rating
        }

        div.innerHTML = `
            <div class="card-category">${product.category}</div>
            <div class="image-container">
                <img loading="lazy" class="card-image" src="${product.image}">
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
                        <h6 class="card-rating-amount">(${product.rating.count})</h6>
                    </div>
                </div>
            </div>
        `
        allProductsSection.append(div)
    })
}