async function getProducts() {
    //check if products key exists in ls
    if (localStorage.getItem('products') === null) {
        //fetch if null is returned
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        //set products in localstorage
        localStorage.setItem('products', JSON.stringify(data))

        //then return it when done
        return JSON.parse(localStorage.getItem('products'))
    } else {
        //else parse products and return them
        return JSON.parse(localStorage.getItem('products'))
    }
}

//export products array, wait for getProducts() to finish
export const products = await getProducts();

export function getCartCount() {
    let cartCountButton = document.getElementById('cartCountButton')
    let cart = JSON.parse(localStorage.getItem('cart'))
    cartCountButton.textContent = cart.length 
}

document.addEventListener('DOMContentLoaded', () => {
    getCartCount();
})