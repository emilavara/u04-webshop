import { fetchProducts } from "./main.js";

let products = []

fetchProducts().then(data => {
    products = data
    renderProduct();
})

function renderProduct() {
    
}