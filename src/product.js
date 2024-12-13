import { products } from "./fetch.js";

const productSection = document.getElementById('section-product')

function renderProduct() {
    let params = new URLSearchParams(window.location.search)
    let id = parseInt(params.get('id')) - 1;
    let product = products[id];

    const imageContainer = document.createElement('div');
    const infoContainer = document.createElement('div');

    const determineStars = () => {
        let rating = Math.round(product.rating.rate)
        return 'star-count-' + rating
    }
    
    imageContainer.classList = 'product-image-container ea-cs-3 ea-ce-7';
    infoContainer.classList = 'product-info-container ea-cs-7 ea-ce-11'

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
        <button class="sss-btn primary">Add to cart</button>
    `

    productSection.appendChild(imageContainer)
    productSection.appendChild(infoContainer)
}

renderProduct();