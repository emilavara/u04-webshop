import { products } from "./fetch.js";

const allProductsSection = document.getElementById('section-all-products');

function renderProducts(arr) {
    console.log(arr)
    //clear existing html
    allProductsSection.innerHTML = ''

    //loop out array from parameter
    arr.forEach((product) => {
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

function renderFilteredProducts(category) {
    const filtered = products.filter((product) => {
        return product.category === category
    })

    renderProducts(filtered)
}

function searchProducts(value) {
    const search = products.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase()) || product.category.toLowerCase().includes(value.toLowerCase())
    })

    renderProducts(search)
}
//vi tar in radio buttons med värde som matchar kategori
//event listnere on click som kör funktionen ovan

const radioButtons = document.querySelectorAll('input[type=radio]')
radioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.value === 'all') {
            renderProducts(products)
        } else {
            renderFilteredProducts(button.value)
        }
    })
})

const input = document.getElementById('filter-products')
input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (input.value === '') {   
            renderProducts(products)
        } else {
            searchProducts(input.value)
        }
    }
})

renderProducts(products)